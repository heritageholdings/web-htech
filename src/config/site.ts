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
    street: "Via Spadari, 2",
    postalCode: "20123",
    city: "Milano",
  },
  nav: [
    { name: "About", href: "/about" },
    { name: "Contacts", href: "/contacts" },
  ],
} as const

/** e.g. "Via Spadari, 2 • 20123, Milano" */
export const addressOneLine = `${site.address.street} • ${site.address.postalCode}, ${site.address.city}`
