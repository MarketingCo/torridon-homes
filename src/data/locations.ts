export interface Location {
  slug: string
  name: string
  region: string
  description: string
}

export const locations: Location[] = [
  {
    slug: "leith",
    name: "Leith",
    region: "EH6",
    description:
      "Waterfront regeneration, industrial-to-residential conversions, modern luxury apartments",
  },
  {
    slug: "morningside",
    name: "Morningside",
    region: "EH10",
    description:
      "Premium villa extensions, Edwardian renovations, high-end residential",
  },
  {
    slug: "stockbridge",
    name: "Stockbridge",
    region: "EH4",
    description:
      "Heritage townhouse restoration, conservation-area developments, Georgian properties",
  },
  {
    slug: "corstorphine",
    name: "Corstorphine",
    region: "EH12",
    description:
      "Family home developments, large-scale extensions, modern estates",
  },
  {
    slug: "portobello",
    name: "Portobello",
    region: "EH15",
    description:
      "Coastal luxury homes, seaside developments, premium residential",
  },
  {
    slug: "colinton",
    name: "Colinton",
    region: "EH13",
    description:
      "Woodland luxury estates, high-end new builds, exclusive developments",
  },
  {
    slug: "new-town",
    name: "New Town",
    region: "EH2/EH3",
    description:
      "Heritage compliance, listed building restoration, Georgian townhouse conversions",
  },
  {
    slug: "bruntsfield",
    name: "Bruntsfield",
    region: "EH10",
    description:
      "Apartment renovations, tenement conversions, urban luxury",
  },
  {
    slug: "penicuik",
    name: "Penicuik",
    region: "EH26",
    description:
      "New build developments, family homes, Midlothian commuter belt",
  },
  {
    slug: "dalkeith",
    name: "Dalkeith",
    region: "EH22",
    description:
      "New build residential, Midlothian developments, family housing",
  },
]
