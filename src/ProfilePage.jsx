import Navbar from './Navbar.jsx'
import { STATS, TABS, PROJECTS } from './data.js'
import profilePic from './assets/naaz03.jpeg'
import banner01 from './assets/banner01.png'

function ProfileHeader() {
  return (
    <section className="profile-grid">
      <img
        className="profile-avatar"
        src={profilePic}
        alt="Saifynaz's profile"
      />
      <div className="profile-info">
        <h1 className="profile-name">Saifynaz</h1>
        <a className="freelance-badge" href="#">
          <span className="status-dot" />
          Available for Freelance
        </a>
        <p className="profile-role">UX/UI &amp; Graphics designer</p>
        <a className="profile-location" href="https://www.behance.net/search/users?country=IN&city=New+Delhi">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          New Delhi, India
        </a>
      </div>
      <div className="profile-actions">
        <a className="btn-hire" href="#">
          Hire Saifynaz
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </a>
        <button className="btn-message">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 11.5a8.4 8.4 0 01-9 8.4 9 9 0 01-3.5-.7L3 21l1.8-5.5a8.4 8.4 0 1116.2-4z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Message
        </button>
        <button className="btn-follow">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
          Follow
        </button>
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        {STATS.map((stat) => (
          <a className="stat-item" href={stat.url} key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </a>
        ))}
        <div className="stat-note">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 16v-5M12 8h.01" strokeLinecap="round" />
          </svg>
          Creative Fields: UX Design, UI Design
        </div>
      </div>
    </section>
  )
}

function AboutCard() {
  return (
    <section className="card about-card">
      <div className="about-head">
        <h2 className="section-title">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
            <path d="M12 3v3M3 12h3M12 18v3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </h2>
        <a className="edit-link" href="#">Edit</a>
      </div>
      <div className="about-body">
        <h3>Saifynaz</h3>
        <p className="about-bio">
          Namaste! I'm Saifynaz, a passionate UX and Graphic Designer dedicated to
          transforming ideas into intuitive and impactful digital experiences, while also
          crafting visually stunning graphics with a keen eye for detail and a commitment
          to excellence, I excel at creating user-centered designs tha…
          <a href="#" className="read-more">Read More</a>
        </p>
        <p className="about-member">
          Member Since: <span>October 1, 2022</span>
        </p>
        <div className="about-links">
          <a className="linkedin-link" href="https://www.linkedin.com/in/saifynaz-2b6240251/">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23H.5V8zm7 0h3.8v2h.05c.53-1 1.84-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 1.96-2.9 3.98V23H7.5V8z" />
            </svg>
            LinkedIn
          </a>
          <a className="edit-link" href="#">Edit</a>
        </div>
      </div>
    </section>
  )
}

export function TabBar() {
  return (
    <nav className="tabs" aria-label="Profile sections">
      {TABS.map((tab) => (
        <a href={tab.url} className={`tab ${tab.active ? 'active' : ''}`} key={tab.label}>
          {tab.label}
        </a>
      ))}
    </nav>
  )
}

function ProjectCard({ project }) {
  return (
    <a className="project-card" href={project.url} target="_blank" rel="noreferrer">
      <div className="project-thumb">
        <img src={project.img} alt={project.title} loading="lazy" />
        <div className="project-hover">
          <span className="btn-view-project">View Project</span>
        </div>
      </div>
      <div className="project-meta">
        <span className="project-title">{project.title}</span>
        <span className="project-stats">
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
        </span>
      </div>
    </a>
  )
}

function WorkGrid() {
  return (
    <section className="work-section">
      <div className="work-grid">
        {PROJECTS.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
      <a className="pagination" href="https://www.behance.net/saifynaz?after=MTI=">
        Next page
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}

export default function ProfilePage() {
  return (
    <div className="page">
      <Navbar />
      <header className="banner">
        <img
          className="banner-img"
          src={banner01}
          alt="Saifynaz's profile banner"
        />
      </header>
      <main className="content">
        <ProfileHeader />
        <div className="hire-row">
          <a className="hire-box" href="#">
            Hire Saifynaz
            <span>
              Freelance Job
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
        <StatsBar />
        <AboutCard />
        <TabBar />
        <WorkGrid />
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