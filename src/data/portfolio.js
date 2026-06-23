const portfolio = {
  name: 'Harlton Hinon',
  title: 'Software Engineer',
  bio: 'Building full-stack web applications with Laravel, JavaScript, and MySQL for {years}+ years, focused on scalable backend systems and reliable user experiences.',
  cv: '/cv.pdf',

  // March 2021 — anniversary month triggers the +1 each year
  experienceStart: { year: 2021, month: 3 },

  socials: [
    { label: 'Gmail',    href: 'mailto:harltonhinon@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harlton-hinon/' },
    { label: 'GitHub',   href: 'https://github.com/harlton-dev' },
  ],

  about: {
    description: 'I am a Software Engineer with {years}+ years of experience in Laravel, JavaScript, and MySQL, backed by 7+ years in IT support and infrastructure. Experienced in building and maintaining web applications, optimizing backend systems, and handling production issues. Skilled in both frontend and backend development, with hands-on experience in Docker and Nginx, and working knowledge of AWS(S3) for file storage and retrieval. Proven ability to troubleshoot complex systems and deliver reliable solutions in fast-paced environments.',
    stats: [
      { label: 'Experience',   value: null,    sub: 'Years Working' },
      { label: 'Projects',     value: '10+',   sub: 'Completed' },
      { label: 'Awards',       value: '3+',    sub: 'Received' },
      { label: 'Tech Support', value: '1000+', sub: 'Computers Managed' },
    ],
  },

  skills: [
    {
      category: 'Frontend & UI Development',
      items: ['HTML', 'CSS', 'Sass', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'jQuery', 'Vue.js', 'React'],
    },
    {
      category: 'Backend & DevOps',
      items: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Git', 'Docker', 'AWS (S3, EC2)', 'Nginx', 'Debugging', 'Optimization', 'AI-assisted Claude Code', 'Technical troubleshooting'],
    },
  ],

  experience: [
    {
      period: 'Oct 2022 – Present',
      role: 'Software Engineer (Freelance)',
      company: 'Oyster Inc. · Tokyo, Japan (Remote)',
      description: 'Developed and maintained backend and frontend features using Laravel. Managed file storage using AWS S3 and configured and maintained Nginx servers. Improved system performance and resolved production issues to ensure platform stability.',
      tags: ['Laravel', 'PHP', 'MySQL', 'AWS S3', 'Nginx', 'Git'],
    },
    {
      period: 'Feb 2022 – Mar 2026',
      role: 'Software Engineer (Team Leader)',
      company: 'HipeJapan Inc. · Cebu City (On-site)',
      description: 'Led development of web-based systems using Laravel and JavaScript, jQuery, CSS, and Sass. Managed backend logic, database queries, and system optimization. Handled debugging and issue resolution in production environments, and collaborated with team members while reviewing code for quality.',
      tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'jQuery', 'Sass', 'Git'],
    },
    {
      period: 'Mar 2024 – Present',
      role: 'Frontend Developer (Freelance, On-call)',
      company: 'Remote Alpha Geeks · Cebu City (Remote)',
      description: 'Implemented UI features and enhancements as needed across existing web systems. Fixed bugs and improved user experience to maintain smooth and consistent front-end performance.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git'],
    },
    {
      period: 'Sept 2014 – Feb 2022',
      role: 'Technical Support Specialist',
      company: 'Vicente Sotto Memorial Medical Center · Cebu City (On-site)',
      description: 'Supported over 2,000 computers and printers across hospital departments. Maintained network connectivity and hardware systems, and diagnosed and resolved technical issues. Self-initiated and developed an internal IT Helpdesk web application using Laravel to streamline support operations.',
      tags: ['System Administration', 'Networking', 'Hardware', 'Laravel', 'Technical Support'],
    },
  ],
  awards: [
    {
      title: 'Best Employee of the Month',
      subtitle: 'HipeJapan Inc. · Company Recognition',
      short: 'Recognized for outstanding performance, reliability, and going above and beyond every task undertaken.',
      description: 'Awarded by HipeJapan Inc. for consistently delivering high-quality work, demonstrating reliability, and showing exceptional dedication to the team. This recognition reflects the commitment to excellence in every project handled — from backend development to team collaboration and code quality reviews.',
      images: ['employee-of-the-month'],
    },
    {
      title: 'Clients Impact Award',
      subtitle: 'Oyster Inc. & HipeJapan Inc. · Client Excellence',
      short: 'Recognized for delivering impactful solutions that directly improved client satisfaction and business outcomes.',
      description: 'Presented by HipeJapan Inc. in recognition of the positive impact delivered to clients through reliable software solutions and consistent communication. This award highlights the ability to understand client needs and translate them into working systems that drive real business value. Personally awarded by Shintaro, a key representative of the client side.',
      images: ['clients-impact', 'shintaro-award'],
    },
    {
      title: 'Sales Achiever Award',
      subtitle: 'HipeJapan Inc. · Business Achievement',
      short: 'Awarded for contributions that supported business growth and helped the team achieve key sales milestones.',
      description: 'Received from HipeJapan Inc. for contributions that supported the company\'s sales performance through technical excellence and client-facing reliability. By delivering stable, well-built systems on time, this award recognizes the role technical work plays in business success. Personally awarded by Hedike, a senior leader within the organization.',
      images: ['sales-achiever', 'hedike-award'],
    },
  ],

  projects: [
    {
      title: 'One Compliance',
      type: 'E-Learning System',
      category: 'Full Stack Development',
      image: 'one-compliance',
      href: 'https://onecompliance.jp/',
    },
    {
      title: 'Remote Alpha Geeks',
      type: 'Recruitment Business',
      category: 'Frontend Development',
      image: 'remote-alpha-geeks',
      href: 'https://www.remotealphageeksva.com/',
    },
    {
      title: 'Other Projects',
      type: 'Internal Company Projects',
      category: 'Frontend & Full Stack Development',
      confidential: true,
      images: [
        { key: 'wdc-dashboard',                    label: 'WDC' },
        { key: 'wdc-chartjs',                      label: 'WDC' },
        { key: 'wdc-house-simulator',              label: 'WDC' },
        { key: 'preventive-maintenance-dashboard', label: 'Preventive Maintenance' },
      ],
      details: [
        {
          title: 'WDC',
          type: 'Social Welfare Information System',
          category: 'Frontend Development',
          description: 'Developed interactive dashboards and data visualizations using Chart.js, and built a multi-step house simulator module to streamline data entry for social welfare case records. Focused on responsive UI, smooth user flows, and consistent design across the system.',
        },
        {
          title: 'Preventive Maintenance',
          type: 'IT Asset Management System',
          category: 'Full Stack Development',
          description: 'Built a full-stack preventive maintenance system using Laravel and MySQL, including a dashboard for scheduling and tracking equipment maintenance, managing IT asset records, and generating reports across departments.',
        },
      ],
    },
  ],

  education: [
    {
      level: 'Primary',
      school: 'Inayawan Elementary School',
      location: 'Cebu City',
      period: '2000 – 2005',
      description: 'Completed primary education with a strong foundation in core subjects, building early skills in reading, mathematics, and science.',
    },
    {
      level: 'Primary',
      school: 'Cherubs Academy, Inc.',
      location: 'Cebu City',
      period: '2005 – 2006',
      description: 'Continued primary education, developing academic discipline and broadening knowledge across fundamental subjects.',
    },
    {
      level: 'Secondary',
      school: 'University of the Visayas Pardo Campus',
      location: 'Cebu City',
      period: '2006 – 2010',
      description: 'Completed secondary education with a focus on science and technology, laying the groundwork for a career in the technical field.',
    },
    {
      level: 'College',
      school: 'Cebu Technological University Main',
      location: 'Cebu City',
      period: '2010 – 2014',
      description: 'Graduated with a Bachelor of Science in Industrial Technology, Major in Computer Technology — combining engineering principles with hands-on computer systems training.',
    },
  ],

  contact: {
    address: '414C Jones Ave. Sitio Kulo,\nBrgy. Sambag II, Cebu City,\nPhilippines 6000',
    phone: '+63 915 012 2102',
    email: 'harltonhinon@gmail.com',
    github: { label: 'harlton-dev', href: 'https://github.com/harlton-dev' },
    linkedin: { label: 'harlton-hinon', href: 'https://www.linkedin.com/in/harlton-hinon/' },
  },
}

export default portfolio
