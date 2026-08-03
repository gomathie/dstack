<template>
  <div class="blog-page">
    <section class="blog-hero">
      <div class="container">
        <h1 class="blog-hero__title animate-fade-in-up">Blog</h1>
        <p class="blog-hero__sub animate-fade-in-up delay-2">Insights on remote hiring, team management, and growing your business.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="blog-grid">
          <article v-for="(post, i) in posts" :key="i" class="blog-card card">
            <div class="blog-card__image-wrap">
              <img :src="post.image" :alt="post.title" class="blog-card__image" loading="lazy" decoding="async" />
              <div class="blog-card__overlay"></div>
            </div>
            <div class="blog-card__body">
              <h2 class="blog-card__title">{{ post.title }}</h2>
              <a :href="post.link" target="_blank" rel="noopener" class="blog-card__link">
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const posts = [
  { title: 'The Advantages and Disadvantages of Providing Flexible Work Hours', image: '/images/2149321602.webp', link: 'https://dubblestack.com/the-advantages-and-disadvantages-of-providing-flexible-work-hours' },
  { title: 'Developing Remote Work Policies: Guidelines for Startups', image: '/images/2147768643.webp', link: 'https://dubblestack.com/developing-remote-work-policies-guidelines-for-startups' },
  { title: 'Guidelines for providing feedback to remote team members', image: '/images/117525.jpg', link: 'https://dubblestack.com/guidelines-for-providing-feedback-to-remote-team-members' },
  { title: 'Strategies for Successfully Managing a Multigenerational Workforce', image: '/images/125684.jpg', link: 'https://dubblestack.com/strategies-for-successfully-managing-a-multigenerational-workforce' },
  // NOTE: the original assets for these two posts 404'd when the site was scraped.
  // These are stand-ins reused from the homepage — swap in the real images when available.
  { title: '20 Strategies for Successfully Managing Remote Teams', image: '/images/2150171838.jpg', link: 'https://dubblestack.com/20-strategies-for-successfully-managing-remote-teams' },
  { title: 'Enhancing Employee Retention: Effective Strategies and Best Practices', image: '/images/2150312701.jpg', link: 'https://dubblestack.com/enhancing-employee-retention-effective-strategies-and-best-practices' },
]
</script>

<style scoped>
.blog-hero {
  background: linear-gradient(135deg, #66023c 0%, #2d0f3e 100%);
  padding: 8rem 0 4rem;
  text-align: center;
}
.blog-hero__title {
  color: #fff;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 0.75rem;
}
.blog-hero__sub {
  color: rgba(255,255,255,0.7);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2rem;
}
.blog-card {
  display: flex;
  flex-direction: column;
}
.blog-card__image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
}
.blog-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}
.blog-card:hover .blog-card__image {
  transform: scale(1.05);
}
.blog-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
  opacity: 0;
  transition: opacity var(--transition-normal);
}
.blog-card:hover .blog-card__overlay {
  opacity: 1;
}
.blog-card__body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.blog-card__title {
  font-size: 1.1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  flex: 1;
}
.blog-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--brand-primary);
  font-weight: 600;
  font-size: 0.9rem;
  transition: gap var(--transition-fast);
}
.blog-card__link:hover {
  gap: 0.8rem;
}

@media (max-width: 767px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
