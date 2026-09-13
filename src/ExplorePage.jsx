import { useState } from 'react'
import Navbar from './Navbar.jsx'
import { PROJECTS } from './data.js'
import profilePic from './assets/naaz03.jpeg'

const CATEGORIES = [
  { label: 'For You', active: true },
  { label: 'Following' },
  { label: 'Best of Behance' },
  { label: 'Graphic Design' },
  { label: 'Photography' },
  { label: 'Illustration' },
  { label: '3D Art' },
  { label: 'UI/UX' },
  { label: 'Motion' },
  { label: 'Architecture' },
  { label: 'Product Design' },
  { label: 'Fashion' },
  { label: 'Advertising' },
  { label: 'Fine Arts' },
  { label: 'Crafts' },
  { label: 'Game Design' },
  { label: 'Sound' },
  { label: 'Photoshop' },
  { label: 'Lightroom' },
  { label: 'Illustrator' },
  { label: 'InDesign' },
  { label: 'Premiere Pro' },
  { label: 'After Effects' },
  { label: 'Stock' },
]

const SORT_OPTIONS = [
  'Recommended',
  'Curated',
  'Most Appreciated',
  'Most Viewed',
  'Most Discussed',
  'Most Recent',
]

const PROJECT_TYPES = ['Projects', 'People', 'Assets', 'Images']

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 7h16M7 12h10M10 17h4" strokeLinecap="round" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  )
}

function CategoryIcon({ name }) {
  const common = { width: 16, height: 16, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7 }
  switch (name) {
    case 'Following':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 21s-7-4.5-9.3-9A5.6 5.6 0 0112 6.3 5.6 5.6 0 0121.3 12C19 16.5 12 21 12 21z" strokeLinejoin="round" />
        </svg>
      )
    case 'Best of Behance':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7 4.5l-1.8 3.6-4 .5 2.9 2.8-.7 4 3.6-1.9 3.6 1.9-.7-4L13 8.6l-4-.5z" strokeLinejoin="round" />
          <path d="M18 4v8M14 8l8 8" strokeLinecap="round" />
        </svg>
      )
    case 'Photography':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 8h2.5l2-3h7l2 3H20" strokeLinejoin="round" />
          <circle cx="12" cy="13" r="4" />
          <rect x="3" y="7" width="18" height="12" rx="2" />
        </svg>
      )
    case 'Illustration':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M9 3h6M10 3l4 8 4-8 1.5 8M4 21l6-9 2-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case '3D Art':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="9" cy="9" r="2.5" />
          <path d="M15 12l-2.5 4.5L11 13l-3.5 4.5M15 16.5h3" strokeLinejoin="round" />
        </svg>
      )
    case 'UI/UX':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M7 6.5h.01M10 6.5h.01" strokeLinecap="round" />
        </svg>
      )
    case 'Motion':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          <path d="M9 9.5v9" strokeLinecap="round" />
        </svg>
      )
    case 'Architecture':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-4a1 1 0 011-1h4a1 1 0 011 1v4" strokeLinejoin="round" />
        </svg>
      )
    case 'Sound':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M5 10v4M8.5 7v10M12 4v16M15.5 8v8M19 11v2" strokeLinecap="round" />
        </svg>
      )
    case 'For You':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3l1.8 5.4 5.7.4-4.4 3.7 1.4 5.5-4.5-3.2-4.5 3.2 1.4-5.5L4.5 8.8l5.7-.4z" strokeLinejoin="round" />
        </svg>
      )
    default:
      return null
  }
}

function SortCaret() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ExploreCard({ project }) {
  return (
    <a className="explore-card" href={project.url} target="_blank" rel="noreferrer">
      <div className="explore-cover">
        <img src={project.img} alt={project.title} loading="lazy" />
        <div className="explore-cover-overlay">
          <span className="explore-overlay-stats">
            <span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-7.5-4.7-9.4-9.2C1.1 8.3 3 5 6.3 5c2 0 3.4 1.1 4.2 2.6h3c.8-1.5 2.2-2.6 4.2-2.6 3.3 0 5.2 3.3 3.7 6.8C19.5 16.3 12 21 12 21z" />
              </svg>
              {project.appreciations}
            </span>
            <span>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              {project.views}
            </span>
          </span>
        </div>
      </div>
      <div className="explore-card-body">
        <span className="explore-card-title">{project.title}</span>
        <span className="explore-card-owner">
          <img className="explore-owner-avatar" src={profilePic} alt="Saifynaz" />
          Saifynaz
          <span className="pro-badge">Pro</span>
        </span>
        <span className="explore-card-stats">
          <span className="stat">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
              <path d="M12 21s-7.5-4.7-9.4-9.2C1.1 8.3 3 5 6.3 5c2 0 3.4 1.1 4.2 2.6h3c.8-1.5 2.2-2.6 4.2-2.6 3.3 0 5.2 3.3 3.7 6.8C19.5 16.3 12 21 12 21z" />
            </svg>
            {project.appreciations}
          </span>
          <span className="stat">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {project.views}
          </span>
          <button className="explore-save-btn" aria-label={`Save ${project.title}`}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M6 3h12v18l-6-4.5L6 21z" strokeLinejoin="round" />
            </svg>
          </button>
        </span>
      </div>
    </a>
  )
}

export default function ExplorePage() {
  const [activeType, setActiveType] = useState(PROJECT_TYPES[0])
  const [sortOpen, setSortOpen] = useState(false)
  const [sortLabel] = useState(SORT_OPTIONS[0])

  return (
    <div className="page">
      <Navbar />
      <div className="explore-header">
        <div className="explore-search-row">
          <button className="explore-filter-btn">
            <FilterIcon />
            Filter
          </button>
          <div className="explore-searchbar">
            <div className="explore-searchbar-main">
              <SearchIcon />
              <span className="explore-search-placeholder">Search Projects...</span>
              <button className="btn-search-image" aria-label="Search by image">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <circle cx="9" cy="10" r="1.6" />
                  <path d="M3 17l5-4 4 3 4-4 5 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="explore-type-tabs">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  className={`explore-type-tab ${type === activeType ? 'explore-type-tab-active' : ''}`}
                  onClick={() => setActiveType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="explore-sort-wrap">
            <button className="explore-sort-btn" onClick={() => setSortOpen((v) => !v)}>
              {sortLabel}
              <SortCaret />
            </button>
            {sortOpen && (
              <div className="explore-sort-dropdown">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option}
                    className={`explore-sort-option ${option === sortLabel ? 'explore-sort-option-selected' : ''}`}
                  >
                    {option}
                    {option === sortLabel && (
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <nav className="explore-categories" aria-label="Explore categories">
          <ul className="explore-categories-list">
            {CATEGORIES.map((category) => (
              <li className="explore-category-item" key={category.label}>
                <a className={`explore-category-pill ${category.active ? 'explore-category-pill-active' : ''}`} href="#">
                  <CategoryIcon name={category.label} />
                  {category.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <main className="explore-main">
        <p className="explore-results-count">
          <span>10,000+ Results</span> <span className="explore-results-term">for {activeType}</span>
        </p>
        <div className="explore-grid">
          {PROJECTS.map((project) => (
            <ExploreCard project={project} key={project.title} />
          ))}
        </div>
        <div className="explore-login-gate">
          <p>Log in or sign up to view more projects</p>
          <a className="explore-next-btn" href="#">
            Next
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
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