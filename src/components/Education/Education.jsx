import portfolio from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'
import MaskedLines from '../MaskedLines/MaskedLines'

const DESC_BASE_DELAY = 0.25
const DESC_STEP = 0.12
const DESC_LINE_COUNT = 3 // the description wraps to ~3 lines
// The description reads as settled shortly after its last line begins, so anchor
// the entries to that perceived finish rather than the full mask duration.
const DESC_SETTLE = 0.2
const DESC_REVEAL_END =
  DESC_BASE_DELAY + (DESC_LINE_COUNT - 1) * DESC_STEP + DESC_SETTLE

// Entries reveal in sequence: the first one starts CARD_GAP after the
// description settles, then each following entry CARD_STEP later.
const CARD_GAP = 0.3
const CARD_STEP = 0.4
const cardDelay = (i) => DESC_REVEAL_END + CARD_GAP + i * CARD_STEP

// Matches the slow glide used by the Experience cards.
const CARD_DURATION = 1.3

const intro =
  'A foundation built through years of formal education, from elementary roots in Cebu to a technology degree that launched a career in software engineering.'

// This timeline alternates the opposite way to Experience (even = right side),
// so flip the direction mapping to keep each entry sliding in from its own side.
const eduDirection = (i) => (i % 2 === 0 ? 'reveal-left' : 'reveal-right')

const levelIcons = {
  Primary: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  Secondary: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  College: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
}

const BannerRight = ({ edu }) => (
  <div className="flex flex-col gap-3">
    <div
      className="flex items-center gap-3 px-5 py-3 bg-cyan-500/80 text-white font-bold text-sm uppercase tracking-wide w-fit"
      style={{ clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 20px 100%, 0% 50%)' }}
    >
      <span className="pl-2">{edu.level}</span>
    </div>
    <div className="pl-2">
      <p className="text-white font-semibold text-base">{edu.school}</p>
      <p className="text-cyan-300 text-xs mb-2">{edu.location} · {edu.period}</p>
      <p className="text-white/60 text-sm leading-relaxed max-w-xs">{edu.description}</p>
    </div>
  </div>
)

const BannerLeft = ({ edu }) => (
  <div className="flex flex-col items-end gap-3">
    <div
      className="flex items-center gap-3 px-5 py-3 bg-cyan-500/80 text-white font-bold text-sm uppercase tracking-wide w-fit"
      style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)' }}
    >
      <span className="pr-2">{edu.level}</span>
    </div>
    <div className="text-right pr-2">
      <p className="text-white font-semibold text-base">{edu.school}</p>
      <p className="text-cyan-300 text-xs mb-2">{edu.location} · {edu.period}</p>
      <p className="text-white/60 text-sm leading-relaxed max-w-xs ml-auto">{edu.description}</p>
    </div>
  </div>
)

// Slides in from its side once the section header is in view, after `delay`.
const RevealItem = ({ direction, inView, delay, className = '', children }) => (
  <div
    style={{ animationDuration: `${CARD_DURATION}s`, animationDelay: `${delay}s` }}
    className={`${direction} ${inView ? 'is-inview' : ''} ${className}`}
  >
    {children}
  </div>
)

const Education = () => {
  const { education } = portfolio
  const [headerRef, headerInView] = useInView({ threshold: 0.4 })

  return (
    <section id="education" className="min-h-screen py-20 px-5 sm:px-16 flex items-center overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col gap-12 w-full">

        {/* Title */}
        <div ref={headerRef} className="text-center">
          <div className="reveal-mask">
            <div className={`reveal-up ${headerInView ? 'is-inview' : ''}`}>
              <p className="text-white/50 text-sm tracking-widest uppercase mb-2">Academic Path</p>
              <h2 className="text-white text-4xl font-bold">Educational Background</h2>
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

        {/* ── Desktop timeline ── */}
        <div className="hidden md:block relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-cyan-400/40 -translate-x-1/2" />

          <div className="flex flex-col gap-14">
            {education.map((edu, i) => {
              const isRight = i % 2 === 0
              return (
                <div key={i} className="grid grid-cols-[1fr_40px_1fr] items-start gap-0">

                  {/* Left slot */}
                  <div className="flex justify-end pr-6 pt-1">
                    {!isRight && (
                      <RevealItem direction={eduDirection(i)} inView={headerInView} delay={cardDelay(i)}>
                        <div className="flex items-start gap-4">
                          <div className="text-cyan-300 mt-1">{levelIcons[edu.level]}</div>
                          <BannerLeft edu={edu} />
                        </div>
                      </RevealItem>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="flex justify-center pt-3">
                    <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)] z-10" />
                  </div>

                  {/* Right slot */}
                  <div className="pl-6 pt-1">
                    {isRight && (
                      <RevealItem direction={eduDirection(i)} inView={headerInView} delay={cardDelay(i)}>
                        <div className="flex items-start gap-4">
                          <BannerRight edu={edu} />
                          <div className="text-cyan-300 mt-1">{levelIcons[edu.level]}</div>
                        </div>
                      </RevealItem>
                    )}
                  </div>

                </div>
              )
            })}
          </div>
        </div>

        {/* ── Mobile timeline (left rail) ── */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-cyan-400/40" />
          <div className="flex flex-col gap-10">
            {education.map((edu, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-0 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <RevealItem direction={eduDirection(i)} inView={headerInView} delay={cardDelay(i)}>
                  <div
                    className="inline-flex items-center px-4 py-2 mb-3 bg-cyan-500/80 text-white font-bold text-xs uppercase tracking-wide"
                    style={{ clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 20px 100%, 0% 50%)' }}
                  >
                    <span className="pl-2">{edu.level}</span>
                  </div>
                  <p className="text-white font-semibold text-base">{edu.school}</p>
                  <p className="text-cyan-300 text-xs mb-2">{edu.location} · {edu.period}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{edu.description}</p>
                </RevealItem>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education
