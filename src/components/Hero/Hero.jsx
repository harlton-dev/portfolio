import { useState } from 'react'
import profileImg from '../../assets/harlton.png'
import wavingHand from '../../assets/icons/waving-hand.svg'
import connectIcon from '../../assets/icons/connect-icons.svg'
import gmailIcon from '../../assets/icons/gmail.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import githubIcon from '../../assets/icons/github.svg'
import cvFile from '../../assets/cv-resume/Hinon_Harlton_CV_2026.pdf'
import portfolio from '../../data/portfolio'
import { calcYears, fillYears } from '../../utils/experience'

const socialIcons = {
  Gmail:    gmailIcon,
  LinkedIn: linkedinIcon,
  GitHub:   githubIcon,
}

const Hero = () => {
  const { name, title, bio, socials } = portfolio
  const [socialsOpen, setSocialsOpen] = useState(false)

  const filledBio = fillYears(bio, calcYears(portfolio.experienceStart))

  return (
    <section className="flex items-start sm:items-center justify-center min-h-[calc(100vh-60px)] overflow-hidden" id="home">

      {/* Fixed left sidebar — lg+ */}
      <div className="fixed left-6 bottom-10 hidden lg:flex flex-col gap-5 z-50">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-white/25 no-underline hover:border-white transition-colors duration-200"
            aria-label={s.label}
            target="_blank"
            rel="noreferrer"
          >
            <img src={socialIcons[s.label]} alt={s.label} width="16" height="16" className="opacity-60 hover:opacity-100" />
          </a>
        ))}
      </div>

      {/* Mobile accordion — below lg */}
      <div className={`fixed left-6 bottom-8 flex flex-col items-start gap-3 z-50 lg:hidden border-2 p-[7px] rounded-full transition-colors duration-300 ${socialsOpen ? 'border-cyan-500/60' : 'border-transparent'}`}>
        <div className={`flex flex-col gap-3 transition-all duration-300 overflow-hidden ${socialsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-cyan-500 bg-cyan-500 no-underline hover:bg-cyan-400 hover:border-cyan-400 transition-colors duration-200"
              aria-label={s.label}
              target="_blank"
              rel="noreferrer"
            >
              <span
                aria-hidden="true"
                className="w-4 h-4 shrink-0 bg-white"
                style={{
                  maskImage: `url("${socialIcons[s.label]}")`,
                  WebkitMaskImage: `url("${socialIcons[s.label]}")`,
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                }}
              />
            </a>
          ))}
        </div>

        <button
          onClick={() => setSocialsOpen((prev) => !prev)}
          className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 cursor-pointer ${socialsOpen ? 'bg-cyan-500 border-cyan-500' : 'bg-transparent border-cyan-500/50 hover:border-cyan-400'}`}
          aria-expanded={socialsOpen}
          aria-label="Toggle social links"
        >
          <img src={connectIcon} alt="connect" width="20" height="20" className={`brightness-0 invert transition-opacity duration-200 ${socialsOpen ? 'opacity-100' : 'opacity-60'}`} />
        </button>
      </div>

      {/* Inner layout */}
      <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-8 xl:gap-16 w-full max-w-[1200px] px-5 sm:px-8 pt-[42px] max-[330px]:pt-1 pb-10 sm:py-10 xl:py-16 text-center xl:text-left">

        {/* Text content */}
        <div className="flex flex-col items-center xl:items-start gap-4 xl:flex-1">
          <div className="reveal-mask reveal-mask--head">
            <h1 className="reveal-line text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] xl:text-[4rem] font-bold text-white leading-[1.1]" style={{ animationDelay: '.1s' }}>
              {name}{' '}
              <img
                src={wavingHand}
                alt="waving hand"
                className="inline-block w-9 h-9 sm:w-11 sm:h-11 xl:w-[3.2rem] xl:h-[3.2rem] align-middle ml-1.5 mb-5"
              />
            </h1>
          </div>
          <div className="reveal-mask">
            <h3 className="reveal-line text-lg sm:text-xl md:text-2xl xl:text-[1.8rem] font-normal text-white/65" style={{ animationDelay: '.5s' }}>
              I&apos;m a <span className="text-white font-semibold">{title}</span>
            </h3>
          </div>
          <div className="reveal-mask">
            <p className="reveal-line text-sm sm:text-base text-white/45 leading-[1.8] max-w-[480px]" style={{ animationDelay: '1s' }}>{filledBio}</p>
          </div>
          <div className="reveal-mask mt-2">
            <a
              href={cvFile}
              download="Harlton-Hinon-CV.pdf"
              className="reveal-line inline-block px-7 py-2.5 rounded-full border-2 border-white text-white text-sm font-medium no-underline hover:bg-white/10 transition-colors duration-200"
              style={{ animationDelay: '1.5s' }}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="hero__shadow">
          <div className="hero__image-container fade-up flex-none w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] xl:w-[480px] xl:h-[480px]" style={{ animationDelay: '0.5s' }}>
            <div className="hero__image-wrap">
              <img src={profileImg} alt={name} className="hero__photo" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
