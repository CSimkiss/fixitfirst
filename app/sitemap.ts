import { MetadataRoute } from 'next'

const BASE_URL = 'https://fixit-first.co.uk'

const guides = [
  'bleed-a-radiator',
  'bleed-all-radiators',
  'boiler-breakdown',
  'boiler-breakdown-what-to-do',
  'change-a-lightbulb',
  'draft-proof-door-window',
  'fill-a-hole-in-a-wall',
  'fill-and-sand-a-wall',
  'fit-a-curtain-pole',
  'fix-a-broken-cabinet-hinge',
  'fix-a-cold-radiator',
  'fix-a-doorbell',
  'fix-a-dripping-tap',
  'fix-a-fence-panel',
  'fix-a-garden-tap',
  'fix-a-leaking-pipe-joint',
  'fix-a-noisy-radiator',
  'fix-a-running-toilet',
  'fix-a-squeaky-floorboard',
  'fix-a-sticking-door',
  'fix-a-sticking-drawer',
  'fix-low-water-pressure',
  'hang-a-picture-frame',
  'install-a-smart-thermostat',
  'lay-decking-boards',
  'paint-a-room',
  'put-up-shelves',
  'read-your-energy-meter',
  'repair-a-ceiling-crack',
  'replace-a-light-switch',
  'replace-a-plug-fuse',
  'replace-a-shower-head',
  'replace-a-smoke-alarm-battery',
  'replace-a-toilet-seat',
  'repressurise-a-boiler',
  'reset-a-tripped-circuit-breaker',
  'strip-wallpaper',
  'tile-a-splashback',
  'turn-off-electricity-fuse-box',
  'turn-off-water-mains',
  'unblock-a-drain',
  'unblock-a-gutter',
  'unblock-a-toilet',
]

const staticPages: MetadataRoute.Sitemap = [
  { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  { url: `${BASE_URL}/tools`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  { url: `${BASE_URL}/find-a-pro`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  { url: `${BASE_URL}/search`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  { url: `${BASE_URL}/cookies`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const guidePages: MetadataRoute.Sitemap = guides.map(slug => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...guidePages]
}
