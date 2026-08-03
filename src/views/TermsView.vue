<template>
  <div>
    <section class="page-hero">
      <div class="container page-hero__inner">
        <span class="page-hero__eyebrow">Legal</span>
        <h1 class="page-hero__title">Terms of Service</h1>
        <p class="page-hero__sub">Last updated {{ lastUpdated }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container container--narrow">
        <div class="notice">
          <strong>Template notice.</strong> These terms are a starting structure, not legal advice.
          Have a qualified lawyer review and adapt them before relying on them.
        </div>

        <div class="prose">
          <h2>1. Agreement</h2>
          <p>
            These Terms of Service govern your use of the {{ company.name }} website and any staffing,
            recruiting, or employer-of-record services we provide. By using the site or engaging our
            services, you agree to these terms. If you are agreeing on behalf of a company, you confirm
            you have authority to bind that company.
          </p>

          <h2>2. Our services</h2>
          <p>
            {{ company.name }} sources, screens, and places remote professionals with client companies,
            and acts as employer of record for those professionals in their home countries. Specific
            scope, fees, and duration for any engagement are set out in a separate service agreement,
            which takes precedence over these terms where the two conflict.
          </p>

          <h2>3. Client responsibilities</h2>
          <ul>
            <li>Provide accurate role requirements and any information reasonably needed to source candidates.</li>
            <li>Direct the placed professional's day-to-day work in a lawful and respectful manner.</li>
            <li>Refrain from asking placed professionals to perform work that is unlawful in their jurisdiction or yours.</li>
            <li>Pay invoices in accordance with the agreed schedule.</li>
          </ul>

          <h2>4. Fees and payment</h2>
          <p>
            Fees are billed monthly in advance in US dollars unless otherwise agreed in writing. Invoices
            are due within the period stated on the invoice. Late payment may result in suspension of
            services after written notice. Fees exclude any taxes payable in your own jurisdiction.
          </p>

          <h2>5. Replacement guarantee</h2>
          <p>
            Where a placement ends within the guarantee window applicable to your plan, we will source a
            replacement at no additional placement cost. The guarantee does not apply where the engagement
            ends because of a change in your requirements, non-payment, or conduct by the client that
            breaches these terms.
          </p>

          <h2>6. Non-solicitation and direct hire</h2>
          <p>
            During an engagement and for twelve months afterwards, clients agree not to directly employ or
            contract with a professional introduced by {{ company.name }} outside of our services, except
            under a written conversion arrangement agreed with us in advance. This protects both the
            professional's employment protections and our ability to operate.
          </p>

          <h2>7. Confidentiality</h2>
          <p>
            Each party will keep the other's confidential information in confidence and use it only for
            the purposes of the engagement. Placed professionals are bound by confidentiality obligations
            in their own employment agreements, and we will facilitate additional NDAs on request.
          </p>

          <h2>8. Intellectual property</h2>
          <p>
            Work product created by a placed professional in the course of the engagement belongs to the
            client, subject to payment of applicable fees. Nothing in these terms transfers ownership of
            {{ company.name }}'s own materials, processes, or the content of this website.
          </p>

          <h2>9. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, neither party is liable for indirect, incidental, or
            consequential losses. Our total aggregate liability arising from an engagement is limited to
            the fees paid by the client in the three months preceding the event giving rise to the claim.
          </p>

          <h2>10. Termination</h2>
          <p>
            Either party may end an engagement with thirty days' written notice. Either party may terminate
            immediately for material breach that remains uncured fifteen days after written notice. Fees
            accrued before termination remain payable.
          </p>

          <h2>11. Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Material changes will be notified to active
            clients by email at least thirty days before taking effect. Continued use of our services after
            that period constitutes acceptance.
          </p>

          <h2>12. Contact</h2>
          <p>
            Questions about these terms can be sent to
            <a :href="`mailto:${company.email}`">{{ company.email }}</a>. See also our
            <router-link to="/privacy-policy">Privacy Policy</router-link>.
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
