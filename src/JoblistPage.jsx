import { useState } from 'react'
import Navbar from './Navbar.jsx'
import { JOBLIST_TABS, JOBLIST_DETAILS } from './data.js'

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  )
}

function SortCaret() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 21V5a1 1 0 011-1h8a1 1 0 011 1v16M13 21H2M9 8h2M9 12h2M9 16h2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 11l3-2v12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a1 1 0 011-1h4a1 1 0 011 1M9 10h6M9 14h6M9 18h4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="8" r="3" transform="translate(-2 4)" />
    </svg>
  )
}

function FullTimeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M9 3h6a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2zM12 6h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function JobCard({ job }) {
  return (
    <a className="joblist-card" href={job.url} target="_blank" rel="noreferrer">
      <div className="joblist-card-logo">
        {job.logo ? (
          <img src={job.logo} alt={`${job.company}'s logo`} className="joblist-card-logo-img" />
        ) : (
          <span className="joblist-card-building">
            <BuildingIcon />
          </span>
        )}
      </div>
      <div className="joblist-card-body">
        {job.company && <span className="joblist-card-company">{job.company}</span>}
        <h3 className="joblist-card-title">{job.title}</h3>
        <div className="joblist-card-sub">
          <span className="joblist-card-location">{job.location}</span>
          <span className="joblist-card-workmode">{job.workMode}</span>
        </div>
        <div className="joblist-card-meta">
          {job.type === 'Freelance' ? (
            <span className="joblist-card-type joblist-card-type-freelance">
              <ClipboardIcon />
              Freelance
            </span>
          ) : (
            <span className="joblist-card-type">
              <FullTimeIcon />
              Full-Time
            </span>
          )}
          {job.salary && <span className="joblist-card-salary">{job.salary}</span>}
        </div>
      </div>
      <span className="joblist-card-view">View</span>
    </a>
  )
}

export default function JoblistPage() {
  const [activeTab, setActiveTab] = useState('All Jobs')
  const [sortOpen, setSortOpen] = useState(false)

  return (
    <div className="page">
      <Navbar />
      <main className="joblist-main">
        <div className="joblist-header">
          <h1 className="joblist-title">Jobs</h1>
          <div className="joblist-controls">
            <nav className="joblist-tabs" aria-label="Job types">
              <ul className="joblist-tabs-list">
                {JOBLIST_TABS.map((tab) => (
                  <li key={tab.label}>
                    <a
                      className={`joblist-tab ${tab.label === activeTab ? 'joblist-tab-active' : ''}`}
                      href={tab.url}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveTab(tab.label)
                      }}
                    >
                      {tab.label}
                      {tab.label === 'Freelance' && <span className="joblist-pro-badge">Pro</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button className="joblist-new-btn">New Job</button>
          </div>
        </div>
        <div className="joblist-toolbar">
          <span className="joblist-count">927 jobs</span>
          <div className="joblist-search">
            <SearchIcon />
            <input className="joblist-search-input" placeholder="Search" aria-label="Search jobs" />
          </div>
          <div className="joblist-sort-wrap">
            <button className="joblist-sort-btn" onClick={() => setSortOpen((v) => !v)}>
              Sort
              <span className="joblist-sort-value">Best Match</span>
              <SortCaret />
            </button>
            {sortOpen && (
              <div className="joblist-sort-dropdown">
                {['Best Match', 'Newest', 'Most Relevant'].map((option) => (
                  <button key={option} className="joblist-sort-option">
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="joblist-list">
          {JOBLIST_DETAILS.map((job) => (
            <JobCard job={job} key={job.url} />
          ))}
        </div>
        <div className="joblist-pagination">
          <span className="joblist-page joblist-page-active">1</span>
          <a className="joblist-page" href="#">2</a>
          <a className="joblist-page" href="#">3</a>
        </div>
        <section className="joblist-promo">
          <h2 className="joblist-promo-title">Find your next creative job</h2>
          <p className="joblist-promo-text">New freelance and full-time jobs posted every day</p>
          <a className="joblist-promo-btn" href="#">Post a job</a>
        </section>
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