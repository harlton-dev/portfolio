import portfolio from '../../data/portfolio'
import { calcYears, fillYears } from '../../utils/experience'
import { useInView } from '../../hooks/useInView'
import MaskedLines from '../MaskedLines/MaskedLines'
import briefcaseIcon from '../../assets/icons/briefcase.svg'
import folderIcon from '../../assets/icons/folder.svg'
import trophyIcon from '../../assets/icons/trophy.svg'
import monitorIcon from '../../assets/icons/monitor.svg'

const statIcons = [briefcaseIcon, folderIcon, trophyIcon, monitorIcon]

// Description (MaskedLines) reveal timing — kept in sync with the props below.
const DESC_BASE_DELAY = 0.25
const DESC_STEP = 0.12
const DESC_LINE_COUNT = 5 // the paragraph wraps to ~5 lines

// The first card appears CARD_GAP seconds after the last description line
// begins revealing — snappier than waiting for the full mask to complete —
// then the cards stagger CARD_STEP apart.
const CARD_GAP = 0.3
const CARD_STEP = 0.3
const CARDS_START = DESC_BASE_DELAY + (DESC_LINE_COUNT - 1) * DESC_STEP + CARD_GAP

const About = () => {
  const { stats, description } = portfolio.about
  const years = calcYears(portfolio.experienceStart)

  const filledDescription = fillYears(description, years)

  const resolvedStats = stats.map((stat) => ({
    ...stat,
    value: stat.value === null ? `${years}+` : stat.value,
  }))

  const [headerRef, headerInView] = useInView({ threshold: 0.4 })

  return (
    <section id="about" className="min-h-screen py-20 px-5 sm:px-16 flex items-center">
      <div ref={headerRef} className="max-w-5xl mx-auto flex flex-col gap-12 w-full">

        {/* Title */}
        <div className="reveal-mask text-center">
          <div className={`reveal-up ${headerInView ? 'is-inview' : ''}`}>
            <p className="text-white/50 text-sm tracking-widest uppercase mb-2">Get To Know</p>
            <h2 className="text-white text-4xl font-bold">About Me</h2>
          </div>
        </div>

        {/* About description — each rendered line masks up on its own */}
        <MaskedLines
          text={filledDescription}
          inView={headerInView}
          className="text-white/70 text-base sm:text-lg leading-[1.9] text-left"
          baseDelay={DESC_BASE_DELAY}
          step={DESC_STEP}
        />

        {/* Stat cards — start only after the description has finished revealing */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {resolvedStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal-left flex flex-col items-center gap-3 px-4 py-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center ${headerInView ? 'is-inview' : ''}`}
              style={{ animationDelay: `${(CARDS_START + i * CARD_STEP).toFixed(2)}s` }}
            >
              <img src={statIcons[i]} alt={stat.label} width="32" height="32" />
              <p className="text-white font-semibold text-base leading-tight">{stat.label}</p>
              <p className="text-white/60 text-sm">{stat.value} {stat.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
