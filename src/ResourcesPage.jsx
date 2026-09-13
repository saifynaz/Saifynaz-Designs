import { useState } from 'react'
import Navbar from './Navbar.jsx'

const RESOURCE_TABS = [
  { label: 'Overview', url: '/resources' },
  { label: 'Career Guides', url: '/resources/guides' },
  { label: 'Commissioned Projects', url: '/resources/commissions', active: true },
  { label: 'Creative Apprenticeship', url: '/resources/apprenticeship' },
]

const CATEGORIES = [
  'All',
  'Graphic Design',
  'Drawing & Illustration',
  'Photography & Editing',
  'Video & Editing',
]

const BRIEFS = [
  {
    title: 'Photoshop (Beta) Splash Screen',
    category: 'Graphic Design',
    budget: '2,000',
    timeline: 'Within the next few weeks',
    endsIn: 79,
    owner: 'Creative Apprentice',
    ownerInit: 'CA',
    ownerColor: '#6366f1',
    verified: true,
    description:
      "We're inviting talented creatives to design a splash screen for the next Photoshop (Beta) release. The artwork should reflect innovation, creativity, and the transformative power of digital design tools while showcasing Adobe's forward-thinking ethos.",
  },
  {
    title: 'Event Photography | San Diego, CA',
    category: 'Photography & Editing',
    budget: '2,000',
    timeline: 'Over a month',
    endsIn: 23,
    owner: 'Adobe University Talent',
    ownerInit: 'AU',
    ownerColor: '#e11d48',
    verified: true,
    description:
      "Adobe is seeking a talented photographer to capture high-quality event coverage at an upcoming gathering in San Diego. The ideal candidate will have experience with editorial and documentary event photography, strong composition skills, and the ability to tell compelling visual stories.",
  },
  {
    title: 'Sticker + Sticker Sheet Design (Using Adobe Firefly)',
    category: 'Graphic Design',
    budget: '500',
    timeline: 'In a month',
    endsIn: 18,
    owner: 'Creative Apprentice',
    ownerInit: 'CA',
    ownerColor: '#6366f1',
    verified: true,
    description:
      'Design a cohesive sticker sheet featuring fun, vibrant illustrations that work both individually and as a set. You are encouraged to leverage Adobe Firefly as part of your creative process, while ensuring the final designs reflect a distinctive artistic vision.',
  },
  {
    title: 'CSU - Firefly Boards',
    category: 'Graphic Design',
    budget: '1,000',
    timeline: 'In a month',
    endsIn: 13,
    owner: 'Creative Apprentice',
    ownerInit: 'CA',
    ownerColor: '#6366f1',
    verified: true,
    description:
      'Create a visually compelling set of Firefly Boards (digital mood boards) for Adobe\'s educational initiative. The boards should blend AI-generated imagery with original design work to produce a cohesive, inspiring visual presentation that supports Adobe Firefly\'s mission.',
  },
  {
    title: 'Keyring Design (Using Adobe Firefly)',
    category: 'Graphic Design',
    budget: '750',
    timeline: 'In a month',
    endsIn: 11,
    owner: 'Creative Apprentice',
    ownerInit: 'CA',
    ownerColor: '#6366f1',
    verified: true,
    description:
      "Design a unique keyring featuring artwork enhanced with Adobe Firefly. The final design should be visually appealing at a small scale, considering both front and back faces of the keyring, and should be suitable for physical production.",
  },
  {
    title: 'Slide Design | Create a Slide Template Using Adobe Express!',
    category: 'Graphic Design',
    budget: '1,250',
    timeline: 'In a month',
    endsIn: 9,
    owner: 'Creative Apprentice',
    ownerInit: 'CA',
    ownerColor: '#6366f1',
    verified: true,
    description:
      'We are looking for a designer to create a modern, versatile slide presentation template using Adobe Express. The template should be clean, visually engaging, and easy to customize for a variety of professional use cases including internal presentations and marketing decks.',
  },
  {
    title: 'Toolkit Refresh | Social + Print Graphics',
    category: 'Graphic Design',
    budget: '1,000',
    timeline: 'In a month',
    endsIn: 9,
    owner: 'Creative Apprentice',
    ownerInit: 'CA',
    ownerColor: '#6366f1',
    verified: true,
    description:
      'Refresh the visual toolkit for an Adobe team by producing a suite of social media graphics and print-ready assets. Deliverables include Instagram story templates, Facebook covers, A4 print flyers, and branded social post layouts in consistent brand colors.',
  },
  {
    title: 'Notebook Cover Design (Using Adobe Firefly)',
    category: 'Graphic Design',
    budget: '1,000',
    timeline: 'In a month',
    endsIn: 4,
    owner: 'Creative Apprentice',
    ownerInit: 'CA',
    ownerColor: '#6366f1',
    verified: true,
    description:
      'Design an eye-catching notebook cover for an Adobe promotional item. Use Adobe Firefly as part of your workflow to generate or enhance visual elements, creating a final piece that feels both modern and uniquely artistic.',
  },
  {
    title: 'Event Photography | Pittsburgh, PA',
    category: 'Photography & Editing',
    budget: '1,500',
    timeline: 'In a month',
    endsIn: 3,
    owner: 'Adobe University Talent',
    ownerInit: 'AU',
    ownerColor: '#e11d48',
    verified: true,
    description:
      'Capture compelling event coverage in Pittsburgh, PA for Adobe. The ideal photographer has strong documentary and editorial skills, can work in variable lighting, and delivers polished, story-driven imagery with professional post-production editing.',
  },
]

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0057ff" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M12 2l2.4 3.2 4-.5 2.3 2.4-.4 4 2.2 2.3L22 16.4l-.7 3.6-3.8 1.2-1.3 3.4h-4.3L8 22.2l-3.8-1.2L3.5 17.4l2.2-2.3-.4-4 2.3-2.4 4 .5z" fill="#0057ff" />
      <path d="M8.5 12l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BlockCard() {
  return (
    <div className="resources-block-card">
      <div className="resources-block-icon">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#0057ff" strokeWidth="1.6" aria-hidden="true">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21v-1a6 6 0 0112 0v1" strokeLinecap="round" />
        </svg>
      </div>
      <h3 className="resources-block-title">Check Your Eligibility</h3>
      <p className="resources-block-desc">
        Please log in to check your eligibility. Currently, commissions are only available in the United States, Canada and United Kingdom for now.
      </p>
      <button className="resources-block-btn">Sign In</button>
    </div>
  )
}

function BriefCard({ brief }) {
  return (
    <a className="resources-brief-card" href="#" role="button" aria-label={brief.title}>
      <div className="resources-brief-header">
        <span className="resources-badge">{brief.category}</span>
        <span className="resources-ends">Ends in {brief.endsIn} days</span>
      </div>
      <div className="resources-brief-title-row">
        <h3 className="resources-brief-title">{brief.title}</h3>
        <span className="resources-budget">US$ {brief.budget}</span>
      </div>
      <span className="resources-timeline">
        <ClockIcon />
        {brief.timeline}
      </span>
      <p className="resources-brief-desc">{brief.description}</p>
      <div className="resources-brief-footer">
        <div className="resources-owner">
          <span className="resources-avatar" style={{ background: brief.ownerColor }}>
            {brief.ownerInit}
          </span>
          <span className="resources-owner-name">{brief.owner}</span>
          {brief.verified && <VerifiedIcon />}
        </div>
        <span className="resources-view-btn">View Job</span>
      </div>
    </a>
  )
}

export default function ResourcesPage() {
  const [activeCat, setActiveCat] = useState('All')
  const filtered = activeCat === 'All' ? BRIEFS : BRIEFS.filter((b) => b.category === activeCat)

  return (
    <div className="page">
      <Navbar />
      <div className="resources-subnav-wrap">
        <nav className="resources-subnav" aria-label="Resource sections">
          <ul className="resources-subnav-list">
            {RESOURCE_TABS.map((tab) => (
              <li key={tab.label}>
                <a className={`resources-subnav-pill ${tab.active ? 'resources-subnav-pill-active' : ''}`} href={tab.url}>
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <main className="resources-main">
        <div className="resources-hero">
          <div className="resources-hero-content">
            <p className="resources-kicker">Adobe Commissioned Projects</p>
            <h1 className="resources-title">Kickstart your career with Adobe as your first client</h1>
            <p className="resources-desc">
              Get experience working on a real project with Adobe. Receive guidance and mentorship to help you succeed and take your next steps.
            </p>
            <ol className="resources-steps">
              <li className="resources-step">
                <span className="resources-step-num">1</span>
                <span className="resources-step-text">Present your best work on Behance</span>
              </li>
              <li className="resources-step">
                <span className="resources-step-num">2</span>
                <span className="resources-step-text">Apply for a commission</span>
              </li>
              <li className="resources-step">
                <span className="resources-step-num">3</span>
                <span className="resources-step-text">Work directly with Adobe</span>
              </li>
            </ol>
          </div>
          <div className="resources-hero-image">
            <img
              src="https://a5.behance.net/b6de958fa60333a6b07e7b72087bb95f4bff2f22/img/adobeprojects/commissioned_projects_header_1x.webp"
              alt="Commissioned Projects illustration"
              width="600"
              height="568"
            />
          </div>
        </div>
        <div className="resources-categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`resources-category-pill ${cat === activeCat ? 'resources-category-pill-active' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <h2 className="resources-section-title">New Commissioned Projects</h2>
        <div className="resources-grid">
          <BlockCard />
          {filtered.map((brief) => (
            <BriefCard brief={brief} key={brief.title} />
          ))}
        </div>
        <div className="resources-upsell">
          <p className="resources-upsell-text">
            Upgrade to Behance Pro today: Get advanced analytics, a custom portfolio website, and more features to grow your creative career.
          </p>
          <a className="resources-upsell-btn" href="#">Start your 7 day free trial</a>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-top">
          <button className="footer-pro">Try Behance Pro</button>
          <a href="#">TOU</a>
          <a href="#">Privacy</a>
          <a href="#">Community</a>
          <a href="#">Help</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Adobe Inc. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}