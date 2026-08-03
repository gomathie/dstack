// ⚠️ PLACEHOLDER CONTENT — the companies, people, and figures below are
// illustrative examples written to fill the layout. Replace every entry with
// real, permissioned customer stories before publishing this publicly.

export const caseStudies = [
  {
    slug: 'northbeam-logistics',
    client: 'Northbeam Logistics',
    industry: 'Freight & Logistics',
    size: '45 employees',
    image: '/images/2150171838.jpg',
    headline: 'Closing the books in 4 days instead of 3 weeks',
    challenge:
      'Northbeam\'s single in-house accountant was spending the first three weeks of every month reconciling freight invoices by hand. Month-end reporting reached leadership so late it was effectively historical, and hiring a second US accountant would have cost more than the reporting was worth.',
    approach:
      'We placed two staff accountants out of our Peru hub, both experienced with high-volume invoice reconciliation in NetSuite. They overlap with Northbeam\'s Chicago team from 8am to 4pm Central, so questions get answered the same day rather than the next morning.',
    outcome:
      'Month-end close dropped from 19 days to 4. The in-house accountant moved off reconciliation entirely and now owns forecasting and vendor negotiation.',
    metrics: [
      { value: '19 → 4', label: 'Days to close' },
      { value: '$142k', label: 'Annual cost avoided' },
      { value: '2', label: 'Roles filled in 3 weeks' },
    ],
    quote:
      'I stopped thinking of them as contractors somewhere around week three. They are in our standups, they own the close calendar, and they catch things our old process missed.',
    quoteAuthor: 'Dana Whitfield',
    quoteRole: 'VP Finance, Northbeam Logistics',
  },
  {
    slug: 'palette-health',
    client: 'Palette Health',
    industry: 'Digital Health',
    size: '120 employees',
    image: '/images/2150312701.jpg',
    headline: 'Support coverage across three time zones without night shifts',
    headlineShort: 'Round-the-clock support without burning out the team',
    challenge:
      'Palette Health had grown into European and Asia-Pacific markets while running support entirely from Denver. First-response times outside US hours stretched past nine hours, and the US team was rotating through night shifts that drove two resignations in a quarter.',
    approach:
      'We built a five-person support pod split across our Philippines and Venezuela hubs, giving genuine follow-the-sun coverage. Every rep works their own daytime hours. We ran them through Palette\'s clinical-context training before go-live so tone and escalation rules matched the existing team.',
    outcome:
      'Median first response fell to 11 minutes globally. Night rotations ended for the Denver team, and CSAT rose four points in the first full quarter.',
    metrics: [
      { value: '9h → 11m', label: 'Median first response' },
      { value: '+4 pts', label: 'CSAT change' },
      { value: '0', label: 'Night shifts required' },
    ],
    quote:
      'We were about to lose the support team we had spent two years building. This let us cover the globe without asking anyone to work at 3am.',
    quoteAuthor: 'Marcus Bell',
    quoteRole: 'Director of Customer Experience, Palette Health',
  },
  {
    slug: 'grove-and-fen',
    client: 'Grove & Fen',
    industry: 'DTC Retail',
    size: '18 employees',
    image: '/images/117525.jpg',
    headline: 'A two-person marketing team that outproduced an agency',
    challenge:
      'Grove & Fen were paying a retainer agency $11,000 a month for content and paid social. Turnaround on a single landing page ran two weeks, the agency rotated juniors through the account, and nobody on the retainer knew the product well enough to write about it convincingly.',
    approach:
      'We placed a content marketer and a paid-media buyer, both embedded directly in Grove & Fen\'s Slack and reporting to the founder. Because they are dedicated rather than shared across accounts, they learned the catalogue properly in the first month.',
    outcome:
      'Content output tripled while spend dropped by more than half. Blog-attributed revenue passed the old agency\'s paid results within two quarters.',
    metrics: [
      { value: '−58%', label: 'Marketing spend' },
      { value: '3×', label: 'Content output' },
      { value: '2 qtrs', label: 'To beat agency results' },
    ],
    quote:
      'The agency gave us deliverables. These two gave us a marketing team. That difference shows up in every piece of copy.',
    quoteAuthor: 'Priya Raman',
    quoteRole: 'Founder, Grove & Fen',
  },
]

// Short pull-quotes for the homepage carousel/grid.
export const testimonials = [
  {
    quote:
      'I stopped thinking of them as contractors somewhere around week three. They are in our standups and they own the close calendar.',
    author: 'Dana Whitfield',
    role: 'VP Finance, Northbeam Logistics',
    avatar: '/images/9.png',
  },
  {
    quote:
      'We were about to lose the support team we had spent two years building. This let us cover the globe without asking anyone to work at 3am.',
    author: 'Marcus Bell',
    role: 'Director of CX, Palette Health',
    avatar: '/images/18475.jpg',
  },
  {
    quote:
      'The agency gave us deliverables. These two gave us a marketing team. That difference shows up in every piece of copy.',
    author: 'Priya Raman',
    role: 'Founder, Grove & Fen',
    avatar: '/images/2282.jpg',
  },
]
