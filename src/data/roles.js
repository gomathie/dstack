// Role categories Dubblestack staffs. Drives the Services page and the
// homepage roles grid.

export const roleCategories = [
  {
    slug: 'finance',
    icon: '📊',
    title: 'Finance & Accounting',
    summary:
      'Bookkeepers, staff accountants, controllers, and AP/AR specialists who close your books on schedule and speak your accounting stack.',
    roles: ['Bookkeeper', 'Staff Accountant', 'Financial Analyst', 'AP/AR Specialist', 'Payroll Administrator'],
    tools: ['QuickBooks', 'Xero', 'NetSuite', 'Bill.com'],
  },
  {
    slug: 'engineering',
    icon: '💻',
    title: 'Software & Engineering',
    summary:
      'Full-stack, front-end, and back-end engineers who ship production code, plus QA and DevOps support for teams that need coverage.',
    roles: ['Full-Stack Engineer', 'Front-End Engineer', 'Back-End Engineer', 'QA Engineer', 'DevOps Engineer'],
    tools: ['React', 'Node.js', 'Python', 'AWS', 'PostgreSQL'],
  },
  {
    slug: 'marketing',
    icon: '📣',
    title: 'Marketing & Content',
    summary:
      'Content marketers, paid-media buyers, SEO specialists, and designers who own a channel rather than just take tickets.',
    roles: ['Content Marketer', 'SEO Specialist', 'Paid Media Buyer', 'Graphic Designer', 'Social Media Manager'],
    tools: ['HubSpot', 'Google Ads', 'Ahrefs', 'Figma', 'Webflow'],
  },
  {
    slug: 'operations',
    icon: '🗂️',
    title: 'Executive & Operations',
    summary:
      'Executive assistants, operations coordinators, and project managers who take the calendar, the inbox, and the follow-through off your plate.',
    roles: ['Executive Assistant', 'Operations Coordinator', 'Project Manager', 'Data Entry Specialist'],
    tools: ['Notion', 'Asana', 'Slack', 'Google Workspace'],
  },
  {
    slug: 'customer',
    icon: '💬',
    title: 'Customer Success & Support',
    summary:
      'Support reps and customer success managers who handle your queue in your tone of voice, across the time zones you actually need covered.',
    roles: ['Support Representative', 'Customer Success Manager', 'Technical Support Specialist', 'Community Manager'],
    tools: ['Zendesk', 'Intercom', 'HubSpot', 'Salesforce'],
  },
  {
    slug: 'legal',
    icon: '⚖️',
    title: 'Legal & Compliance',
    summary:
      'Paralegals and legal assistants with real commercial experience — contract review, filings, and research without partner-level billing.',
    roles: ['Paralegal', 'Legal Assistant', 'Contract Administrator', 'Compliance Analyst'],
    tools: ['DocuSign', 'Clio', 'Ironclad', 'LexisNexis'],
  },
]

// The vetting funnel, used on Services and For Talent.
export const vettingStages = [
  {
    title: 'Sourced locally',
    desc: 'Our in-country teams recruit through local universities, professional networks, and referrals — not job-board spam.',
  },
  {
    title: 'Screened for English',
    desc: 'Written and spoken assessment. We grade for working fluency in your business context, not textbook grammar.',
  },
  {
    title: 'Tested on the actual work',
    desc: 'Role-specific practical assessment — a real reconciliation, a real code review, a real support ticket.',
  },
  {
    title: 'Interviewed by a specialist',
    desc: 'A recruiter who has hired for that function runs a structured interview and checks references.',
  },
  {
    title: 'Presented to you',
    desc: 'You see three to five finalists with scorecards, recorded intros, and salary expectations attached.',
  },
]
