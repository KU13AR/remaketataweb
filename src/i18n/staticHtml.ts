import { pageMetadata } from "./seo";

const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export function localiseHtml(html: string, pathname: string): string {
  const meta = pageMetadata(pathname);
  const clean = html
    .replace(/<html lang="[^"]*"/, `<html lang="${meta.language}"`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(meta.title)}</title>`)
    .replace(/\s*<meta\s+(?:name|property)="(?:description|keywords|og:(?:title|description|url|locale|locale:alternate)|twitter:(?:title|description))"[^>]*>/g, "")
    .replace(/\s*<link\s+rel="(?:canonical|alternate)"[^>]*>/g, "");
  const tags = [
    `<meta name="description" content="${escape(meta.description)}" />`,
    ...["og", "twitter"].flatMap(prefix => ["title", "description"].map(key => `<meta ${prefix === "og" ? "property" : "name"}="${prefix}:${key}" content="${escape(meta[key as "title" | "description"])}" />`)),
    `<meta property="og:url" content="${meta.canonical}" />`,
    `<meta property="og:locale" content="${meta.language === "en" ? "en_GB" : "cs_CZ"}" />`,
    `<meta property="og:locale:alternate" content="${meta.language === "en" ? "cs_CZ" : "en_GB"}" />`,
    `<link rel="canonical" href="${meta.canonical}" />`,
    `<link rel="alternate" hreflang="cs" href="${meta.cs}" />`,
    `<link rel="alternate" hreflang="en" href="${meta.en}" />`,
    `<link rel="alternate" hreflang="x-default" href="${meta.cs}" />`,
  ];
  return clean.replace("</head>", `    ${tags.join("\n    ")}\n  </head>`);
}