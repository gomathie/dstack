// v-reveal — fades an element in when it scrolls into view.
//
// Usage:  <div v-reveal>            → reveals with no delay
//         <div v-reveal="120">      → reveals 120ms after entering view
//
// One shared observer handles every element on the page rather than one
// observer per node, and each element is unobserved once it has revealed.

const REVEAL_CLASS = 'reveal'
const VISIBLE_CLASS = 'reveal--visible'

let observer = null

function getObserver() {
  if (observer) return observer

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add(VISIBLE_CLASS)
        observer.unobserve(entry.target)
      }
    },
    // Fire slightly before the element is fully on screen so the animation
    // is already underway by the time the user looks at it.
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  return observer
}

export const reveal = {
  mounted(el, binding) {
    // Users who asked for reduced motion get the content immediately, with no
    // hidden initial state that could strand them if the observer never fires.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') return

    el.classList.add(REVEAL_CLASS)
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)

    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
