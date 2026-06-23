import portfolio from '../../data/portfolio'
import { calcYears } from '../../utils/experience'
import { useInView } from '../../hooks/useInView'
import MaskedLines from '../MaskedLines/MaskedLines'
import checkedIcon from '../../assets/icons/checked.svg'

const CheckIcon = () => (
  <img src={checkedIcon} alt="checked" width="16" height="16" className="shrink-0 brightness-0 invert" />
)

// Description (MaskedLines) reveal timing — kept in sync with the props below.
const DESC_BASE_DELAY = 0.25
const DESC_STEP = 0.12
const DESC_LINE_COUNT = 3 // the description wraps to ~3 lines

// The cards appear CARD_GAP seconds after the last description line begins
// revealing. Both cards share this same delay so they slide in together.
const CARD_GAP = 0.3
const CARDS_START = DESC_BASE_DELAY + (DESC_LINE_COUNT - 1) * DESC_STEP + CARD_GAP
// Slower glide for the two skill cards (overrides the shared class default).
const CARD_DURATION = 1.3

const Skills = () => {
  const years = calcYears(portfolio.experienceStart)
  const description = `A full-stack skill set built over ${years}+ years — from crafting responsive UIs to architecting backend systems, deploying with Docker and AWS, and keeping infrastructure stable and performant.`

  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <section id="skills" className="min-h-screen py-14 px-5 sm:px-16 flex items-center">
      <div ref={ref} className="max-w-5xl mx-auto flex flex-col gap-8 w-full">

        {/* Title */}
        <div className="reveal-mask text-center">
          <div className={`reveal-up ${inView ? 'is-inview' : ''}`}>
            <p className="text-white/50 text-sm tracking-widest uppercase mb-2">What I Work With</p>
            <h2 className="text-white text-4xl font-bold">Skills</h2>
          </div>
        </div>

        {/* Description — each rendered line masks up on its own */}
        <MaskedLines
          text={description}
          inView={inView}
          className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed text-center"
          baseDelay={DESC_BASE_DELAY}
          step={DESC_STEP}
        />

        {/* Cards grid — Frontend enters from the left, Backend from the right, together */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolio.skills.map((group, i) => (
            <div
              key={group.category}
              className={`${i === 0 ? 'reveal-right' : 'reveal-left'} rounded-2xl px-6 py-6 bg-white/10 backdrop-blur-sm border border-white/10 ${inView ? 'is-inview' : ''}`}
              style={{ animationDelay: `${CARDS_START.toFixed(2)}s`, animationDuration: `${CARD_DURATION}s` }}
            >
              <h3 className="text-white text-base font-semibold text-center mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {group.items.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <CheckIcon />
                    <span className="text-white/80 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
