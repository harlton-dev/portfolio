import { useState } from 'react'
import portfolio from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'
import MaskedLines from '../MaskedLines/MaskedLines'

import employeeOfTheMonth from '../../assets/awards/employee-of-the-month.png'
import clientsImpact      from '../../assets/awards/clients-impact.jpg'
import shintaroAward      from '../../assets/awards/shintaro-award.jpg'
import salesAchiever      from '../../assets/awards/sales-achiever.jpg'
import hedikeAward        from '../../assets/awards/hedike-award.jpg'

const imageMap = {
  'employee-of-the-month': employeeOfTheMonth,
  'clients-impact':        clientsImpact,
  'shintaro-award':        shintaroAward,
  'sales-achiever':        salesAchiever,
  'hedike-award':          hedikeAward,
}

const awardIcons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
    <path d="M6 9H4a2 2 0 0 1-2-2V5h4" /><path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
    <path d="M12 17v4" /><path d="M8 21h8" /><path d="M6 3h12v8a6 6 0 0 1-12 0V3z" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
    <circle cx="12" cy="14" r="6" /><path d="M9 2h6" /><path d="M12 2v4" />
    <path d="M9.5 8.5 8 7" /><path d="M14.5 8.5 16 7" /><path d="M12 11v3l1.5 1.5" />
  </svg>,
]

// Description (MaskedLines) reveal timing — kept in sync with the props below.
const DESC_BASE_DELAY = 0.25
const DESC_STEP = 0.12
const DESC_LINE_COUNT = 2 // the description wraps to ~2 lines
// The description reads as settled shortly after its last line begins (the
// mask eases out long before it numerically ends), so anchor the cards to that
// perceived finish rather than the full mask duration.
const DESC_SETTLE = 0.2
const DESC_REVEAL_END =
  DESC_BASE_DELAY + (DESC_LINE_COUNT - 1) * DESC_STEP + DESC_SETTLE

// First card 0.3s after the description settles, then 0.5s apart.
const CARD_GAP = 0.3
const CARD_STEP = 0.5

const intro =
  'A few milestones and recognitions earned along the way — each one a reminder of the effort, consistency, and passion put into the work.'

const Awards = () => {
  const [selected, setSelected] = useState(null)
  const [zoomedImg, setZoomedImg] = useState(null)
  const { awards } = portfolio
  const [headerRef, headerInView] = useInView({ threshold: 0.35 })

  return (
    <section id="awards" className="min-h-screen py-20 px-5 sm:px-16 flex items-center">
      <div ref={headerRef} className="max-w-5xl mx-auto flex flex-col gap-12 w-full">

        {/* Title */}
        <div className="text-center">
          <div className="reveal-mask">
            <div className={`reveal-up ${headerInView ? 'is-inview' : ''}`}>
              <p className="text-white/50 text-sm tracking-widest uppercase mb-2">Recognitions</p>
              <h2 className="text-white text-4xl font-bold">Awards</h2>
            </div>
          </div>
          <MaskedLines
            text={intro}
            inView={headerInView}
            className="text-white/60 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed text-center"
            baseDelay={DESC_BASE_DELAY}
            step={DESC_STEP}
          />
        </div>

        {/* Cards — fade up from the bottom, staggered after the description finishes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <div
              key={i}
              className={`reveal-fade-up ${headerInView ? 'is-inview' : ''} flex flex-col gap-6 px-6 py-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.07),0_4px_24px_rgba(0,0,0,0.2)] hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300`}
              style={{ animationDelay: `${(DESC_REVEAL_END + CARD_GAP + i * CARD_STEP).toFixed(2)}s` }}
            >
              <span className="text-white/70">{awardIcons[i]}</span>
              <div className="flex flex-col gap-2">
                <p className="text-white/50 text-xs">{award.subtitle}</p>
                <h3 className="text-white font-bold text-lg leading-snug">{award.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{award.short}</p>
              </div>
              <button
                onClick={() => setSelected(award)}
                className="flex items-center gap-1 text-white/60 text-sm hover:text-white transition-colors duration-200 mt-auto bg-transparent border-none cursor-pointer p-0 w-fit"
              >
                View More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selected && (
        <div
          className="modal-overlay fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-panel relative w-full max-w-lg rounded-2xl bg-[#0f2548] border border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.15)] p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-white/50 hover:text-white bg-transparent border-none cursor-pointer p-1 transition-colors"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>

            {/* Images */}
            <div className={`grid gap-3 mb-6 ${selected.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {selected.images.map((key) => (
                <div
                  key={key}
                  className="w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 cursor-zoom-in group relative"
                  onClick={() => setZoomedImg(imageMap[key])}
                >
                  <img
                    src={imageMap[key]}
                    alt={key}
                    className="w-full h-44 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="28" height="28">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" />
                      <path d="M11 8v6M8 11h6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Content */}
            <p className="text-cyan-400 text-xs tracking-widest uppercase mb-2">{selected.subtitle}</p>
            <h3 className="text-white text-2xl font-bold mb-4">{selected.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{selected.description}</p>
          </div>
        </div>
      )}

      {/* Image lightbox */}
      {zoomedImg && (
        <div
          className="modal-overlay fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setZoomedImg(null)}
        >
          <button
            onClick={() => setZoomedImg(null)}
            className="absolute top-5 right-5 text-white/60 hover:text-white bg-transparent border-none cursor-pointer p-1 transition-colors"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
          <img
            src={zoomedImg}
            alt="Award"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  )
}

export default Awards