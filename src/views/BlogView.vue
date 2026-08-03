<template>
  <div>
    <section class="page-hero">
      <div class="container page-hero__inner">
        <span class="page-hero__eyebrow">Blog</span>
        <h1 class="page-hero__title">Notes on running a distributed team</h1>
        <p class="page-hero__sub">
          What we learn managing several hundred remote placements — written for the people
          doing the managing.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Category filter -->
        <div class="filters" role="group" aria-label="Filter posts by category">
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter"
            :class="{ 'filter--active': active === cat }"
            :aria-pressed="active === cat"
            @click="active = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Featured post -->
        <router-link
          v-if="featured"
          :to="`/blog/${featured.slug}`"
          class="featured card card--hover"
          v-reveal
        >
          <div class="featured__media">
            <img :src="featured.image" :alt="featured.title" class="featured__image" loading="lazy" decoding="async" />
          </div>
          <div class="featured__body">
            <div class="featured__meta">
              <span class="pill">{{ featured.category }}</span>
              <span class="post__detail">{{ formatDate(featured.date) }}</span>
              <span class="post__detail">{{ featured.readingTime }} min read</span>
            </div>
            <h2 class="featured__title">{{ featured.title }}</h2>
            <p class="featured__excerpt">{{ featured.excerpt }}</p>
            <span class="featured__link">
              Read article
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </router-link>

        <!-- Grid -->
        <div class="post-grid">
          <router-link
            v-for="(post, i) in rest"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="post card card--hover"
            v-reveal="i * 60"
          >
            <div class="post__media">
              <img :src="post.image" :alt="post.title" class="post__image" loading="lazy" decoding="async" />
            </div>
            <div class="post__body">
              <div class="post__meta">
                <span class="pill">{{ post.category }}</span>
                <span class="post__detail">{{ post.readingTime }} min</span>
              </div>
              <h2 class="post__title">{{ post.title }}</h2>
              <p class="post__excerpt">{{ post.excerpt }}</p>
              <span class="post__date">{{ formatDate(post.date) }}</span>
            </div>
          </router-link>
        </div>

        <p v-if="!filtered.length" class="empty">No posts in this category yet.</p>
      </div>
    </section>

    <CtaBanner
      title="Rather not manage it yourself?"
      desc="We handle the recruiting, the payroll, and the compliance. You handle the work."
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CtaBanner from '../components/CtaBanner.vue'
import { posts, formatDate } from '../data/posts'

const active = ref('All')

const categories = computed(() => ['All', ...new Set(posts.map((p) => p.category))])

const filtered = computed(() => {
  const list = active.value === 'All' ? posts : posts.filter((p) => p.category === active.value)
  // Newest first.
  return [...list].sort((a, b) => b.date.localeCompare(a.date))
})

const featured = computed(() => filtered.value[0])
const rest = computed(() => filtered.value.slice(1))
</script>

<style scoped>
.filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
}
.filter {
  padding: 0.5rem 1.1rem;
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--color-border);
  background: var(--color-surface);
  font-size: 0.87rem;
  font-weight: 650;
  color: var(--color-muted);
  transition: all var(--transition-fast);
}
.filter:hover { border-color: var(--plum-300); color: var(--plum-700); }
.filter--active {
  background: var(--plum-700);
  border-color: var(--plum-700);
  color: #fff;
}

/* Featured */
.featured {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  margin-bottom: 2.5rem;
}
.featured__media { overflow: hidden; }
.featured__image {
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: cover;
  transition: transform var(--transition-slow);
}
.featured:hover .featured__image { transform: scale(1.04); }
.featured__body {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.featured__meta, .post__meta {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.post__detail { font-size: 0.82rem; color: var(--color-light); }
.featured__title {
  font-size: clamp(1.35rem, 2.6vw, 1.85rem);
  margin-bottom: 0.85rem;
}
.featured__excerpt {
  color: var(--color-muted);
  font-size: 0.98rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.featured__link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--plum-700);
  font-weight: 700;
  font-size: 0.92rem;
  transition: gap var(--transition-fast);
}
.featured:hover .featured__link { gap: 0.8rem; }

/* Grid */
.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 1.75rem;
}
.post { display: flex; flex-direction: column; }
.post__media { overflow: hidden; aspect-ratio: 16 / 9; }
.post__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}
.post:hover .post__image { transform: scale(1.05); }
.post__body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.post__title {
  font-size: 1.12rem;
  line-height: 1.4;
  margin-bottom: 0.6rem;
}
.post__excerpt {
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.65;
  margin-bottom: 1rem;
  flex: 1;
}
.post__date { font-size: 0.82rem; color: var(--color-light); }

.empty {
  text-align: center;
  color: var(--color-light);
  padding: 3rem 0;
}

@media (max-width: 900px) {
  .featured { grid-template-columns: 1fr; }
  .featured__image { min-height: 220px; }
  .featured__body { padding: 1.75rem; }
}
@media (max-width: 767px) {
  .post-grid { grid-template-columns: 1fr; }
}
</style>
