import { useEffect, useState } from 'react'
import portfolio from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'
import MaskedLines from '../MaskedLines/MaskedLines'

import oneCompliance              from '../../assets/projects/one-compliance.png'
import remoteAlphaGeeks           from '../../assets/projects/remote-alpha-geeks.png'
import wdcDashboard                from '../../assets/projects/WDC-dashboard.png'
import wdcChartjs                  from '../../assets/projects/WDC-chartjs-project.png'
import wdcHouseSimulator           from '../../assets/projects/WDC-house-simulator-steps.png'
import preventiveMaintenanceDash  from '../../assets/projects/preventive_maintenance-dashboard.png'

const imageMap = {
  'one-compliance':                  oneCompliance,
  'remote-alpha-geeks':               remoteAlphaGeeks,
  'wdc-dashboard':                    wdcDashboard,
  'wdc-chartjs':                      wdcChartjs,
  'wdc-house-simulator':              wdcHouseSimulator,
  'preventive-maintenance-dashboard': preventiveMaintenanceDash,
}

const placeholderGradients = [
  'from-blue-500 to-cyan-400',
  'from-indigo-500 to-blue-400',
  'from-cyan-600 to-teal-400',
]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
  </svg>
)

const ZoomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="28" height="28">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" />
    <path d="M11 8v6M8 11h6" strokeLinecap="round" />
  </svg>
)

// Description (MaskedLines) reveal timing — kept in sync with the props below.
const DESC_BASE_DELAY = 0.25
const DESC_STEP = 0.12
const DESC_LINE_COUNT = 2 // the description wraps to ~2 lines
// The description reads as settled shortly after its last line begins, so anchor
// the cards to that perceived finish rather than the full mask duration.
const DESC_SETTLE = 0.2
const DESC_REVEAL_END =
  DESC_BASE_DELAY + (DESC_LINE_COUNT - 1) * DESC_STEP + DESC_SETTLE

// First card 0.3s after the description settles, then 0.5s apart (matches Awards).
const CARD_GAP = 0.3
const CARD_STEP = 0.5

const intro =
  'A collection of work built across the full stack — from sleek frontends to robust backend systems and everything in between.'

const Projects = () => {
  const [selected, setSelected] = useState(null)
  const [zoomedImg, setZoomedImg] = useState(null)
  const { projects } = portfolio
  const [headerRef, headerInView] = useInView({ threshold: 0.35 })

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section id="projects" className="min-h-screen py-20 px-5 sm:px-16 flex items-center">
      <div ref={headerRef} className="max-w-5xl mx-auto flex flex-col gap-12 w-full">

        {/* Title */}
        <div className="text-center">
          <div className="reveal-mask">
            <div className={`reveal-up ${headerInView ? 'is-inview' : ''}`}>
              <p className="text-white/50 text-sm tracking-widest uppercase mb-2">My Portfolio</p>
              <h2 className="text-white text-4xl font-bold">Projects</h2>
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

        {/* Cards grid — fade up from the bottom, staggered after the description finishes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const isConfidential = !!project.confidential
            const thumbnail = isConfidential ? null : imageMap[project.image]
            const Wrapper = isConfidential ? 'button' : 'a'
            const wrapperProps = isConfidential
              ? { type: 'button', onClick: () => setSelected(project) }
              : { href: project.href, target: '_blank', rel: 'noopener noreferrer' }

            return (
              <div
                key={i}
                className={`reveal-fade-up h-full ${headerInView ? 'is-inview' : ''}`}
                style={{ animationDelay: `${(DESC_REVEAL_END + CARD_GAP + i * CARD_STEP).toFixed(2)}s` }}
              >
              <Wrapper
                {...wrapperProps}
                className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 hover:-translate-y-2 cursor-pointer no-underline text-left w-full"
              >
                {/* Image */}
                <div className="p-2">
                  <div className={`relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br ${placeholderGradients[i % placeholderGradients.length]} flex items-center justify-center`}>
                    {isConfidential
                      ? <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-full h-full">
                          {project.images.map(({ key }) => (
                            <div key={key} className="overflow-hidden">
                              <img
                                src={imageMap[key]}
                                alt={project.title}
                                className="w-full h-full object-cover object-top duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      : thumbnail
                        ? <img src={thumbnail} alt={project.title} className="w-full h-full object-cover" />
                        : <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" width="40" height="40" className="opacity-30">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                          </svg>
                    }
                    {isConfidential && (
                      <span className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white/80 text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full border border-white/10">
                        <LockIcon /> Confidential
                      </span>
                    )}
                  </div>
                </div>

                {/* Info bar */}
                <div className="flex items-center justify-between px-4 py-4 gap-3">
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm truncate">{project.title}</p>
                    <p className="text-cyan-400/80 text-xs truncate">{project.type}</p>
                    <p className="text-white/50 text-xs truncate">{project.category}</p>
                  </div>
                  <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-white/25 text-white/60 group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:text-white transition-all duration-300">
                    {isConfidential ? <EyeIcon /> : <ArrowIcon />}
                  </span>
                </div>
              </Wrapper>
              </div>
            )
          })}
        </div>

      </div>

      {/* Confidential project modal */}
      {selected && (
        <div
          className="modal-overlay fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-panel themed-scrollbar relative w-full max-w-2xl rounded-2xl bg-[#0f2548] border border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.15)] p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-white/50 hover:text-white bg-transparent border-none cursor-pointer p-1 transition-colors"
              aria-label="Close"
            >
              <CloseIcon />
            </button>

            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 bg-amber-400/10 text-amber-300 text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full border border-amber-400/30 mb-4">
              <LockIcon /> Confidential / Internal Project
            </span>

            <h3 className="text-white text-2xl font-bold mb-1">{selected.title}</h3>
            <p className="text-white/50 text-sm mb-6">{selected.type}</p>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {selected.images.map(({ key, label }) => (
                <div
                  key={key}
                  className="w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 cursor-zoom-in group relative"
                  onClick={() => setZoomedImg(imageMap[key])}
                >
                  <img
                    src={imageMap[key]}
                    alt={key}
                    className="w-full h-36 sm:h-44 object-cover object-top opacity-40 group-hover:opacity-60 transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-lg sm:text-xl tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] text-center px-2">
                      {label}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
                    <ZoomIcon />
                  </div>
                </div>
              ))}
            </div>

            {/* Project breakdown */}
            <div className="flex flex-col gap-5">
              {selected.details.map((detail, idx) => (
                <div key={idx} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <p className="text-cyan-400 text-xs tracking-widest uppercase mb-1">{detail.category}</p>
                  <h4 className="text-white font-bold mb-1">
                    {detail.title} <span className="text-white/50 font-normal">— {detail.type}</span>
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">{detail.description}</p>
                </div>
              ))}
            </div>
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
            alt="Project screenshot"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  )
}

export default Projects
