import { JSDOM } from "jsdom";

interface Options {
  // Origin used to resolve relative links (router links, public files)
  baseUrl: string;
}

export interface MarkdownPage {
  title: string;
  body: string;
}

const ELEMENT_NODE = 1;
const TEXT_NODE = 3;

const SKIPPED_TAGS = new Set(["IMG", "SCRIPT", "STYLE", "NOSCRIPT", "SVG"]);
const HEADING_TAGS = new Set(["H2", "H3", "H4", "H5"]);

const collapse = (text: string) => text.replace(/\s+/g, " ");

// Wraps text with a Markdown marker, keeping surrounding spaces outside of it
const wrap = (text: string, marker: string) => {
  const [, before, inner, after] = text.match(/^(\s*)(.*?)(\s*)$/s) || [];
  return inner ? `${before}${marker}${inner}${marker}${after}` : text;
};

const escapeLinkText = (text: string) => text.replace(/([[\]])/g, "\\$1");

// Converts server-rendered view HTML to Markdown. The page's <h1> is returned
// as the title and other headings are shifted down one level, so each page
// can be nested under a "##" section of a bigger document.
export function htmlToMarkdown(html: string, options: Options): MarkdownPage {
  const { document } = new JSDOM(html).window;
  const resolve = (href: string) => new URL(href, options.baseUrl).href;

  let title = "";

  const isSkipped = (el: Element) =>
    SKIPPED_TAGS.has(el.tagName) || el.id === "back-link";

  const inline = (node: Node): string => {
    if (node.nodeType === TEXT_NODE) return collapse(node.textContent || "");
    if (node.nodeType !== ELEMENT_NODE) return "";

    const el = node as Element;
    if (isSkipped(el)) return "";

    const content = Array.from(el.childNodes).map(inline).join("");

    switch (el.tagName) {
      case "A": {
        const text = content.trim();
        const href = el.getAttribute("href");
        if (!href || !text) return content;
        return `[${escapeLinkText(text)}](${resolve(href)})`;
      }
      case "STRONG":
      case "B":
        return wrap(content, "**");
      case "EM":
      case "I":
        return wrap(content, "_");
      case "BR":
        return "\n";
      default:
        return content;
    }
  };

  const iframe = (el: Element): string => {
    const src = el.getAttribute("src") || "";
    const youtube = src.match(/youtube(?:-nocookie)?\.com\/embed\/([\w-]+)/);
    if (youtube) {
      return `[Watch on YouTube](https://www.youtube.com/watch?v=${youtube[1]})`;
    }
    return src ? `[Embedded content](${resolve(src)})` : "";
  };

  const blocks = (parent: Element): string[] => {
    const out: string[] = [];
    let pendingInline = "";

    const flush = () => {
      if (pendingInline.trim()) out.push(pendingInline.trim());
      pendingInline = "";
    };

    for (const node of Array.from(parent.childNodes)) {
      if (node.nodeType !== ELEMENT_NODE) {
        pendingInline += inline(node);
        continue;
      }

      const el = node as Element;
      if (isSkipped(el)) continue;

      if (el.tagName === "H1") {
        flush();
        title = collapse(el.textContent || "").trim();
      } else if (HEADING_TAGS.has(el.tagName)) {
        flush();
        const level = Number(el.tagName[1]) + 1;
        out.push(`${"#".repeat(level)} ${inline(el).trim()}`);
      } else if (el.tagName === "P") {
        flush();
        const text = inline(el).trim();
        if (text) out.push(text);
      } else if (el.tagName === "UL" || el.tagName === "OL") {
        flush();
        const items = Array.from(el.children)
          .filter((li) => li.tagName === "LI")
          .map((li, i) => {
            const marker = el.tagName === "OL" ? `${i + 1}.` : "-";
            return `${marker} ${inline(li).trim()}`;
          });
        if (items.length) out.push(items.join("\n"));
      } else if (el.tagName === "IFRAME") {
        flush();
        const link = iframe(el);
        if (link) out.push(link);
      } else if (
        ["A", "STRONG", "B", "EM", "I", "SPAN", "BR"].includes(el.tagName)
      ) {
        pendingInline += inline(el);
      } else {
        // Generic containers (section, div...)
        flush();
        out.push(...blocks(el));
      }
    }

    flush();
    return out;
  };

  const body = blocks(document.body)
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return { title, body };
}
