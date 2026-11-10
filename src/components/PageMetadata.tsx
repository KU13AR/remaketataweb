import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageMetadata } from "@/i18n/seo";

export function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = pageMetadata(pathname);
    document.documentElement.lang = meta.language;
    document.title = meta.title;
    const setMeta = (attribute: "name" | "property", name: string, value: string) => {
      let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.append(element);
      }
      element.content = value;
    };
    setMeta("name", "description", meta.description);
    for (const prefix of ["og", "twitter"]) {
      setMeta(prefix === "og" ? "property" : "name", `${prefix}:title`, meta.title);
      setMeta(prefix === "og" ? "property" : "name", `${prefix}:description`, meta.description);
    }
    setMeta("property", "og:url", meta.canonical);
    setMeta("property", "og:locale", meta.language === "en" ? "en_GB" : "cs_CZ");
    setMeta("property", "og:locale:alternate", meta.language === "en" ? "cs_CZ" : "en_GB");
    for (const [rel, lang, href] of [["canonical", "", meta.canonical], ["alternate", "cs", meta.cs], ["alternate", "en", meta.en], ["alternate", "x-default", meta.cs]]) {
      const selector = lang ? `link[rel="${rel}"][hreflang="${lang}"]` : `link[rel="${rel}"]`;
      let element = document.querySelector<HTMLLinkElement>(selector);
      if (!element) {
        element = document.createElement("link");
        element.rel = rel;
        if (lang) element.hreflang = lang;
        document.head.append(element);
      }
      element.href = href;
    }
  }, [pathname]);
  return null;
}