import { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-[90]
        w-12 h-12 rounded-xl
        bg-cyan-500 hover:bg-cyan-400
        text-white
        flex items-center justify-center
        shadow-[0_4px_20px_rgba(34,211,238,0.4)]
        hover:shadow-[0_4px_28px_rgba(34,211,238,0.65)]
        hover:-translate-y-1
        cursor-pointer border-none
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}

export default ScrollToTop
