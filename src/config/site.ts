/**
 * Single source of truth for company details.
 *
 * The footer and the contacts page both read from here. They previously held
 * separate copies of the office address and drifted apart.
 */
export const site = {
  name: "HTECH",
  legalName: "HTECH S.r.l.",
  title: "HTECH SRL",
  description: "Building the Future of Private Markets",
  url: "https://teamhtech.com",
  vat: "IT11713660964",
  email: {
    info: "info@teamhtech.com",
    careers: "careers@teamhtech.com",
  },
  address: {
    country: "Italy",
    street: "Corso di Porta Nuova, 34",
    postalCode: "20121",
    city: "Milano",
  },
  nav: [
    { name: "About", href: "/about" },
    { name: "Contacts", href: "/contacts" },
  ],
} as const

/** e.g. "Corso di Porta Nuova, 34 • 20121, Milano" */
export const addressOneLine = `${site.address.street} • ${site.address.postalCode}, ${site.address.city}`
