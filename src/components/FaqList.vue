<template>
  <div class="faq-list">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="faq-item"
      :class="{ 'faq-item--open': open === i }"
    >
      <h3 class="faq-item__heading">
        <button
          :id="`faq-q-${uid}-${i}`"
          class="faq-item__question"
          :aria-expanded="open === i"
          :aria-controls="`faq-a-${uid}-${i}`"
          @click="toggle(i)"
        >
          <span>{{ item.q }}</span>
          <svg class="faq-item__icon" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </h3>
      <!-- Grid-rows 0fr→1fr animates to the answer's natural height without
           needing a hard-coded max-height. -->
      <div
        :id="`faq-a-${uid}-${i}`"
        class="faq-item__panel"
        :class="{ 'faq-item__panel--collapsed': open !== i }"
        role="region"
        :aria-labelledby="`faq-q-${uid}-${i}`"
      >
        <div class="faq-item__panel-inner">
          <p>{{ item.a }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  // Index open on mount; -1 collapses everything.
  initial: { type: Number, default: 0 },
})

// Unique per instance so ids stay distinct when two FaqLists share a page.
const uid = Math.random().toString(36).slice(2, 8)
const open = ref(props.initial)

function toggle(i) {
  open.value = open.value === i ? -1 : i
}
</script>

<style scoped>
.faq-list {
  max-width: 820px;
  margin: 0 auto;
}
.faq-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  margin-bottom: 0.75rem;
  overflow: hidden;
  transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
}
.faq-item:hover { border-color: var(--plum-100); }
.faq-item--open {
  border-color: var(--plum-100);
  box-shadow: var(--shadow-md);
}
.faq-item__heading { margin: 0; font-size: inherit; }
.faq-item__question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.3rem 1.5rem;
  background: none;
  border: none;
  text-align: left;
  font-family: var(--font-heading);
  font-weight: 650;
  font-size: 1rem;
  color: var(--color-dark);
  line-height: 1.4;
}
.faq-item__icon {
  flex-shrink: 0;
  color: var(--plum-500);
  transition: transform var(--transition-normal);
}
.faq-item--open .faq-item__icon { transform: rotate(180deg); }

.faq-item__panel {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows var(--transition-normal), visibility var(--transition-normal);
  visibility: visible;
}
/* visibility:hidden takes the collapsed answer out of the accessibility tree
   and out of tab order, while still allowing the row height to animate. */
.faq-item__panel--collapsed {
  grid-template-rows: 0fr;
  visibility: hidden;
}
.faq-item__panel-inner {
  overflow: hidden;
  min-height: 0;
}
.faq-item__panel-inner p {
  padding: 0 1.5rem 1.4rem;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.95rem;
  line-height: 1.72;
}

@media (max-width: 600px) {
  .faq-item__question { padding: 1.1rem 1.15rem; font-size: 0.95rem; }
  .faq-item__panel-inner p { padding: 0 1.15rem 1.2rem; }
}
</style>
