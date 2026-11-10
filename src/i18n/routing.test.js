import { describe, expect, test } from "bun:test";
import { languageFromPath, localisedPath } from "./routing";
import { pageMetadata } from "./seo";

describe("language routing", () => {
  test("Czech remains default", () => { expect(languageFromPath("/")).toBe("cs"); expect(localisedPath("/reference", "cs")).toBe("/reference"); });
  test("English uses /en/", () => { expect(languageFromPath("/en/")).toBe("en"); expect(localisedPath("/", "en")).toBe("/en/"); expect(localisedPath("/reference", "en")).toBe("/en/reference/"); });
  test("switching keeps the corresponding page and gallery", () => { expect(localisedPath("/en/reference/", "cs")).toBe("/reference"); expect(localisedPath("/#galerie?open=hospital-kuks&from=reference", "en")).toBe("/en/#galerie?open=hospital-kuks&from=reference"); });
  test("each language has its own canonical and reciprocal alternatives", () => { const en = pageMetadata("/en/reference/"); expect(en.canonical).toBe("https://janvich.cz/en/reference/"); expect(en.cs).toBe("https://janvich.cz/reference"); expect(pageMetadata("/reference").en).toBe(en.canonical); });
});