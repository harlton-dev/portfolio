import { useLayoutEffect, useRef, useState } from 'react'

// Splits `text` into its actual rendered visual lines and wraps each line in a
// mask that slides up (text-masking) when `inView` becomes true — one line
// after another. Re-measures on resize and once web fonts have loaded so the
// line breaks always match what the browser actually renders.
function MaskedLines({ text, inView, className = '', baseDelay = 0.2, step = 0.1 }) {
  const ref = useRef(null)
  const [lines, setLines] = useState(null)

  useLayoutEffect(() => {
    const display = ref.current
    if (!display) return

    const measure = () => {
      const cs = getComputedStyle(display)

      // Hidden clone that mirrors the display box's width + typography so the
      // browser wraps the words at exactly the same points.
      const probe = document.createElement('div')
      Object.assign(probe.style, {
        position: 'absolute',
        top: '0',
        left: '-9999px',
        visibility: 'hidden',
        pointerEvents: 'none',
        boxSizing: 'border-box',
        width: `${display.clientWidth}px`,
        padding: '0',
        whiteSpace: 'normal',
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        fontStyle: cs.fontStyle,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
        wordSpacing: cs.wordSpacing,
        textTransform: cs.textTransform,
        textAlign: cs.textAlign,
      })
      document.body.appendChild(probe)

      const words = text.split(/\s+/).filter(Boolean)
      const spans = words.map((w) => {
        const s = document.createElement('span')
        s.textContent = w
        probe.appendChild(s)
        probe.appendChild(document.createTextNode(' '))
        return s
      })

      // Group consecutive words sharing the same vertical offset into one line.
      const grouped = []
      let current = []
      let top = null
      spans.forEach((s, i) => {
        if (top === null) top = s.offsetTop
        if (s.offsetTop - top > 1) {
          grouped.push(current.join(' '))
          current = []
          top = s.offsetTop
        }
        current.push(words[i])
      })
      if (current.length) grouped.push(current.join(' '))

      document.body.removeChild(probe)
      setLines((prev) =>
        prev && prev.length === grouped.length && prev.every((l, i) => l === grouped[i])
          ? prev
          : grouped
      )
    }

    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(display)
    if (document.fonts?.ready) document.fonts.ready.then(measure)

    return () => ro.disconnect()
  }, [text])

  return (
    <div ref={ref} className={className}>
      {lines === null
        ? text
        : lines.map((line, i) => (
            <span key={i} className="reveal-mask block">
              <span
                className={`reveal-up block ${inView ? 'is-inview' : ''}`}
                style={{ animationDelay: `${baseDelay + i * step}s` }}
              >
                {line}
              </span>
            </span>
          ))}
    </div>
  )
}

export default MaskedLines
