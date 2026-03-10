export type BlogPost = {
  slug: string
  urlSlug: string  // the URL path segment
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  emoji: string
  content: Array<{ heading?: string; body: string }>
  relatedSlugs: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'five-things-first-time-buyers-fix-first',
    urlSlug: '5-things-first-time-buyers',
    title: '5 things every first time buyer should fix first',
    excerpt: "You've got the keys. The survey is done. Now what? Here are the five things that will save you the most time, money, and stress in your first year.",
    author: 'FixItFirst Team',
    date: '12 February 2025',
    readTime: '5 min read',
    category: 'First home',
    emoji: '🔑',
    relatedSlugs: ['bleed-a-radiator', 'fix-a-dripping-tap', 'unblock-a-drain', 'fill-a-hole-in-a-wall'],
    content: [
      {
        body: "Moving into your first home is equal parts exciting and terrifying. Suddenly you're responsible for everything — and nobody taught you any of it. Here's where to start.",
      },
      {
        heading: '1. Bleed your radiators before winter',
        body: "If your radiators are cold at the top but warm at the bottom, they have air trapped inside. Bleeding them takes 5 minutes, costs £1 for a bleed key, and can save £50–80 on your heating bill. Do this every October — it's one of the highest-return 15 minutes you'll spend all year.",
      },
      {
        heading: '2. Fix any dripping taps immediately',
        body: "A dripping tap wastes 5,500 litres of water per year and costs you money on every water bill. The fix is a £2 rubber washer and 45 minutes of your time. Don't leave it — it won't fix itself and the constant sound at night is maddening.",
      },
      {
        heading: '3. Learn to unblock a drain',
        body: "This will happen. Kitchen drains block with fat and food residue. Bathroom drains block with hair. A £3 plunger and 20 minutes is all it takes. Calling a plumber costs £60–120 for the same job. This is the most common callout in the UK — and the most pointlessly expensive.",
      },
      {
        heading: '4. Fill the holes from the previous owner',
        body: "Almost every house comes with mysterious holes in the walls — from previous picture hooks, curtain rails, shelves, or worse. Polyfilla and a filling knife cost £5. The result looks professional with 20 minutes of effort. This is also useful when you're renting — filling your own nail holes protects your deposit.",
      },
      {
        heading: '5. Get to know your boiler',
        body: "Know where the pressure gauge is (should read 1–1.5 bar), how to top up the pressure via the filling loop, and when it was last serviced. A boiler service costs £60–100 and could save you from a breakdown mid-January — when every engineer in the country is booked out for weeks.",
      },
      {
        heading: 'The bonus: know where your shut-offs are',
        body: "Before anything breaks, find your stopcock (usually under the kitchen sink), your fusebox (hallway or under the stairs), and your gas meter shut-off (outside or in a cupboard). Knowing where they are when something goes wrong is worth more than any tool you own.",
      },
    ],
  },
  {
    slug: 'how-i-saved-500-first-year-diy',
    urlSlug: 'how-i-saved-500',
    title: 'How I saved £500 in my first year doing DIY',
    excerpt: "I had zero DIY experience when I moved into my first flat. Here's exactly what I fixed myself, how much each job saved, and what I learned.",
    author: 'Guest post',
    date: '28 January 2025',
    readTime: '7 min read',
    category: 'Money saving',
    emoji: '💷',
    relatedSlugs: ['fix-a-dripping-tap', 'bleed-a-radiator', 'put-up-shelves', 'paint-a-room', 'unblock-a-drain'],
    content: [
      {
        body: "A year ago I moved into my first flat with no tools, no skills, and no idea what I was doing. This is the breakdown of every job I tackled myself and how much I saved versus calling someone in.",
      },
      {
        heading: 'Month 1: The dripping kitchen tap (saved £95)',
        body: "The tap had been dripping when I moved in. I assumed it needed a plumber. I spent an afternoon reading a guide. One £2 rubber washer and 45 minutes later — fixed. A plumber quoted me £80–110 for the same job. That washer is the highest-return purchase I have ever made.",
      },
      {
        heading: 'Month 2: Bleeding radiators (saved £0 but gained a noticeably warmer flat)',
        body: "Okay this one didn't save money directly — but every radiator in the place was half-warm. I bled eight of them on a Saturday morning. The flat was noticeably warmer that evening. The bleed key cost £1.50. Total investment: £1.50 and 40 minutes.",
      },
      {
        heading: 'Month 4: Putting up shelves (saved £90)',
        body: "I needed shelves in the living room. A joiner quoted £120. I bought a spirit level, some wall plugs, and a secondhand drill for £30. The shelves cost £45. Total: £75 versus £165 for the joiner. Saving: £90 (minus the drill I'll use for the rest of my life).",
      },
      {
        heading: 'Month 6: Painting the bedroom (saved £305)',
        body: "The bedroom was magnolia. I hated it. A decorator quoted £350. Paint, brushes, roller, and a Saturday cost £45. I did it myself in a weekend. The edges aren't perfect. I don't care. It's my colour and I did it myself.",
      },
      {
        heading: 'Month 10: Unblocking the bathroom drain (saved £80)',
        body: "I am embarrassed how long I left this. Shower draining slowly for months. A £3 drain snake and 15 minutes. That's it. A plumber would have charged £60–100 for the same.",
      },
      {
        heading: 'The total',
        body: "Rough saving across the year: £570 not including the tools I now own and will use for decades. The real lesson isn't the money — it's that I now look at every problem in the flat as something I might be able to fix, not something I have to pay someone else to deal with.",
      },
    ],
  },
  {
    slug: 'ten-tools-every-home-needs',
    urlSlug: '10-tools-every-home-needs',
    title: 'The 10 tools every home needs',
    excerpt: "You don't need a full workshop. You need 10 things. Here's exactly what to buy, what to spend, and what each one will be used for.",
    author: 'FixItFirst Team',
    date: '5 January 2025',
    readTime: '4 min read',
    category: 'Tools',
    emoji: '🧰',
    relatedSlugs: ['put-up-shelves', 'fit-a-curtain-pole', 'fix-a-dripping-tap'],
    content: [
      {
        body: "The number one reason people call a tradesperson for a job they could do themselves is that they don't have the right tools. Here's the minimum viable toolkit for any home.",
      },
      {
        heading: 'The list',
        body: '1. Screwdriver set (flat + Phillips) — £5–15\n2. Cordless drill — £30–60\n3. Tape measure — £3–8\n4. Spirit level — £5–15\n5. Hammer — £8–20\n6. Adjustable spanner — £8–15\n7. Pliers — £5–12\n8. Stanley knife — £3–8\n9. Radiator bleed key — £1–3\n10. PTFE tape — £1–3',
      },
      {
        heading: 'What this costs in total',
        body: "Buying the minimum of each: around £75–160. Buying mid-range quality: around £120–200. These tools will last 20+ years with basic care. A single plumber's callout costs more than half this list. Buy them once.",
      },
      {
        heading: 'What to buy first',
        body: "If you're starting from nothing: get the screwdriver set and tape measure first (£10–25 total). They'll get you through flat-pack furniture, minor repairs, and measuring up for everything else. Add the drill when you need to hang shelves or curtain poles. The rest can wait until you actually need them.",
      },
      {
        heading: 'The one tool most people forget',
        body: "The radiator bleed key. It costs £1.50 and most people don't own one. It fits in a keychain. Every October you'll use it to bleed your radiators and save money on your heating bill. Buy it now, before you need it.",
      },
      {
        heading: 'What not to buy',
        body: "Don't buy a full toolkit set in a plastic case from a supermarket. The screwdrivers snap, the spanners slip, and you end up buying proper tools anyway. Better to buy four good tools than sixteen bad ones. Brands: Stanley, Bahco, and Draper are all reliable mid-range options available everywhere.",
      },
    ],
  },
]
