import { useLocation } from "react-router-dom";
import translations from "./en.json";
import { languageFromPath, localisedPath } from "./routing";

const english: Record<string, string> = translations;

export function useLanguage() {
  const { pathname } = useLocation();
  const language = languageFromPath(pathname);
  return {
    language,
    isEnglish: language === "en",
    t: (czech: string) => language === "en" ? english[czech] ?? czech : czech,
    path: (target: string) => localisedPath(target, language),
  };
}