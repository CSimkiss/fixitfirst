/**
 * Affiliate / retailer configuration
 * -----------------------------------
 * All buy-links on the site are generated from these templates.
 * When additional affiliate accounts are approved, add their tracking IDs
 * below and add the retailer id to ENABLED_RETAILERS — every link site-wide
 * updates automatically.
 *
 * Currently active:
 *   Amazon Associates UK  → tag=fixitfirst-21
 *
 * Currently inactive (placeholders for future use):
 *   B&Q        → https://www.diy.com/search?term=TOOLNAME
 *   Screwfix   → https://www.screwfix.com/search?search=TOOLNAME
 *   Toolstation → https://www.toolstation.com/search?q=TOOLNAME
 */

// ─── Tracking IDs ────────────────────────────────────────────────────────────

const AMAZON_TAG        = 'fixitfirst-21'
const BNQ_AFFID         = '' // e.g. 'fixitfirst'   – appended as &affid=
const SCREWFIX_AFFID    = '' // e.g. 'fixitfirst'   – appended as &affid=
const TOOLSTATION_AFFID = '' // e.g. 'fixitfirst'   – appended as &affid=

// ─── Enabled retailers ───────────────────────────────────────────────────────
// Only retailers listed here are surfaced in the UI.

export const ENABLED_RETAILERS: string[] = ['amazon', 'screwfix']

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

function withParam(url: string, param: string, value: string): string {
  return value ? `${url}&${param}=${encodeURIComponent(value)}` : url
}

export const RETAILERS: Retailer[] = [
  {
    id: 'amazon',
    name: 'Amazon',
    bg: 'bg-orange-500',
    colour: 'text-white',
    buildUrl: (name) =>
      withParam(
        `https://www.amazon.co.uk/s?k=${encodeURIComponent(name)}`,
        'tag',
        AMAZON_TAG,
      ),
  },
  // ── Inactive retailers — kept for future expansion ──────────────────────
  {
    id: 'bnq',
    name: 'B&Q',
    bg: 'bg-green-600',
    colour: 'text-white',
    buildUrl: (name) =>
      withParam(
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
      withParam(
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
      withParam(
        `https://www.toolstation.com/search?q=${encodeURIComponent(name)}`,
        'affid',
        TOOLSTATION_AFFID,
      ),
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function retailer(id: string): Retailer {
  return RETAILERS.find((r) => r.id === id)!
}

// ─── Primary affiliate URL helpers ───────────────────────────────────────────
// These are the canonical functions to use across the site.
// Currently all route to Amazon (the only enabled retailer).

/** Amazon UK search URL for a tool or product name */
export function amazonToolUrl(name: string): string {
  return retailer('amazon').buildUrl(name)
}

/** Amazon UK search URL for a guide topic ("Shop this fix" CTA) */
export function amazonGuideUrl(guideName: string): string {
  return retailer('amazon').buildUrl(`tools for ${guideName}`)
}

// ─── Screwfix helpers ─────────────────────────────────────────────────────────

/** Screwfix search URL for a tool — shown as secondary "pickup today" option */
export function screwfixToolUrl(name: string): string {
  return retailer('screwfix').buildUrl(name)
}

/** Screwfix search URL for a guide topic */
export function screwfixGuideUrl(guideName: string): string {
  return retailer('screwfix').buildUrl(`tools for ${guideName}`)
}
