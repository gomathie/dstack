// Pricing plans. Figures are illustrative — confirm against the real rate card
// before this goes in front of customers.

export const plans = [
  {
    name: 'Essential',
    tagline: 'For your first remote hire',
    price: 1200,
    unit: '/ month per hire',
    highlight: false,
    blurb: 'Support, admin, and data roles. One flat fee, billed monthly from the start date.',
    features: [
      'Dedicated full-time professional',
      'Sourcing, vetting, and testing included',
      'Payroll, tax, and compliance handled',
      'Replacement guarantee in first 60 days',
      'Email support, 1 business-day response',
    ],
  },
  {
    name: 'Professional',
    tagline: 'For teams scaling a function',
    price: 1800,
    unit: '/ month per hire',
    highlight: true,
    blurb: 'Specialist roles across finance, marketing, and customer success, with a named account manager.',
    features: [
      'Everything in Essential',
      'Specialist and senior-level roles',
      'Named account manager',
      'Shortlist in 14 days or less',
      'Quarterly performance reviews',
      'Replacement guarantee in first 90 days',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For multi-hire teams',
    price: null,
    unit: 'Custom',
    highlight: false,
    blurb: 'Engineering pods and multi-role teams with volume pricing and dedicated recruiting capacity.',
    features: [
      'Everything in Professional',
      'Engineering and multi-role pods',
      'Volume pricing from 5 hires',
      'Dedicated in-country recruiting team',
      'Custom contracts and security review',
      'Priority replacement, 24-hour response',
    ],
  },
]

export const pricingFaqs = [
  {
    q: 'Is there a recruiting or onboarding fee?',
    a: 'No. Sourcing, testing, interviewing, and onboarding are all included in the monthly fee. You pay nothing until your hire starts, and there is no placement fee on top.',
  },
  {
    q: 'What exactly does the monthly fee cover?',
    a: 'The professional\'s full compensation, our recruiting and management costs, local payroll processing, tax withholding, statutory benefits in their country, and equipment stipend where applicable. It is one number with nothing hidden underneath it.',
  },
  {
    q: 'What happens if the hire is not working out?',
    a: 'Tell your account manager. We replace the hire at no additional cost within the guarantee window for your plan, and we keep the search running until the seat is filled properly.',
  },
  {
    q: 'Am I locked into a contract?',
    a: 'No long-term commitment. Billing is monthly and you can end an engagement with 30 days\' written notice.',
  },
  {
    q: 'Do prices change based on time zone?',
    a: 'Coverage far outside a professional\'s local working hours carries a shift differential, which we quote up front. Standard overlap with US and European hours does not cost extra.',
  },
  {
    q: 'How do payments work?',
    a: 'You are invoiced monthly in USD, payable by ACH, wire, or card. We handle paying the professional in their local currency, on local payroll, on time.',
  },
]
