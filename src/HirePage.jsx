import { useState } from 'react'
import Navbar from './Navbar.jsx'
import {
  HIRE_CATEGORIES,
  HIRE_BENEFITS,
  HIRE_STEPS,
  HIRE_TALENT_TABS,
  TESTIMONIALS,
  HIRE_STATS,
  HIRE_FOOTER_GROUPS,
} from './data.js'

const HIRE_SUBNAV = [
  { label: 'Dashboard', url: '/hire/dashboard/jobs' },
  { label: 'Find Creatives', url: '/hire/browse' },
  { label: 'Hiring on Behance', url: '/hire', active: true },
  { label: 'New Job', url: '/hire/jobs' },
]

const HIRE_IMG_BASE = 'https://a5.behance.net/b6de958fa60333a6b07e7b72087bb95f4bff2f22/img/hire/'

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 3l1.8 5.4 5.7.4-4.4 3.7 1.4 5.5-4.5-3.2-4.5 3.2 1.4-5.5L4.5 8.8l5.7-.4z" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M17.5 14v7M14 17.5h7" strokeLinecap="round" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ProBadge() {
  return (
    <span className="hirepage-pro-badge">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <path d="M12 3l2.2 4.9 5.3.5-4 3.6 1.2 5.2L12 14.6l-4.7 2.6 1.2-5.2-4-3.6 5.3-.5z" strokeLinejoin="round" />
      </svg>
      Pro
    </span>
  )
}

function ListSearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 01-9 8.4 9 9 0 01-3.5-.7L3 21l1.8-5.5a8.4 8.4 0 1116.2-4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 10.5h7M8.5 14h4" strokeLinecap="round" />
    </svg>
  )
}

const BENEFIT_ICONS = [SparkleIcon, GridIcon, ShieldCheckIcon, ProBadge]

function WhyHire() {
  return (
    <section className="hirepage-section hirepage-why">
      <div className="hirepage-why-content">
        <h2 className="hirepage-section-title">Why hire on Behance?</h2>
        <p className="hirepage-section-sub">Hiring freelance talent on Behance is seamless and secure.</p>
        <ul className="hirepage-benefits">
          {HIRE_BENEFITS.map((benefit, i) => {
            const Icon = BENEFIT_ICONS[i]
            return (
              <li className="hirepage-benefit" key={benefit.title}>
                <span className="hirepage-benefit-icon">{Icon && <Icon />}</span>
                <span className="hirepage-benefit-body">
                  <span className="hirepage-benefit-title">{benefit.title}</span>
                  <span className="hirepage-benefit-text">{benefit.text}</span>
                </span>
              </li>
            )
          })}
        </ul>
        <div className="hirepage-ctas">
          <a className="hirepage-btn-primary" href="/hire/dashboard/jobs">
            Get Started
            <ArrowRightIcon />
          </a>
          <a className="hirepage-btn-ghost" href="/hire/browse">Browse Freelancers</a>
        </div>
      </div>
      <div className="hirepage-why-image">
        <img src={`${HIRE_IMG_BASE}hire-landing-why.1x.webp`} alt="Why hire on Behance?" loading="lazy" />
      </div>
    </section>
  )
}

function OurFreelancers() {
  const [activeTab, setActiveTab] = useState(HIRE_TALENT_TABS[0])
  return (
    <section className="hirepage-section hirepage-freelancers">
      <div className="hirepage-center-head">
        <h2 className="hirepage-section-title">Our Freelancers</h2>
        <p className="hirepage-section-sub">Hire top freelancers hand-selected by the Behance team.</p>
      </div>
      <div className="hirepage-talent-tabs">
        {HIRE_TALENT_TABS.map((tab) => (
          <button
            key={tab}
            className={`hirepage-talent-tab ${tab === activeTab ? 'hirepage-talent-tab-active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="hirepage-ctas">
        <a className="hirepage-btn-primary" href="/hire/dashboard/jobs">
          Get Started
          <ArrowRightIcon />
        </a>
        <a className="hirepage-btn-ghost" href="/hire/browse">Browse Freelancers</a>
      </div>
    </section>
  )
}

const STEP_ICONS = [ListSearchIcon, ChatIcon, ShieldCheckIcon]

function HowItWorks() {
  return (
    <section className="hirepage-section hirepage-how">
      <div className="hirepage-how-head">
        <h2 className="hirepage-section-title">Hiring on Behance<br />is easy &amp; secure.</h2>
      </div>
      <div className="hirepage-how-body">
        <ol className="hirepage-steps">
          {HIRE_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i]
            return (
              <li className="hirepage-step" key={step.title}>
                <span className="hirepage-step-icon">{Icon && <Icon />}</span>
                <span className="hirepage-step-num">{i + 1}</span>
                <span className="hirepage-step-body">
                  <span className="hirepage-step-title">{step.title}</span>
                  <span className="hirepage-step-text">{step.text}</span>
                </span>
              </li>
            )
          })}
        </ol>
        <div className="hirepage-how-visual">
          <img className="hirepage-how-arrow" src={`${HIRE_IMG_BASE}arrow.webp`} alt="Next" loading="lazy" />
          <img className="hirepage-how-image" src={`${HIRE_IMG_BASE}hire-landing-how-1.1x.webp`} alt="Review recommendations" loading="lazy" />
        </div>
        <div className="hirepage-ctas">
          <a className="hirepage-btn-primary" href="/hire/dashboard/jobs">
            Get Started
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ item }) {
  return (
    <figure className="hirepage-testimonial">
      <blockquote className="hirepage-testimonial-quote">&ldquo;{item.quote}&rdquo;</blockquote>
      <figcaption className="hirepage-testimonial-author">
        <a href={item.url} target="_blank" rel="noreferrer">
          <img className="hirepage-testimonial-avatar" src={item.img} alt={`${item.name}'s profile`} loading="lazy" />
        </a>
        <span className="hirepage-testimonial-name">{item.name}</span>
      </figcaption>
    </figure>
  )
}

function SuccessStories() {
  return (
    <section className="hirepage-section hirepage-stories">
      <div className="hirepage-center-head">
        <h2 className="hirepage-section-title">See what clients are saying.</h2>
        <p className="hirepage-section-sub">
          Learn firsthand why 98% of clients recommend their Behance freelancer.
        </p>
      </div>
      <div className="hirepage-testimonials">
        {TESTIMONIALS.map((item) => (
          <TestimonialCard item={item} key={item.name} />
        ))}
      </div>
      <div className="hirepage-ctas">
        <a className="hirepage-btn-primary" href="/hire/dashboard/jobs">
          Get Started
          <ArrowRightIcon />
        </a>
        <a className="hirepage-btn-ghost" href="/hire/browse">Browse Freelancers</a>
      </div>
    </section>
  )
}

function SourcingCTA() {
  return (
    <section className="hirepage-section hirepage-sourcing">
      <h2 className="hirepage-sourcing-title">Sourcing for your company?</h2>
      <p className="hirepage-sourcing-text">We&rsquo;ll help you find the perfect freelancer with hand-picked recommendations.</p>
      <a className="hirepage-sourcing-btn" href="mailto:hiring@behancenetwork.zendesk.com">Contact Us</a>
    </section>
  )
}

function HireConfidently() {
  return (
    <section className="hirepage-section hirepage-confident">
      <div className="hirepage-center-head">
        <h2 className="hirepage-confident-title">Hire confidently</h2>
        <p className="hirepage-confident-sub">Tap into the world&rsquo;s largest creative community.</p>
      </div>
      <div className="hirepage-stats">
        {HIRE_STATS.map((stat) => (
          <div className="hirepage-stat" key={stat.value}>
            <span className="hirepage-stat-value">{stat.value}</span>
            <span className="hirepage-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="hirepage-ctas">
        <a className="hirepage-btn-primary" href="/hire/dashboard/jobs">
          Get Started
          <ArrowRightIcon />
        </a>
        <a className="hirepage-btn-ghost" href="/hire/browse">Browse Freelancers</a>
      </div>
    </section>
  )
}

function FooterLinks() {
  return (
    <section className="hirepage-footer-links">
      {HIRE_FOOTER_GROUPS.map((group) => (
        <div className="hirepage-footer-group" key={group.title}>
          <h3 className="hirepage-footer-group-title">{group.title}</h3>
          <ul className="hirepage-footer-group-list">
            {group.links.map((link) => (
              <li key={link.label}>
                <a className="hirepage-footer-link" href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="hirepage-footer-bottom-row">
        <p className="hirepage-footer-hint">
          Looking for more designers to hire? Search all available full-time and freelance designers now
          <a className="hirepage-footer-cta" href="/hire/browse">Start searching now</a>
        </p>
        <p className="hirepage-footer-hint">
          Hiring? We&rsquo;ll help you find a freelancer: get matched with hand-picked recommendations.
          <a className="hirepage-footer-cta" href="mailto:hiring@behancenetwork.zendesk.com">Contact us</a>
        </p>
      </div>
    </section>
  )
}

export default function HirePage() {
  return (
    <div className="page">
      <Navbar />
      <div className="hirepage-subnav-wrap">
        <nav className="hirepage-subnav" aria-label="Hire sections">
          <ul className="hirepage-subnav-list">
            {HIRE_SUBNAV.map((tab) => (
              <li key={tab.label}>
                <a className={`hirepage-subnav-link ${tab.active ? 'hirepage-subnav-link-active' : ''}`} href={tab.url}>
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <main className="hirepage-main">
        <section className="hirepage-hero">
          <h1 className="hirepage-hero-title">Hire The World&rsquo;s Best Freelancers on Behance</h1>
          <p className="hirepage-hero-sub">
            Skip the search. Get instant AI-powered matches.
            <a className="hirepage-ai-terms" href="https://www.adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html">Adobe Generative AI Terms</a>
          </p>
          <div className="hirepage-search">
            <div className="hirepage-search-label">I&rsquo;m looking for</div>
            <div className="hirepage-search-row">
              <SearchIcon />
              <input className="hirepage-search-input" placeholder="Graphic Designer, UI/UX, Illustrator..." aria-label="I'm looking for" />
              <button className="hirepage-create-btn">Create my project</button>
            </div>
          </div>
          <p className="hirepage-terms">
            By using Behance, you are agreeing to the Adobe
            <a href="https://www.adobe.com/go/terms">Terms of Use</a> and
            <a href="https://www.adobe.com/privacy.html">Privacy Policy</a>.
          </p>
        </section>
        <section className="hirepage-categories">
          {HIRE_CATEGORIES.map((category) => (
            <a className="hirepage-category" href={category.url} key={category.label}>
              <img className="hirepage-category-img" src={category.img} alt={category.label} loading="lazy" />
              <span className="hirepage-category-label">{category.label}</span>
              <span className="hirepage-category-plus">
                <PlusIcon />
              </span>
            </a>
          ))}
          <a className="hirepage-browse-all" href="/hire/browse">
            Browse All Categories
            <ArrowRightIcon />
          </a>
        </section>
        <WhyHire />
        <OurFreelancers />
        <HowItWorks />
        <SuccessStories />
        <SourcingCTA />
        <HireConfidently />
        <FooterLinks />
      </main>
      <div className="hirepage-upsell">
        <img
          className="hirepage-upsell-banner"
          src="https://a5.behance.net/b6de958fa60333a6b07e7b72087bb95f4bff2f22/img/footer/creator-pro-upsell-banner-border.webp"
          alt=""
          aria-hidden="true"
        />
        <p className="hirepage-upsell-text">
          Upgrade to Behance Pro today: Get advanced analytics, a custom portfolio website, and more features to grow your creative career.
        </p>
        <a className="hirepage-upsell-btn" href="#">Start your 7 day free trial</a>
      </div>
      <footer className="hirepage-footer">
        <div className="hirepage-footer-main">
          <div className="hirepage-footer-col">
            <span className="hirepage-footer-heading">Built For Creatives</span>
            <a className="hirepage-footer-col-link" href="#">Try Behance Pro</a>
            <a className="hirepage-footer-col-link" href="#">Find Inspiration</a>
            <a className="hirepage-footer-col-link" href="#">Get Hired</a>
            <a className="hirepage-footer-col-link" href="#">Sell Creative Assets</a>
            <a className="hirepage-footer-col-link" href="#">Sell Freelance Services</a>
          </div>
          <div className="hirepage-footer-col">
            <span className="hirepage-footer-heading">Find Talent</span>
            <a className="hirepage-footer-col-link" href="#">Post a Job</a>
            <a className="hirepage-footer-col-link" href="#">Graphic Designers</a>
            <a className="hirepage-footer-col-link" href="#">Photographers</a>
            <a className="hirepage-footer-col-link" href="#">Video Editors</a>
            <a className="hirepage-footer-col-link" href="#">Web Designers</a>
            <a className="hirepage-footer-col-link" href="#">Illustrators</a>
          </div>
          <div className="hirepage-footer-col">
            <span className="hirepage-footer-heading">Behance</span>
            <a className="hirepage-footer-col-link" href="#">About Behance</a>
            <a className="hirepage-footer-col-link" href="#">Adobe Portfolio</a>
            <a className="hirepage-footer-col-link" href="#">Download the App</a>
            <a className="hirepage-footer-col-link" href="#">Blog</a>
            <a className="hirepage-footer-col-link" href="#">Careers</a>
            <a className="hirepage-footer-col-link" href="#">Help Center</a>
            <a className="hirepage-footer-col-link" href="#">Contact Us</a>
            <a className="hirepage-footer-col-link" href="#">Popular Search Terms</a>
            <a className="hirepage-footer-col-link" href="#">Login</a>
          </div>
          <div className="hirepage-footer-col">
            <span className="hirepage-footer-heading">Social</span>
            <a className="hirepage-footer-col-link" href="#">Instagram</a>
            <a className="hirepage-footer-col-link" href="#">Twitter</a>
            <a className="hirepage-footer-col-link" href="#">Pinterest</a>
            <a className="hirepage-footer-col-link" href="#">Facebook</a>
            <a className="hirepage-footer-col-link" href="#">LinkedIn</a>
          </div>
        </div>
        <div className="hirepage-footer-bottom">
          <span>© 2026 Adobe Inc. All rights reserved.</span>
          <span className="hirepage-footer-bottom-links">
            <a href="#">English</a>
            <a href="#">TOU</a>
            <a href="#">Privacy</a>
            <a href="#">Community</a>
          </span>
        </div>
      </footer>
    </div>
  )
}