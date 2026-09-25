import { describe, expect, it } from "vitest";
import { htmlToMarkdown } from "../htmlToMarkdown";

const baseUrl = "https://example.com";
const convert = (html: string) => htmlToMarkdown(html, { baseUrl });

describe("htmlToMarkdown", () => {
  it("extracts the h1 as title and shifts other headings", () => {
    const { title, body } = convert(
      "<section><h1>Work</h1><h2>Code</h2><h3>Current</h3></section>",
    );
    expect(title).toBe("Work");
    expect(body).toBe("### Code\n\n#### Current");
  });

  it("converts paragraphs, collapsing whitespace", () => {
    const { body } = convert(
      "<p>  Hello\n   <strong>world</strong> ! </p><p>Bye</p>",
    );
    expect(body).toBe("Hello **world** !\n\nBye");
  });

  it("keeps spaces around emphasis outside of the markers", () => {
    const { body } = convert(
      '<p><strong>Hire me ? </strong><a href="/c">Contact</a></p>',
    );
    expect(body).toBe("**Hire me ?** [Contact](https://example.com/c)");
  });

  it("converts lists", () => {
    const { body } = convert(
      "<ul><li>One</li><li><a href='/b'>Two</a></li></ul>",
    );
    expect(body).toBe("- One\n- [Two](https://example.com/b)");
  });

  it("keeps absolute links and resolves relative ones", () => {
    const { body } = convert(
      '<p>See <a href="https://github.com/me">GitHub</a> or <a href="/key.gpg">my key</a>.</p>',
    );
    expect(body).toBe(
      "See [GitHub](https://github.com/me) or [my key](https://example.com/key.gpg).",
    );
  });

  it("drops the back link, images and Vue SSR comments", () => {
    const { body } = convert(
      '<!--[--><section><a id="back-link" href="/">Back</a><img src="a.png"><p>Text</p></section><!--]-->',
    );
    expect(body).toBe("Text");
  });

  it("converts YouTube embeds to watch links", () => {
    const { body } = convert(
      '<div><iframe src="https://www.youtube-nocookie.com/embed/PD1neSpaRTY"></iframe></div>',
    );
    expect(body).toBe(
      "[Watch on YouTube](https://www.youtube.com/watch?v=PD1neSpaRTY)",
    );
  });
});
