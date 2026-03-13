import { useEffect, useRef } from 'react'
import './App.css'

function GlitchText({ text }) {
  return (
    <span className="glitch" data-text={text}>
      {text}
    </span>
  )
}

function TerminalLine({ children, delay = 0 }) {
  return (
    <div className="terminal-line" style={{ animationDelay: `${delay}ms` }}>
      <span className="prompt">$&gt;</span> {children}
    </div>
  )
}

function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = '01アイウエオカキクケコサシスセソタチツテト'
    const fontSize = 13
    const cols = Math.floor(canvas.width / fontSize)
    const drops = Array(cols).fill(1)

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00ff4130'
      ctx.font = `${fontSize}px monospace`
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, y * fontSize)
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })
    }

    const interval = setInterval(draw, 50)
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-canvas" />
}

const skills = [
  { label: 'SOC & SIEM Operations', level: 85 },
  { label: 'Network Security', level: 80 },
  { label: 'Web App Security', level: 75 },
  { label: 'Penetration Testing', level: 68 },
  { label: 'Threat Intelligence', level: 82 },
  { label: 'Python / Scripting', level: 60 },
]

const tools = [
  'Python', 'Bash', 'Metasploit', 'Burp Suite', 'OWASP ZAP',
  'Wireshark', 'Splunk', 'Nmap', 'Linux', 'VMware', 'SQL', 'C++',
]

const experience = [
  {
    role: 'Cyber Security Intern',
    org: 'CEMILAC',
    full: 'Centre for Military Airworthiness & Certification',
    location: 'Bangalore',
    period: 'Dec 2025 – Jan 2026',
    points: [
      'Worked inside a defence-grade network environment, getting a first-hand look at how high-security infrastructure is architected and protected.',
      'Analysed real organisational vulnerabilities alongside senior scientists and contributed to recommending practical mitigation strategies.',
      'Learned how security decisions are made in a classified, high-stakes setting — something you can\'t get from a textbook.',
    ],
  },
  {
    role: 'Information Security Associate Intern',
    org: 'TGCSB',
    full: 'Telangana Cyber Security Bureau',
    location: 'Hyderabad',
    period: 'Aug 2025 – Sep 2025',
    points: [
      'Analysed phishing emails and triaged live security alerts as part of the government\'s active SOC operations.',
      'Monitored the SIEM daily, investigated alerts, and kept logs clean and intact to support real-time threat detection.',
      'Wrote daily incident reports that fed directly into the bureau\'s threat response workflows.',
    ],
  },
  {
    role: 'SOC Analyst Intern',
    org: 'Cybersecurity-NxxT',
    full: 'Cybersecurity-NxxT',
    location: 'Coimbatore',
    period: 'Jun 2025 – Jul 2025',
    points: [
      'Watched and investigated live security alerts in the SIEM, learning to spot threats and anomalies in real traffic.',
      'Triaged incoming incidents and escalated anything critical to senior analysts — fast and accurately.',
      'Kept SOC operations running smoothly through regular health checks, log reviews, and daily reporting.',
    ],
  },
]

const projects = [
  {
    name: 'Wi-Fi Deauther',
    tags: ['Aircrack-ng', 'Linux', 'Python', 'Alfa Adapter'],
    desc: 'Demonstrated Wi-Fi deauthentication attacks to highlight security flaws while following ethical guidelines. Identified access points and executed targeted disconnects in controlled test environments to validate mitigation strategies.',
  },
  {
    name: 'Keylogger Implementation',
    tags: ['Python', 'pynput'],
    desc: 'Built a keylogger to capture and securely store keystrokes in local text files for research purposes. Studied monitoring risks and countermeasures for detection and prevention.',
  },
]

const certs = [
  { name: 'CEH', full: 'Certified Ethical Hacker — EC-Council' },
  { name: 'IBM CySec', full: 'IBM Cybersecurity Analyst Certificate — Coursera' },
  { name: 'CTI 101', full: 'Cyber Threat Intelligence 101 — arcX' },
  { name: 'Email Auth', full: 'Email Authentication Specialist — Proofpoint' },
  { name: 'NPTEL OST', full: 'Open-Source Tools for Cyber Security — NPTEL' },
]

export default function App() {
  return (
    <>
      <MatrixRain />

      <div className="site-wrapper">
        <nav className="navbar">
          <span className="nav-logo">BS<span className="blink">_</span></span>
          <ul className="nav-links">
            <li><a href="#about">about</a></li>
            <li><a href="#experience">experience</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#projects">projects</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>

        <section className="hero" id="hero">
          <div className="hero-content">
            <p className="hero-label">&lt; cybersecurity + vibe coding /&gt;</p>
            <h1><GlitchText text="Shashank Bapatla" /></h1>
            <p className="hero-sub">
              SOC Analyst · Ethical Hacker · Vibe Coder
            </p>
            <div className="hero-terminal">
              <TerminalLine delay={200}>whoami</TerminalLine>
              <TerminalLine delay={600}>cybersecurity undergraduate &amp; vibe coder · Hyderabad</TerminalLine>
              <TerminalLine delay={1000}>cat mission.txt</TerminalLine>
              <TerminalLine delay={1400}>
                <span className="green">strengthen digital ecosystems. break things ethically. build with good vibes.</span>
              </TerminalLine>
            </div>
            <div className="hero-actions">
              <a href="#experience" className="btn-primary">view experience</a>
              <a href="#contact" className="btn-ghost">get in touch</a>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <h2 className="section-title"><span className="accent">//</span> about me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;m Shashank — a cybersecurity student who enjoys learning how things break
                and trying to fix them. I&apos;ve done a few internships, picked up some skills,
                and I&apos;m still figuring things out. I like building small projects on the side.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat"><span className="stat-num">3</span><span className="stat-label">internships</span></div>
              <div className="stat"><span className="stat-num">5</span><span className="stat-label">certifications</span></div>
              <div className="stat"><span className="stat-num">2026</span><span className="stat-label">graduating</span></div>
              <div className="stat"><span className="stat-num">3</span><span className="stat-label">sec domains</span></div>
            </div>
          </div>
          <div className="certs">
            {certs.map(c => (
              <div key={c.name} className="cert-badge" title={c.full}>{c.name}</div>
            ))}
          </div>
        </section>

        <section className="experience-section section" id="experience">
          <h2 className="section-title"><span className="accent">//</span> experience</h2>
          <div className="timeline">
            {experience.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-header">
                  <div>
                    <h3 className="exp-role">{e.role}</h3>
                    <p className="exp-org" title={e.full}>{e.org} <span className="exp-location">· {e.location}</span></p>
                  </div>
                  <span className="exp-period">{e.period}</span>
                </div>
                <ul className="exp-points">
                  {e.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="section-title"><span className="accent">//</span> skills</h2>
          <div className="skills-grid">
            {skills.map(s => (
              <div key={s.label} className="skill-row">
                <span className="skill-name">{s.label}</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ '--level': `${s.level}%` }} />
                </div>
                <span className="skill-pct">{s.level}%</span>
              </div>
            ))}
          </div>
          <div className="tools">
            {tools.map(t => (
              <span key={t} className="tool-chip">{t}</span>
            ))}
          </div>
        </section>

        <section className="projects-section section" id="projects">
          <h2 className="section-title"><span className="accent">//</span> projects</h2>
          <div className="projects-grid">
            {projects.map(p => (
              <div key={p.name} className="project-card">
                <div className="card-header">
                  <span className="card-icon">&#x1F512;</span>
                  <h3>{p.name}</h3>
                </div>
                <p>{p.desc}</p>
                <div className="card-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <h2 className="section-title"><span className="accent">//</span> contact</h2>
          <div className="contact-terminal">
            <TerminalLine>ping shashank</TerminalLine>
            <div className="contact-links">
              <a href="https://github.com/bshnk" target="_blank" rel="noreferrer" className="contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                github.com/bshnk
              </a>
              <a href="https://linkedin.com/in/shashank-bapatla" target="_blank" rel="noreferrer" className="contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                linkedin.com/in/shashank-bapatla
              </a>
              <a href="mailto:shashank.bapatla2004@gmail.com" className="contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                shashank.bapatla2004@gmail.com
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span className="green">// tfi bagupadali</span>
        </footer>
      </div>
    </>
  )
}
