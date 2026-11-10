import { languageFromPath, localisedPath } from "./routing";

export const origin = "https://janvich.cz";
export const pagePaths = ["/", "/reference", "/en/", "/en/reference/"];

export function pageMetadata(pathname: string) {
  const language = languageFromPath(pathname);
  const projects = /\/reference\/?$/.test(pathname);
  const title = language === "en"
    ? `${projects ? "Projects | " : ""}Jan Vích - Academic sculptor and conservator-restorer`
    : `${projects ? "Reference | " : ""}Jan Vích - Akademický sochař a restaurátor`;
  const description = language === "en"
    ? projects
      ? "Selected conservation and restoration projects by Jan Vích, including Hospital Kuks, stone and stucco sculpture, architectural stonework and historic façades."
      : "Jan Vích, academic sculptor and conservator-restorer. Conservation and restoration of historic monuments, stone and stucco sculpture, architectural stonework and façades."
    : projects
      ? "Referenční restaurátorské zakázky Jana Vícha: Hospital Kuks, sochařská díla v kameni a štuku, kamenná architektura a historické fasády."
      : "Jan Vích - Akademický sochař a restaurátor. Restaurátorské práce, průzkumy a obnova historických památek, kamenné architektury a fasád. Povolení MK ČR.";
  const base = projects ? "/reference" : "/";
  return { language, title, description, canonical: origin + localisedPath(base, language), cs: origin + localisedPath(base, "cs"), en: origin + localisedPath(base, "en") };
}