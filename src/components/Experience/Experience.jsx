import portfolio from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'
import MaskedLines from '../MaskedLines/MaskedLines'

const DESC_BASE_DELAY = 0.25
const DESC_STEP = 0.12

// Matches the slow glide used by the Skills cards.
const CARD_DURATION = 1.3

const intro =
  'From IT support floors to full-stack development — a career built on curiosity, hands-on problem solving, and a drive to build things that actually work.'

// `direction` is 'reveal-right' (enter from the left) or 'reveal-left' (from the right).
const ExperienceCard = ({ exp, direction }) => {
  const [ref, inView] = useInView({ threshold: 0.25 })
  return (
    <div
      ref={ref}
      style={{ animationDuration: `${CARD_DURATION}s` }}
      className={`${direction} ${inView ? 'is-inview' : ''}
        rounded-2xl px-6 py-6 bg-white/5 backdrop-blur-sm
        border border-cyan-400/20
        shadow-[0_0_20px_rgba(34,211,238,0.07),0_4px_24px_rgba(0,0,0,0.2)]
        hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
        transition-all duration-300
        text-left`}
    >
      <p className="text-cyan-400 text-xs font-medium mb-2 tracking-wide">{exp.period}</p>
      <h3 className="text-white text-xl font-bold mb-1">{exp.role}</h3>
      <p className="text-white/50 text-sm mb-3">{exp.company}</p>
      <p className="text-white/60 text-sm leading-relaxed mb-4">{exp.description}</p>
      <div className="flex flex-wrap gap-2 justify-start">
        {exp.tags.map((tag) => (
          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

// Even entries enter from the left, odd entries from the right.
const cardDirection = (i) => (i % 2 === 0 ? 'reveal-right' : 'reveal-left')

const Experience = () => {
  const { experience } = portfolio
  const [headerRef, headerInView] = useInView({ threshold: 0.4 })

  return (
    <section id="experience" className="min-h-screen py-20 px-5 sm:px-16 flex items-center overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col gap-12 w-full">

        {/* Title */}
        <div ref={headerRef} className="text-center">
          <div className="reveal-mask">
            <div className={`reveal-up ${headerInView ? 'is-inview' : ''}`}>
              <p className="text-white/50 text-sm tracking-widest uppercase mb-2">My Journey</p>
              <h2 className="text-white text-4xl font-bold">Experience</h2>
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

        {/* ── Mobile timeline (left rail) ── */}
        <div className="md:hidden relative pl-8">
          {/* Left vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-cyan-400/30" />

          <div className="flex flex-col gap-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative">
                {/* Dot — centered on line, aligned to card top border */}
                <div className="absolute -left-[31px] top-0 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <ExperienceCard exp={exp} direction={cardDirection(i)} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Desktop timeline (center alternating) ── */}
        <div className="hidden md:block relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-400/30 -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={i} className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-0">

                  {/* Left card or empty */}
                  <div className="pr-10">
                    {isLeft && <ExperienceCard exp={exp} direction={cardDirection(i)} />}
                  </div>

                  {/* Center dot */}
                  <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-10" />

                  {/* Right card or empty */}
                  <div className="pl-10">
                    {!isLeft && <ExperienceCard exp={exp} direction={cardDirection(i)} />}
                  </div>

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
