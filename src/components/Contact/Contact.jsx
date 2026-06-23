import portfolio from '../../data/portfolio'

const navLinks = [
  { label: 'Home',                   href: '#home' },
  { label: 'About Me',               href: '#about' },
  { label: 'Skills',                 href: '#skills' },
  { label: 'Experience',             href: '#experience' },
  { label: 'Projects',               href: '#projects' },
  { label: 'Awards',                 href: '#awards' },
  { label: 'Educational Background', href: '#education' },
]

const handleScroll = (e, href) => {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) target.scrollIntoView({ behavior: 'smooth' })
}

const Contact = () => {
  const { name, contact } = portfolio

  return (
    <footer id="contact" className="border-t border-white/10 bg-[#2672E0]">

      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-5 sm:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand + bio */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <h2 className="text-white text-2xl font-bold">{name}</h2>
          <p className="text-white/55 text-sm leading-relaxed">
            Full-stack software engineer based in Cebu City, Philippines. Building reliable web applications and solving real-world problems through clean, efficient code.
          </p>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-5">
          <h3 className="text-white font-semibold text-base border-b border-white/10 pb-2">Contact</h3>

          <div className="flex gap-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" className="text-cyan-400 shrink-0 mt-0.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{contact.address}</p>
          </div>

          <div className="flex gap-3 items-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" className="text-cyan-400 shrink-0">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 14 19.79 19.79 0 0 1 1 5.18 2 2 0 0 1 3 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 18z"/>
            </svg>
            <a href={`tel:${contact.phone}`} className="text-white/60 text-sm hover:text-white transition-colors no-underline">{contact.phone}</a>
          </div>

          <div className="flex gap-3 items-center">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className="text-cyan-400 shrink-0">
              <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <a href={`mailto:${contact.email}`} className="text-white/60 text-sm hover:text-white transition-colors no-underline break-all">{contact.email}</a>
          </div>
        </div>

        {/* Online profiles */}
        <div className="flex flex-col gap-5">
          <h3 className="text-white font-semibold text-base border-b border-white/10 pb-2">Online Profiles</h3>

          <div className="flex gap-3 items-center">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className="text-cyan-400 shrink-0">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
            </svg>
            <div>
              <p className="text-white/40 text-xs mb-0.5">GitHub</p>
              <a href={contact.github.href} target="_blank" rel="noreferrer" className="text-white/70 text-sm hover:text-cyan-400 transition-colors no-underline">{contact.github.label}</a>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className="text-cyan-400 shrink-0">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <div>
              <p className="text-white/40 text-xs mb-0.5">LinkedIn</p>
              <a href={contact.linkedin.href} target="_blank" rel="noreferrer" className="text-white/70 text-sm hover:text-cyan-400 transition-colors no-underline break-all">{contact.linkedin.label}</a>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-5">
          <h3 className="text-white font-semibold text-base border-b border-white/10 pb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-white/60 text-sm hover:text-cyan-400 transition-colors no-underline flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400/60 inline-block" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Copyright bar */}
      <div className="max-w-6xl mx-auto px-5 sm:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-white/40 text-xs text-center sm:text-left">
          © {new Date().getFullYear()} <span className="text-white/60">{name}</span>. All Rights Reserved.
        </p>
        <p className="text-white/30 text-xs text-center sm:text-right">
          Designed &amp; Built with ♥ using React &amp; Tailwind CSS
        </p>
      </div>

    </footer>
  )
}

export default Contact
