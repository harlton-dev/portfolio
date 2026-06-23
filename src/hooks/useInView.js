import { useEffect, useRef, useState } from 'react'

// Returns a ref and a boolean that flips true once the element scrolls into view.
// `once` (default) keeps it true after the first reveal so it doesn't replay.
export function useInView({ threshold = 0.2, once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, inView]
}
