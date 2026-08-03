// Blog posts. `body` is trusted, hand-authored HTML rendered with v-html —
// keep it that way. If posts ever come from a CMS or user input, sanitize
// before rendering or switch to a markdown renderer with escaping on.

export const posts = [
  {
    slug: 'advantages-and-disadvantages-of-flexible-work-hours',
    title: 'The Advantages and Disadvantages of Providing Flexible Work Hours',
    excerpt:
      'Flexible scheduling is the most requested benefit in remote work and the one most often implemented badly. Here is what it actually costs you, and what it buys.',
    image: '/images/2149321602.webp',
    category: 'Team Management',
    date: '2026-06-18',
    readingTime: 7,
    author: { name: 'Elena Marquez', role: 'Head of Talent Operations', avatar: '/images/9.png' },
    body: `
<p>Ask a remote team what they value most and flexible hours will out-rank salary more often than any executive expects. Ask the same team six months after a badly implemented flexible-hours policy, and you will hear about meetings that creep into evenings and colleagues who feel permanently unreachable. The benefit is real. So is the failure mode.</p>

<h2>What flexibility actually buys you</h2>
<p><strong>A wider hiring pool.</strong> The moment you stop requiring 9-to-5 in a single time zone, your candidate pool expands by an order of magnitude. This is the single largest advantage and the one most companies undercount, because they only measure it after they have already narrowed the search.</p>
<p><strong>Higher retention among senior people.</strong> Flexibility matters most to the professionals with the most going on outside work — caregivers, people studying, people with genuine expertise and options. These are exactly the people who are expensive to replace.</p>
<p><strong>Output measured properly.</strong> Flexible hours force you to define what "done" means, because you can no longer use presence as a proxy for effort. Teams often report this as the most valuable side effect, and it is the one nobody plans for.</p>

<h2>What it costs you</h2>
<p><strong>Coordination overhead.</strong> Every hour of overlap you give up, you pay back in asynchronous communication. A team spread across eight hours of drift needs written decisions, recorded demos, and genuinely good documentation. If your culture is verbal and improvisational, flexibility will feel like friction before it feels like freedom.</p>
<p><strong>Blurred boundaries.</strong> Without a defined end to the day, many people simply do not stop. Flexible hours quietly become longer hours. This is the most common way the policy backfires, and it disproportionately affects your most conscientious employees.</p>
<p><strong>Uneven mentorship.</strong> Junior staff learn by proximity. When nobody shares hours reliably, the people who need incidental guidance the most get the least of it.</p>

<h2>How to implement it without the downside</h2>
<p>The teams that get this right almost always converge on the same structure:</p>
<ul>
  <li><strong>Define core hours, not full schedules.</strong> Four hours of mandatory overlap covers standups, reviews, and anything genuinely synchronous. The rest of the day belongs to the individual.</li>
  <li><strong>Put the schedule in writing, publicly.</strong> Every person's working hours should be visible to the whole team in one place. Most "unreachable colleague" complaints are actually "undocumented schedule" problems.</li>
  <li><strong>Set a response-time expectation, not an availability expectation.</strong> "Within four working hours" is a commitment someone can keep. "Online when I need you" is not.</li>
  <li><strong>Protect the end of the day explicitly.</strong> If leadership sends messages at 11pm, no written policy will convince anyone that flexibility runs in both directions.</li>
</ul>

<h2>The honest summary</h2>
<p>Flexible hours are not a perk you can bolt onto an otherwise synchronous culture. They are a trade: you exchange coordination convenience for reach, retention, and clearer definitions of good work. Teams that make that trade deliberately do well. Teams that announce the policy and change nothing else end up with the costs and none of the benefit.</p>
`,
  },
  {
    slug: 'remote-work-policies-for-startups',
    title: 'Developing Remote Work Policies: Guidelines for Startups',
    excerpt:
      'Most startup remote policies are either three lines long or thirty pages copied from a company ten times their size. Here is the version that fits a team of twenty.',
    image: '/images/2147768643.webp',
    category: 'Operations',
    date: '2026-05-29',
    readingTime: 9,
    author: { name: 'Tobi Adeyemi', role: 'Operations Lead', avatar: '/images/18475.jpg' },
    body: `
<p>A remote work policy exists to answer questions before they become arguments. That is its entire job. Judged against that standard, most startup policies fail in one of two directions: too thin to settle anything, or so long that nobody reads far enough to find the answer.</p>

<h2>Start with the questions that actually recur</h2>
<p>Before writing anything, list the questions your team has genuinely asked in the last six months. In most startups the list is short and predictable:</p>
<ul>
  <li>What hours am I expected to be reachable?</li>
  <li>How quickly should I reply to a message?</li>
  <li>Who pays for my desk, chair, laptop, and internet?</li>
  <li>Can I work from another country, and for how long?</li>
  <li>What counts as time off, and who approves it?</li>
  <li>What do we do with confidential material outside an office?</li>
</ul>
<p>A policy that answers those six well is more useful than a thirty-page handbook that answers them ambiguously.</p>

<h2>Write the six sections</h2>
<h3>1. Working hours and overlap</h3>
<p>State the core overlap window in a named time zone, and state it once. Avoid phrases like "generally available during business hours" — different readers will resolve that differently, which is precisely the failure you are writing the document to prevent.</p>

<h3>2. Communication expectations</h3>
<p>Separate urgency tiers explicitly. Something like: chat within four working hours, email within one working day, anything genuinely urgent goes by phone. Then name which channel is for which, because otherwise every message defaults to the most intrusive one available.</p>

<h3>3. Equipment and expenses</h3>
<p>Say what the company buys, what it reimburses, what the cap is, and who owns the hardware when someone leaves. Ambiguity here creates resentment out of proportion to the amounts involved.</p>

<h3>4. Location and travel</h3>
<p>Working from another country has tax and legal implications that surprise founders constantly. Set a notice requirement and a duration limit, and require approval for anything longer. You are not being restrictive; you are avoiding accidentally establishing a taxable presence somewhere.</p>

<h3>5. Time off</h3>
<p>Remote teams under-take leave, not over-take it. Set a minimum, not just a maximum, and have managers model it. Unlimited-PTO policies without a stated floor reliably produce less time off than fixed allowances.</p>

<h3>6. Security and confidentiality</h3>
<p>Password manager required, device encryption on, multi-factor everywhere, no company data in personal cloud accounts. Four lines will do. Length here signals seriousness less than enforcement does.</p>

<h2>Keep it revisable</h2>
<p>Put a review date on the document and an owner's name at the top. A policy nobody owns rots quietly, and a rotted policy is worse than none — people learn to ignore the written rules and go by rumour instead.</p>

<blockquote>The test of a good remote policy is not whether it covers every case. It is whether a new hire in a different time zone can find the answer without asking anyone.</blockquote>

<p>Write it in an afternoon, circulate it for a week, and revise it once a quarter. Startups that treat this as a legal exercise produce documents nobody reads. Startups that treat it as an onboarding tool produce documents that actually reduce the number of questions.</p>
`,
  },
  {
    slug: 'feedback-for-remote-team-members',
    title: 'Guidelines for Providing Feedback to Remote Team Members',
    excerpt:
      'Feedback loses most of its signal over text. What survives the trip is structure, specificity, and a channel chosen deliberately.',
    image: '/images/117525.jpg',
    category: 'Team Management',
    date: '2026-05-11',
    readingTime: 6,
    author: { name: 'Elena Marquez', role: 'Head of Talent Operations', avatar: '/images/9.png' },
    body: `
<p>In an office, most feedback is delivered in passing and calibrated by tone, timing, and expression. Strip those out and you are left with words on a screen that the recipient will read in whatever mood they happen to be in. Remote feedback is not harder because people are further away. It is harder because the error bars are wider.</p>

<h2>Match the channel to the weight</h2>
<p>The single most common mistake is delivering heavy feedback in a light channel. A critique that would take ninety seconds face to face becomes a chat message the recipient re-reads eleven times over a weekend.</p>
<ul>
  <li><strong>Chat</strong> — praise, small corrections, anything you would say in a corridor.</li>
  <li><strong>Written document or recorded review</strong> — structured performance feedback the person needs time to absorb.</li>
  <li><strong>Live call</strong> — anything about behaviour, anything with emotional weight, anything where you need to hear the response.</li>
</ul>
<p>If you are unsure which tier something belongs to, it belongs to the higher one.</p>

<h2>Be specific enough to act on</h2>
<p>"Be more proactive" is not feedback; it is a mood. Specificity means naming the situation, the observable behaviour, and the effect. "In Tuesday's client call, the pricing question went unanswered for a minute — next time it is fine to say you will follow up in writing" gives someone something to do differently. The vague version gives them something to worry about.</p>

<h2>Close the loop on positive feedback too</h2>
<p>Remote workers get systematically less positive feedback than co-located ones, because praise is the category most often delivered casually and casual channels are exactly what distance removes. If you only appear in someone's notifications when something is wrong, you have trained them to dread your name.</p>
<p>Say the good thing publicly, in the team channel, with the specifics attached. It costs nothing and it corrects a real structural imbalance.</p>

<h2>Ask before you assume</h2>
<p>Distance hides context. The missed deadline may be a bandwidth problem, an unclear brief, a blocked dependency, or something happening at home. Open with a question rather than a conclusion, and you will be wrong less often in front of people whose trust you need.</p>

<h2>Make it routine, not exceptional</h2>
<p>A standing weekly one-on-one changes the meaning of a calendar invite. Where feedback only happens when something is wrong, every unscheduled meeting reads as a threat. Where it happens every Thursday regardless, the hard conversations arrive in a container that already exists.</p>
`,
  },
  {
    slug: 'managing-a-multigenerational-workforce',
    title: 'Strategies for Successfully Managing a Multigenerational Workforce',
    excerpt:
      'Four generations now share most remote teams. The differences that matter are not the ones the trend pieces talk about.',
    image: '/images/125684.jpg',
    category: 'Leadership',
    date: '2026-04-22',
    readingTime: 8,
    author: { name: 'Tobi Adeyemi', role: 'Operations Lead', avatar: '/images/18475.jpg' },
    body: `
<p>Generational commentary is mostly unhelpful. It flattens millions of people into a personality type and then explains workplace friction by horoscope. But something real does sit underneath it: people formed their professional habits in different technological and economic conditions, and those habits persist.</p>

<h2>The differences that are actually operational</h2>
<p><strong>Default communication channel.</strong> Someone who spent fifteen years in an email-first culture treats a chat message as informal and possibly optional. Someone who started work in a chat-first company treats email as archival. Neither is wrong; both cause missed messages when unstated.</p>
<p><strong>Expectation of feedback frequency.</strong> Annual review cycles trained one cohort to expect infrequent, formal assessment. Continuous-feedback cultures trained another to expect weekly signal. The mismatch reads as neglect in one direction and micromanagement in the other.</p>
<p><strong>Attitude to visible availability.</strong> Where presence was historically how you demonstrated commitment, a green status dot carries moral weight. Where output was always the measure, it does not. This one causes more quiet resentment on remote teams than any other.</p>

<h2>What to do about it</h2>
<h3>Make the implicit explicit</h3>
<p>Nearly every generational friction on a remote team dissolves when the unstated expectation is written down. Which channel for which urgency. What response time means. How performance is actually measured. You are not accommodating a generation; you are removing the need for anyone to guess.</p>

<h3>Offer feedback in more than one shape</h3>
<p>Run the regular one-on-one and keep a documented periodic review. The cost of doing both is an hour a quarter. The cost of picking one is that half your team feels the system was designed for someone else.</p>

<h3>Pair deliberately across experience levels</h3>
<p>The most effective thing most managers can do is structural: pair a person with deep domain experience alongside someone fluent in the current tooling, on real work, with both directions of learning stated openly. Framed as mentorship in one direction only, it fails. Framed as an exchange, it usually works.</p>

<h3>Stop optimising for a mythical average employee</h3>
<p>Policies written for the median person fit almost nobody. Wherever it is cheap to offer a choice — meeting recorded or live, feedback written or spoken, hours early or late — offer the choice and stop trying to predict who will want which.</p>

<h2>The part that does not vary</h2>
<p>Across every cohort we place, the same three things predict whether someone stays: clear expectations, visible progress, and a manager who notices their work. No generation has ever been indifferent to those.</p>
`,
  },
  {
    slug: '20-strategies-for-managing-remote-teams',
    title: '20 Strategies for Successfully Managing Remote Teams',
    excerpt:
      'A working checklist drawn from several hundred placements — the practices that separate remote teams that hold together from those that quietly drift apart.',
    image: '/images/2150171838.jpg',
    category: 'Team Management',
    date: '2026-03-30',
    readingTime: 11,
    author: { name: 'Elena Marquez', role: 'Head of Talent Operations', avatar: '/images/9.png' },
    body: `
<p>These are the practices we see repeatedly among the clients whose remote hires stay past a year. None is clever on its own. The compounding is the point.</p>

<h2>Communication</h2>
<ol>
  <li><strong>Write decisions down.</strong> A decision that exists only in a call did not happen for anyone who was not on it.</li>
  <li><strong>Default to the team channel</strong> over direct messages. Private by default starves everyone else of context.</li>
  <li><strong>State urgency explicitly</strong> in the message rather than expecting the reader to infer it.</li>
  <li><strong>Record meetings that carry decisions</strong> and post the recording with a two-line summary.</li>
  <li><strong>Over-communicate change.</strong> Remote teams learn about reorganisations late, and late news reads as concealed news.</li>
</ol>

<h2>Structure and rhythm</h2>
<ol start="6">
  <li><strong>Set core overlap hours</strong> and defend them from meeting creep at both ends.</li>
  <li><strong>Keep a standing one-on-one</strong> with every direct report. Never cancel it; reschedule if you must.</li>
  <li><strong>Run a weekly written update</strong> per team — three lines on shipped, blocked, next.</li>
  <li><strong>Give meetings an agenda or cancel them.</strong> The cost of a pointless meeting scales with the number of time zones it spans.</li>
  <li><strong>Protect one no-meeting day.</strong> Deep work does not survive a calendar with no unbroken blocks.</li>
</ol>

<h2>Performance and growth</h2>
<ol start="11">
  <li><strong>Define done in writing</strong> for every meaningful piece of work, before it starts.</li>
  <li><strong>Measure output, not hours.</strong> If you cannot describe someone's contribution without referencing their availability, the role is not defined well enough.</li>
  <li><strong>Give feedback within a week</strong> of the thing it concerns. Older feedback is just criticism.</li>
  <li><strong>Publish the promotion criteria.</strong> Remote workers cannot read the room to work out what gets rewarded.</li>
  <li><strong>Budget for learning</strong> and then actually approve the requests.</li>
</ol>

<h2>Culture and retention</h2>
<ol start="16">
  <li><strong>Onboard deliberately over 30 days</strong>, with a named buddy. Most remote attrition is decided in the first month.</li>
  <li><strong>Mark milestones publicly</strong> — launches, anniversaries, good work. Distance erodes recognition first.</li>
  <li><strong>Take time off visibly.</strong> Teams calibrate to what leadership does, not what the policy says.</li>
  <li><strong>Ask about workload directly and often.</strong> Remote overload is invisible until it becomes a resignation.</li>
  <li><strong>Meet in person when you can afford to.</strong> One good offsite a year buys a remarkable amount of goodwill for the other fifty-one weeks.</li>
</ol>

<h2>If you only do three</h2>
<p>Write decisions down, keep the one-on-one, and onboard properly. Those three carry most of the weight. The rest of the list is refinement on top of them.</p>
`,
  },
  {
    slug: 'enhancing-employee-retention',
    title: 'Enhancing Employee Retention: Effective Strategies and Best Practices',
    excerpt:
      'Replacing a professional costs somewhere between six months and two years of their salary. Retention is the cheapest hiring strategy available.',
    image: '/images/2150312701.jpg',
    category: 'Leadership',
    date: '2026-03-07',
    readingTime: 8,
    author: { name: 'Tobi Adeyemi', role: 'Operations Lead', avatar: '/images/18475.jpg' },
    body: `
<p>Every hiring conversation eventually reaches the same uncomfortable arithmetic. Recruiting, onboarding, and the productivity gap while a replacement gets up to speed together cost far more than almost any retention intervention. And yet retention budgets are consistently the first thing cut.</p>

<h2>Why people actually leave</h2>
<p>Exit interviews are unreliable — people leaving rarely burn bridges on the way out. But across the placements we manage, the reasons cluster consistently, and compensation is rarely first:</p>
<ul>
  <li><strong>No visible path.</strong> The role is the same as it was eighteen months ago and nobody has described what the next one looks like.</li>
  <li><strong>A manager who does not notice.</strong> Not hostility — absence. Work goes into a void and nothing comes back.</li>
  <li><strong>Chronic overload treated as normal.</strong> The temporary crunch that never ended.</li>
  <li><strong>Being remote in a company that is not.</strong> Decisions made in a room they were not in, then relayed as fact.</li>
  <li><strong>Compensation drift.</strong> Not being underpaid at hire, but staying flat while the market moved.</li>
</ul>

<h2>What actually moves retention</h2>
<h3>Fix the first 90 days</h3>
<p>Attrition is front-loaded to a degree most leaders underestimate. A structured onboarding plan with a named buddy, a 30/60/90 outline, and a manager check-in every week is the single highest-return intervention available. It is also nearly free.</p>

<h3>Have the career conversation before they need it</h3>
<p>Ask what someone wants their job to look like in two years, write the answer down, and revisit it quarterly. Half of retention is simply demonstrating that a future here has been considered.</p>

<h3>Review compensation on a schedule, not on a threat</h3>
<p>If the only way to get a raise is to produce a competing offer, you have taught everyone how to get a raise. Annual benchmarking against market rates costs less than one replacement search.</p>

<h3>Give remote staff decision-making presence</h3>
<p>Rotate meeting times so the same time zone is not always inconvenienced. Put decisions in writing where everyone can see the reasoning, not just the outcome. Remote employees who consistently learn about decisions second-hand start reading themselves as peripheral, and peripheral people leave.</p>

<h3>Watch workload as a leading indicator</h3>
<p>Sustained overload predicts resignation months in advance, and it is measurable if anyone bothers to look. Ask directly, in the one-on-one, and act on the answer at least sometimes — otherwise you have simply built a mechanism for people to voice a problem and watch it be ignored.</p>

<blockquote>Retention is not a programme you launch. It is the accumulated result of a hundred small signals that someone's work is seen and their future has been thought about.</blockquote>

<h2>Measure it honestly</h2>
<p>Track regretted attrition separately from total attrition — losing someone who was not working out is not the same event. Segment by manager, by tenure, and by location. The pattern almost always points somewhere specific, and it is usually a person or a process rather than a generational trend or a market condition.</p>
`,
  },
]

export function findPost(slug) {
  return posts.find((p) => p.slug === slug)
}

export function formatDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
