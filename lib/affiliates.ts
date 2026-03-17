/**
 * Affiliate / retailer configuration
 * -----------------------------------
 * All buy-links on the dashboard are generated from these templates.
 * When affiliate accounts are approved, drop the tracking IDs into the
 * constants below — every link site-wide updates automatically.
 *
 * Placeholder format used until IDs are confirmed:
 *   B&Q         → https://www.diy.com/search?term=TOOLNAME
 *   Screwfix    → https://www.screwfix.com/search?search=TOOLNAME
 *   Toolstation → https://www.toolstation.com/search?q=TOOLNAME
 *   Amazon      → https://www.amazon.co.uk/s?k=TOOLNAME
 */

// ─── Tracking IDs ────────────────────────────────────────────────────────────
// Replace empty strings with real IDs when approved.

const BNQ_AFFID        = '' // e.g. 'fixitfirst'   – appended as &affid=
const SCREWFIX_AFFID   = '' // e.g. 'fixitfirst'   – appended as &affid=
const TOOLSTATION_AFFID = '' // e.g. 'fixitfirst'  – appended as &affid=
const AMAZON_TAG        = '' // e.g. 'fixitfirst-21' – appended as &tag=

// ─── Retailer definitions ─────────────────────────────────────────────────────

export type Retailer = {
  id: string
  name: string
  /** Tailwind background colour class */
  bg: string
  /** Tailwind text colour class */
  colour: string
  /** Build a buy/search URL for a given tool name */
  buildUrl: (toolName: string) => string
}

function withAffid(url: string, param: string, value: string): string {
  return value ? `${url}&${param}=${encodeURIComponent(value)}` : url
}

// ─── Convenience URL helpers (used by guide pages and components) ─────────────

function retailer(id: string): Retailer {
  return RETAILERS.find((r) => r.id === id)!
}

/** Screwfix search URL for a tool or product name */
export function screwfixToolUrl(name: string): string {
  return retailer('screwfix').buildUrl(name)
}

/** Amazon UK search URL for a tool or product name */
export function amazonToolUrl(name: string): string {
  return retailer('amazon').buildUrl(name)
}

/** Screwfix search URL for a guide topic (shop-this-fix) */
export function screwfixGuideUrl(guideName: string): string {
  return retailer('screwfix').buildUrl(guideName)
}

/** Amazon UK search URL for a guide topic (shop-this-fix) */
export function amazonGuideUrl(guideName: string): string {
  return retailer('amazon').buildUrl(guideName)
}

export const RETAILERS: Retailer[] = [
  {
    id: 'bnq',
    name: 'B&Q',
    bg: 'bg-green-600',
    colour: 'text-white',
    buildUrl: (name) =>
      withAffid(
        `https://www.diy.com/search?term=${encodeURIComponent(name)}`,
        'affid',
        BNQ_AFFID,
      ),
  },
  {
    id: 'screwfix',
    name: 'Screwfix',
    bg: 'bg-red-600',
    colour: 'text-white',
    buildUrl: (name) =>
      withAffid(
        `https://www.screwfix.com/search?search=${encodeURIComponent(name)}`,
        'affid',
        SCREWFIX_AFFID,
      ),
  },
  {
    id: 'toolstation',
    name: 'Toolstation',
    bg: 'bg-yellow-400',
    colour: 'text-gray-900',
    buildUrl: (name) =>
      withAffid(
        `https://www.toolstation.com/search?q=${encodeURIComponent(name)}`,
        'affid',
        TOOLSTATION_AFFID,
      ),
  },
  {
    id: 'amazon',
    name: 'Amazon',
    bg: 'bg-orange-500',
    colour: 'text-white',
    buildUrl: (name) =>
      withAffid(
        `https://www.amazon.co.uk/s?k=${encodeURIComponent(name)}`,
        'tag',
        AMAZON_TAG,
      ),
  },
]
