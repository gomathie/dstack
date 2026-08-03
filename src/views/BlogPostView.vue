<template>
  <div v-if="post" class="post-page">
    <section class="post-hero">
      <div class="container container--narrow post-hero__inner">
        <router-link to="/blog" class="post-hero__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All articles
        </router-link>
        <span class="pill pill--light">{{ post.category }}</span>
        <h1 class="post-hero__title">{{ post.title }}</h1>
        <p class="post-hero__excerpt">{{ post.excerpt }}</p>
        <div class="byline">
          <img :src="post.author.avatar" alt="" class="byline__avatar" />
          <div class="byline__text">
            <strong>{{ post.author.name }}</strong>
            <span>{{ post.author.role }} · {{ formatDate(post.date) }} · {{ post.readingTime }} min read</span>
          </div>
        </div>
      </div>
    </section>

    <div class="container container--narrow">
      <img :src="post.image" :alt="post.title" class="post-cover" />
    </div>

    <article class="section post-body">
      <div class="container container--narrow">
        <!-- Trusted, hand-authored HTML from src/data/posts.js — see the note there. -->
        <div class="prose" v-html="post.body"></div>

        <footer class="post-footer">
          <div class="share">
            <span class="share__label">Share this article</span>
            <div class="share__links">
              <a :href="shareLinks.linkedin" target="_blank" rel="noopener noreferrer" class="share__btn">LinkedIn</a>
              <a :href="shareLinks.x" target="_blank" rel="noopener noreferrer" class="share__btn">X</a>
              <a :href="shareLinks.email" class="share__btn">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </article>

    <!-- Related -->
    <section v-if="related.length" class="section section--alt">
      <div class="container">
        <h2 class="related__heading">Keep reading</h2>
        <div class="related">
          <router-link
            v-for="p in related"
            :key="p.slug"
            :to="`/blog/${p.slug}`"
            class="related-card card card--hover"
          >
            <img :src="p.image" :alt="p.title" class="related-card__image" loading="lazy" decoding="async" />
            <div class="related-card__body">
              <span class="pill">{{ p.category }}</span>
              <h3 class="related-card__title">{{ p.title }}</h3>
              <span class="related-card__meta">{{ p.readingTime }} min read</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>

  <!-- Unknown slug -->
  <div v-else class="missing">
    <div class="container">
      <h1>Article not found</h1>
      <p>That post does not exist, or the link has changed since it was shared.</p>
      <router-link to="/blog" class="btn btn--primary">Back to the blog</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import CtaBanner from '../components/CtaBanner.vue'
import { posts, findPost, formatDate } from '../data/posts'

const route = useRoute()
const post = computed(() => findPost(route.params.slug))

// Two other posts, preferring the same category.
const related = computed(() => {
  if (!post.value) return []
  const others = posts.filter((p) => p.slug !== post.value.slug)
  const sameCat = others.filter((p) => p.category === post.value.category)
  return [...sameCat, ...others.filter((p) => p.category !== post.value.category)].slice(0, 2)
})

const shareLinks = computed(() => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const title = post.value?.title ?? ''
  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    x: `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
  }
})

// Keep the document title in step when navigating between related posts.
watch(
  post,
  (p) => {
    document.title = p ? `${p.title} | Dubblestack` : 'Article not found | Dubblestack'
  },
  { immediate: true }
)
</script>

<style scoped>
.post-hero {
  background: linear-gradient(160deg, var(--plum-700) 0%, var(--plum-900) 100%);
  padding: calc(var(--header-height) + 3.5rem) 0 5.5rem;
  text-align: center;
}
.post-hero__back {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.87rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  transition: color var(--transition-fast), gap var(--transition-fast);
}
.post-hero__back:hover { color: #fff; gap: 0.65rem; }
.post-hero__title {
  color: #fff;
  font-size: clamp(1.85rem, 4.2vw, 2.9rem);
  margin: 1rem 0;
}
.post-hero__excerpt {
  color: rgba(255, 255, 255, 0.74);
  font-size: 1.05rem;
  max-width: 620px;
  margin: 0 auto 2rem;
  text-wrap: pretty;
}
.byline {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-align: left;
}
.byline__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.28);
}
.byline__text strong {
  display: block;
  color: #fff;
  font-size: 0.92rem;
  font-weight: 650;
}
.byline__text span {
  display: block;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.82rem;
}

.post-cover {
  width: 100%;
  aspect-ratio: 16 / 8;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  margin-top: -3.5rem;
  position: relative;
  z-index: 2;
}

.post-body { padding-top: 3.5rem; }

.post-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}
.share {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.share__label {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-light);
}
.share__links { display: flex; gap: 0.5rem; }
.share__btn {
  padding: 0.45rem 1rem;
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--color-border);
  font-size: 0.85rem;
  font-weight: 650;
  color: var(--color-muted);
  transition: all var(--transition-fast);
}
.share__btn:hover {
  border-color: var(--plum-300);
  color: var(--plum-700);
  background: var(--plum-50);
}

.related__heading {
  font-size: 1.4rem;
  margin-bottom: 1.75rem;
  text-align: center;
}
.related {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 860px;
  margin: 0 auto;
}
.related-card { display: flex; flex-direction: column; }
.related-card__image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.related-card__body { padding: 1.4rem; }
.related-card__title {
  font-size: 1.05rem;
  line-height: 1.4;
  margin: 0.75rem 0 0.5rem;
}
.related-card__meta { font-size: 0.82rem; color: var(--color-light); }

.missing {
  padding: calc(var(--header-height) + 6rem) 0 6rem;
  text-align: center;
}
.missing p { color: var(--color-muted); margin: 1rem 0 2rem; }

@media (max-width: 767px) {
  .post-cover { margin-top: -2rem; border-radius: var(--radius-md); }
  .post-body { padding-top: 2.5rem; }
}
</style>
