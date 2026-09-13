import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS, JOB_LISTINGS, HIRE_BENEFITS, HIRE_STEPS } from './data.js'

function JobRow({ job }) {
  return (
    <a className="job-row" href={job.url} target="_blank" rel="noreferrer">
      <span className="job-row-title">{job.title}</span>
      <span className="job-row-meta">
        <span className={`job-badge ${job.type === 'Freelance' ? 'job-badge-freelance' : ''}`}>
          {job.type}
        </span>
        <span className="job-company">{job.company}</span>
        <span className="job-location">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          {job.location}
        </span>
      </span>
    </a>
  )
}

function AdAdobeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="4" fill="currentColor" />
      <path
        d="M13.1 5.9h3.1v12.2h-2.5l-3.6-7v7h-2.4V5.9h2.8l3.6 7.2v-7.2z"
        fill="#191919"
      />
    </svg>
  )
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link className="navbar-brand" to="/" aria-label="Navigate to behance.net">
          <span className="brand-b">Bē</span>
          <span className="brand-text">Behance</span>
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-item-link ${isActive ? 'nav-item-link-active' : ''}`}
              to="/explore?tracking_source=nav20"
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `nav-item-link ${isActive ? 'nav-item-link-active' : ''}`}
              to="/resources/commissions?tracking_source=nav20"
            >
              {NAV_LINKS[1].label}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-item-link ${isActive ? 'nav-item-link-active' : ''}`}
              to="/joblist?tracking_source=nav20"
            >
              Jobs
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </NavLink>
            <div className="jobs-dropdown">
              <div className="jobs-dropdown-head">
                <span>Top jobs for you</span>
                <Link to="/joblist?tracking_source=nav20">View all jobs</Link>
              </div>
              <div className="jobs-dropdown-list">
                {JOB_LISTINGS.map((job) => (
                  <JobRow job={job} key={job.url} />
                ))}
              </div>
            </div>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-item-link ${isActive ? 'nav-item-link-active' : ''}`}
              to="/hire?tracking_source=nav20"
            >
              Hire
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </NavLink>
            <div className="jobs-dropdown hire-dropdown">
              <Link className="hire-hero" to="/hire?tracking_source=nav20">
                <span className="hire-hero-heading">Hire The World's Best Freelancers on Behance</span>
                <span className="hire-hero-sub">Skip the search. Get instant AI-powered matches.</span>
                <span className="hire-create-btn">Create my project</span>
              </Link>
              <div className="hire-section">
                <span className="hire-section-title">Why hire on Behance?</span>
                <div className="hire-benefit-list">
                  {HIRE_BENEFITS.map((benefit) => (
                    <div className="hire-benefit" key={benefit.title}>
                      <span className="hire-benefit-check">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="hire-benefit-body">
                        <span className="hire-benefit-title">{benefit.title}</span>
                        <span className="hire-benefit-text">{benefit.text}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hire-section">
                <span className="hire-section-title">How it works</span>
                <ol className="hire-steps">
                  {HIRE_STEPS.map((step, i) => (
                    <li className="hire-step" key={step.title}>
                      <span className="hire-step-num">{i + 1}</span>
                      <span className="hire-step-body">
                        <span className="hire-benefit-title">{step.title}</span>
                        <span className="hire-benefit-text">{step.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="hire-bottom">
                <a href="https://www.behance.net/hire">Browse Freelancers</a>
                <a href="mailto:hiring@behancenetwork.zendesk.com">Contact Us</a>
              </div>
            </div>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="nav-icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
          </button>
          <button className="nav-pro-btn">Try Pro for free</button>
          <button className="nav-signin">Sign In</button>
          <button className="nav-adobe" aria-label="Adobe">
            <AdAdobeIcon />
          </button>
        </div>
      </div>
    </nav>
  )
}