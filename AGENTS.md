# Architecture
- Keep Czech source content as the translation keys and use a checked-in English dictionary through the route-derived language hook; shared components preserve the existing design without runtime machine translation.
- English routes use /en/ and /en/reference/ while Czech routes remain unchanged; language switching preserves section and gallery identifiers.
- Generate route-specific static HTML heads during Vite builds for multilingual crawler metadata and GitHub Pages deep links; client metadata follows navigation.
- Deployment is manual through workflow_dispatch so repository updates do not deploy without authorisation.
