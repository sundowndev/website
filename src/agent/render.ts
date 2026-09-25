import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";
import { createMemoryHistory, createRouter, RouterView } from "vue-router";
import config from "@/config";
import routes from "@/router/routes";
import { htmlToMarkdown, type MarkdownPage } from "./htmlToMarkdown";

interface Section extends MarkdownPage {
  url: string;
}

async function renderPage(path: string): Promise<string> {
  const router = createRouter({ history: createMemoryHistory(), routes });
  const app = createSSRApp({ render: () => h(RouterView) });
  app.use(router);

  await router.push(path);
  await router.isReady();

  return renderToString(app);
}

// Renders every named view of the website into a single Markdown document,
// meant to be used as a chatbot system prompt. Only runs server-side (Vite
// dev server middleware and build step, see vite.config.ts).
export async function renderAgentMarkdown(): Promise<string> {
  const pages = routes.filter((route) => route.name && route.component);

  const sections: Section[] = [];
  for (const { path } of pages) {
    const html = await renderPage(path);
    const url = new URL(path, config.url).href;
    sections.push({ url, ...htmlToMarkdown(html, { baseUrl: config.url }) });
  }

  const owner = sections[0]?.title;
  const header = [
    `# ${owner ? `${owner} — personal website` : "Personal website"}`,
    `Content of ${config.url}, one section per page.`,
  ].join("\n\n");

  const body = sections.map(({ title, url, body }) =>
    [`## ${title || url}`, `Source: ${url}`, body].filter(Boolean).join("\n\n"),
  );

  return [header, ...body].join("\n\n") + "\n";
}
