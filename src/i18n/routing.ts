export type Language = "cs" | "en";

export function languageFromPath(pathname: string): Language {
  return /^\/en(?:\/|$)/.test(pathname) ? "en" : "cs";
}

export function localisedPath(path: string, language: Language): string {
  const unprefixed = path.replace(/^\/en(?=\/|$)/, "") || "/";
  const [pathname, ...suffix] = unprefixed.split(/(?=[?#])/);
  const page = pathname.replace(/\/$/, "") || "/";
  const target = language === "en" ? (page === "/" ? "/en/" : `/en${page}/`) : page;
  return target + suffix.join("");
}