// Pricing follows the flat-rate model: one simple rate for every role, with the
// "no fees, no lock-in" promises doing the persuading rather than tiers.
//
// ── To publish an actual figure ──────────────────────────────────────────────
// Set `rate` to the number (e.g. '$13') and `rateUnit` to its unit. While
// `rate` is null the page shows a quote-based CTA instead, and nothing else
// needs to change.
export const pricing = {
  rate: null,
  rateUnit: '/ hour per team member',
  // Shown in place of the figure while `rate` is null.
  rateFallback: 'One flat rate',
  rateFallbackUnit: 'Same simple rate for every role we staff',
  promises: ['No placement fees', 'No long-term contracts', 'No surprises'],
}

// What the flat rate covers. This is the real substance of the pricing page.
export const included = [
  {
    title: 'Recruiting and sourcing',
    desc: 'In-country teams run the search through local universities, professional networks, and referrals.',
  },
  {
    title: 'Vetting and testing',
    desc: 'English assessment plus a practical, role-specific test. Roughly 3 in 100 applicants reach your shortlist.',
  },
  {
    title: 'Employer of record',
    desc: 'We employ the professional legally in their country. You get one invoice and no foreign entity to set up.',
  },
  {
    title: 'Payroll and tax',
    desc: 'Paid in local currency, on local payroll, with withholding and statutory contributions handled.',
  },
  {
    title: 'Statutory benefits',
    desc: 'Healthcare, leave, and contributions as required by the professional\'s jurisdiction.',
  },
  {
    title: 'Onboarding and equipment',
    desc: 'Systems access, an equipment stipend, and a structured 30-day check-in cadence.',
  },
  {
    title: 'Ongoing account management',
    desc: 'A named contact after placement, quarterly performance reviews, and help when something goes wrong.',
  },
  {
    title: 'Replacement guarantee',
    desc: 'If a placement does not work out, we refill the seat at no additional placement cost.',
  },
]

// What the rate deliberately does not include, stated plainly. Being explicit
// about exclusions is what makes the "no surprises" claim credible.
export const notIncluded = [
  'Placement or recruiting fees — there are none, ever',
  'Onboarding or setup charges',
  'Percentage-of-salary commissions',
  'Charges for replacing a hire under guarantee',
]

export const pricingFaqs = [
  {
    q: 'Why not publish a rate card?',
    a: 'Because a single published number would be wrong for most roles. Seniority and the overlap hours you need move the figure more than anything else. Send us the role and you get a specific quote back, usually within one business day — no discovery gauntlet first.',
  },
  {
    q: 'Is there a recruiting or onboarding fee?',
    a: 'No. Sourcing, testing, interviewing, and onboarding are all covered. You pay nothing until your hire actually starts, and there is no placement fee on top.',
  },
  {
    q: 'What exactly does the rate cover?',
    a: 'The professional\'s full compensation, our recruiting and management costs, local payroll processing, tax withholding, statutory benefits in their country, and an equipment stipend where applicable. It is one number with nothing hidden underneath it.',
  },
  {
    q: 'What happens if the hire is not working out?',
    a: 'Tell your account manager. We replace the hire at no additional placement cost and keep the search running until the seat is filled properly.',
  },
  {
    q: 'Am I locked into a contract?',
    a: 'No long-term commitment. Billing is monthly and you can end an engagement with 30 days\' written notice.',
  },
  {
    q: 'Does the rate change based on time zone?',
    a: 'Coverage far outside a professional\'s local working hours carries a shift differential, which we quote up front. Standard overlap with US and European hours does not cost extra.',
  },
  {
    q: 'How do payments work?',
    a: 'You are invoiced monthly in USD, payable by ACH, wire, or card. We handle paying the professional in their local currency, on local payroll, on time.',
  },
]
