import { createFileRoute, Link } from '@tanstack/react-router'
import styles from '#/routes/page.module.scss'
import {
  FaDev,
  FaLinkedin,
  FaSquareXTwitter,
  FaGithub,
  FaTwitch,
} from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'
import { useRef } from 'react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className={styles.container1}>
        <nav className={styles.nav}>
          <h1>Lindsey Dortch</h1>
        </nav>
        <section className={styles.hero}>
          <div className={styles.content}>
            <h2>I know, I know...</h2>
            <p>
              I know, I know, you probably came here because I applied for a job
              with your company (or you're just nosey), but someone hasn't
              updated their site since 2021... So someone (aka me Lindsey) is
              working on a rebrand and a redesign.
            </p>
            <p>
              You also might be thinking, Lindsey, what does the Duomo have to
              do with you? I literally have it tattoed on my arm, it's my brand
              at this point. When I'm in Florence, I go stare at it for 10
              minutes every day...
            </p>
            <p>
              Also, my whole rebrand is based around the Duomo... (you're
              getting a taste of the new rebrand color palette)!
            </p>
            <div className={styles.buttons}>
              <button onClick={scrollToSection}>Get In Touch</button>
            </div>
          </div>
          <div className={styles.media}>
            <div className={styles.duomo}>
              <img
                src="/images/duomo-1600.webp"
                srcSet="/images/duomo-800.webp 800w, /images/duomo-1600.webp 1600w"
                sizes="(max-width: 768px) 80vw, (max-width: 992px) 70vw, 50vw"
                width={1600}
                height={1912}
                fetchPriority="high"
                alt="the duomo in Florence, Italy"
              />
            </div>
            <div className={styles.headshot}>
              <img
                src="/images/headshot-1100.webp"
                srcSet="/images/headshot-600.webp 600w, /images/headshot-1100.webp 1100w"
                sizes="(max-width: 768px) 52vw, (max-width: 992px) 43vw, 36vh"
                width={1100}
                height={1437}
                fetchPriority="high"
                alt="headshot of Lindsey Dortch"
              />
            </div>
          </div>
        </section>
      </section>
      <section className={styles.container2}>
        <div className="content">
          <h3>I know, you're itching to hire me</h3>
          <p>
            If you're here because you want to potentially want to hire me,
            here's my tech stack:
          </p>
        </div>
        <div className={styles.content2}>
          <div className={styles.card}>
            <h4>Frontend</h4>
            <ul>
              <li>React</li>
              <ul>
                <li>Next.js </li>
                <li>
                  TanStack Start (please everyone switch to TanStack Start)
                </li>
              </ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>I'll use Tailwind, but I won't be happy about it...</li>
              <li>Vanilla JavaScript </li>
              <li>
                I know Angular, but please don't make me ever use it ever again
                (if I applied for a position that uses Angular ignore this or
                consider yourself special)
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h4>Backend & Databases & Some Cloud</h4>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
              <li>PrismaDB</li>
              <li>Express.js</li>
              <li>NestJS</li>
              <li>AWS</li>
              <li>Google Cloud Platform</li>
              <li>
                Salesforce Commerce Cloud (but please, I never want to use this
                again, no really, never)
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h4>AI</h4>
            <ul>
              <li>Prompt Engineering</li>
              <li>Agentic AI</li>
              <li>MCP</li>
              <li>RAG</li>
              <li>I primarily use Claude Code, but can also use Codex</li>
            </ul>
          </div>
        </div>
        <div className={styles.content3}>
          <h4>What I'm Looking for, let's see if we're a match</h4>
          <p>
            I'm currently on the lookout for Full Stack Senior Software Engineer
            roles. I love anything at the intersection between growth, user
            experience and product. If you want a rant on how important user
            experience is, send me an email or reach out to me on one of my
            socials.
          </p>
        </div>
      </section>
      <footer className={styles.footer} ref={sectionRef}>
        <div className="content">
          <h3>If you want to keep track of me, you can find me at:</h3>
          <ul>
            <li>
              <a href="mailto:lindseyndortch@gmail.com">
                <MdMail />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lindseydortch/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://x.com/lindseydortch">
                <FaSquareXTwitter />
              </a>
            </li>
            <li>
              <a href="https://github.com/lindseydortch">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/lindseydortch">
                <FaTwitch />
              </a>
            </li>
            <li>
              <a href="https://dev.to/lindseydortch">
                <FaDev />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.copyright}>Copyright 2026&copy;</div>
      </footer>
    </>
  )
}
