<template>
  <div>
    <section class="page-hero">
      <div class="container page-hero__inner">
        <span class="page-hero__eyebrow">Legal</span>
        <h1 class="page-hero__title">Privacy Policy</h1>
        <p class="page-hero__sub">Last updated {{ lastUpdated }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container container--narrow">
        <div class="notice">
          <strong>Template notice.</strong> This policy describes intended practice and is not legal
          advice. Have it reviewed against the laws that actually apply to you — including GDPR and
          the data-protection regimes of every country you recruit in — before publishing.
        </div>

        <div class="prose">
          <h2>Who we are</h2>
          <p>
            {{ company.name }} is a remote staffing and employer-of-record company operating recruiting
            hubs in {{ company.hubs.join(', ') }}. This policy explains what personal data we collect,
            why, and what you can do about it. Questions go to
            <a :href="`mailto:${company.email}`">{{ company.email }}</a>.
          </p>

          <h2>Data we collect</h2>
          <h3>From candidates</h3>
          <ul>
            <li>Contact details — name, email, phone, country and city of residence.</li>
            <li>Professional information — CV, work history, education, certifications, portfolio links.</li>
            <li>Assessment results — English evaluation, role-specific test outcomes, interview notes and scorecards.</li>
            <li>Recorded introductions, where you have agreed to record one.</li>
            <li>Where you are placed, the employment and payroll data required to employ and pay you lawfully.</li>
          </ul>

          <h3>From client companies</h3>
          <ul>
            <li>Business contact details for the people we work with at your company.</li>
            <li>Role requirements, job descriptions, and interview feedback.</li>
            <li>Billing information necessary to invoice and collect payment.</li>
          </ul>

          <h3>From website visitors</h3>
          <ul>
            <li>Anything you type into a contact or hiring form on this site.</li>
            <li>Basic technical data — IP address, browser type, pages visited — used to keep the site working and to understand aggregate traffic.</li>
          </ul>

          <h2>Why we process it</h2>
          <p>We use personal data only for the purposes below:</p>
          <ul>
            <li><strong>To match candidates with roles.</strong> Assessment and profile data is shared with prospective client companies during a search.</li>
            <li><strong>To employ and pay placed professionals</strong>, including tax withholding and statutory benefits in their country.</li>
            <li><strong>To deliver and administer our services</strong> to client companies, including invoicing.</li>
            <li><strong>To respond to enquiries</strong> you send us.</li>
            <li><strong>To meet legal obligations</strong>, including employment, tax, and anti-fraud requirements.</li>
          </ul>
          <p>
            We do not sell personal data. We do not share candidate profiles with client companies
            outside the context of a live search without the candidate's agreement.
          </p>

          <h2>Cookies</h2>
          <p>
            This site uses only the cookies necessary to make it function and to measure aggregate
            traffic. We do not run advertising or cross-site tracking cookies. Your browser can block
            cookies entirely; the site will continue to work.
          </p>

          <h2>Who we share data with</h2>
          <ul>
            <li><strong>Client companies</strong> — candidate profiles and assessment results during an active search.</li>
            <li><strong>Payroll and employer-of-record partners</strong> in the countries where we employ professionals.</li>
            <li><strong>Service providers</strong> — hosting, email, and applicant-tracking tools, bound by contract to process data only on our instructions.</li>
            <li><strong>Authorities</strong>, where we are legally required to disclose.</li>
          </ul>

          <h2>International transfers</h2>
          <p>
            Because we place professionals with companies abroad, personal data necessarily crosses
            borders. Where data moves out of a jurisdiction with transfer restrictions, we rely on
            appropriate safeguards such as standard contractual clauses.
          </p>

          <h2>How long we keep it</h2>
          <ul>
            <li><strong>Candidate profiles</strong> — retained for two years from your last interaction, so we can contact you about suitable roles. You can ask us to delete sooner at any time.</li>
            <li><strong>Employment and payroll records</strong> — retained as long as the law in the relevant country requires, typically five to seven years.</li>
            <li><strong>Client and billing records</strong> — retained for the period required by tax and accounting rules.</li>
            <li><strong>Website enquiries</strong> — retained for twelve months.</li>
          </ul>

          <h2>Your rights</h2>
          <p>Subject to the law that applies to you, you can ask us to:</p>
          <ul>
            <li>Provide a copy of the personal data we hold about you.</li>
            <li>Correct anything inaccurate.</li>
            <li>Delete your data where we have no overriding legal reason to keep it.</li>
            <li>Restrict or object to particular processing.</li>
            <li>Export your data in a portable format.</li>
          </ul>
          <p>
            Email <a :href="`mailto:${company.email}`">{{ company.email }}</a> and we will respond within
            thirty days. If you are unhappy with our response, you can complain to your local data
            protection authority.
          </p>

          <h2>Security</h2>
          <p>
            Access to candidate and employment data is limited to staff who need it. Data is encrypted in
            transit, accounts require multi-factor authentication, and we review access periodically. No
            system is perfectly secure, and we will notify affected people promptly if a breach occurs.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We will post any changes on this page and update the date above. Material changes affecting
            candidates or clients will also be notified by email.
          </p>

          <h2>Contact</h2>
          <p>
            {{ company.name }} — <a :href="`mailto:${company.email}`">{{ company.email }}</a>.
            See also our <router-link to="/terms">Terms of Service</router-link>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { company } from '../data/site'

const lastUpdated = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
</script>

<style scoped>
.notice {
  background: var(--accent-100);
  border: 1px solid rgba(13, 143, 136, 0.25);
  border-radius: var(--radius-md);
  padding: 1rem 1.25rem;
  font-size: 0.9rem;
  color: var(--accent-600);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}
.notice strong { color: var(--accent-600); }
</style>
