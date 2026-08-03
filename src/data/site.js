// Single source of truth for company details and navigation.
// Update here and every header, footer, and contact block follows.

export const company = {
  name: 'Dubblestack',
  tagline: 'Remote Hiring Company',
  description:
    'Dubblestack recruits, vets, and manages elite remote professionals for growing companies — at roughly 70% less than a US equivalent hire.',
  email: 'hello@dubblestack.com',
  talentEmail: 'talent@dubblestack.com',
  phone: '+1 (555) 014-2200',
  linkedin: 'https://www.linkedin.com/company/dubblestack/',
  foundedYear: 2019,
  hubs: ['Venezuela', 'Peru', 'Nigeria', 'Philippines'],
}

// Headline numbers. These appear on the homepage and About page — keep the two
// in sync by editing only here.
export const stats = [
  { value: '70%', label: 'Lower cost than a US hire' },
  { value: '14', label: 'Days to first shortlist' },
  { value: '600+', label: 'Professionals placed' },
  { value: '94%', label: 'Placements still active at 12 months' },
]

export const primaryNav = [
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
]

export const footerNav = [
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'For Employers',
    links: [
      { label: 'Services', to: '/services' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Hire Talent', to: '/hire-form' },
    ],
  },
  {
    heading: 'For Talent',
    links: [
      { label: 'Why Dubblestack', to: '/for-talent' },
      { label: 'Open Roles', to: '/for-talent#roles' },
      { label: 'Career Site', to: '/profile-login' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
]
