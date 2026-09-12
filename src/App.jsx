import './App.css'
import profilePic from './assets/naaz03.jpeg'

const NAV_LINKS = [
  { label: 'Explore', url: '/?tracking_source=nav20' },
  { label: 'Jobs', url: '/joblist?tracking_source=nav20' },
  { label: 'Resources', url: '/resources/commissions?tracking_source=nav20' },
  { label: 'Hire', url: '/hire?tracking_source=nav20' },
]

const STATS = [
  { label: 'Project Views', value: '1,763', url: '/saifynaz/analytics' },
  { label: 'Appreciations', value: '331', url: '/saifynaz/analytics' },
  { label: 'Followers', value: '21', url: '/saifynaz/followers' },
  { label: 'Following', value: '9', url: '/saifynaz/following' },
]

const TABS = [
  { label: 'Info', url: '/saifynaz/info' },
  { label: 'Work', url: '/saifynaz/projects', active: true },
  { label: 'Services', url: '/saifynaz/services' },
  { label: 'Moodboards', url: '/saifynaz/moodboards' },
  { label: 'Appreciations', url: '/saifynaz/appreciated' },
]

const PROJECTS = [
  {
    title: 'Wedding Travel & Hospitality — Website UI/UX Design',
    url: 'https://www.behance.net/gallery/255384245/Wedding-Travel-Hospitality-Website-UIUX-Design',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/c24aae255384245.Y3JvcCwxMzE4LDEwMzEsNTIsMA.png',
    appreciations: 5,
    views: 11,
  },
  {
    title: 'What I Cook — Graphic Design',
    url: 'https://www.behance.net/gallery/255243149/What-I-Cook-Graphic-Design',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/88cef4255243149.Y3JvcCwxMzE4LDEwMzEsMjksMA.png',
    appreciations: 6,
    views: 12,
  },
  {
    title: 'White-Label Hotel & Flight Voucher Design',
    url: 'https://www.behance.net/gallery/254116933/White-Label-Hotel-Flight-Voucher-Design',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/f25276254116933.Y3JvcCw3NTUwLDU5MDYsNTYwLDA.png',
    appreciations: 6,
    views: 32,
  },
  {
    title: '87 People. 87 Personalities. 87 Sketches.',
    url: 'https://www.behance.net/gallery/254055901/87-People-87-Personalities-87-Sketches',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/f66121254055901.Y3JvcCw3NTUwLDU5MDYsMjE2OCww.png',
    appreciations: 4,
    views: 26,
  },
  {
    title: 'UX Case Study: KalakaarHub – A Handmade Art & Craft App',
    url: 'https://www.behance.net/gallery/230294621/UX-Case-Study-KalakaarHub-A-Handmade-Art-Craft-App',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/285524230294621.Y3JvcCwxNjkyLDEzMjQsOCww.png',
    appreciations: 10,
    views: 118,
  },
  {
    title: 'Voice To Note Redesign Case Study',
    url: 'https://www.behance.net/gallery/235068659/Voice-To-Note-Redesign-Case-Study',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/a261ff235068659.Y3JvcCwzMzg1LDI2NDgsMTYsMA.png',
    appreciations: 10,
    views: 59,
  },
  {
    title: 'Interactive Food Delivery App Redesign',
    url: 'https://www.behance.net/gallery/216876051/Interactive-Food-Delivery-App-Redesign',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/f916f2216876051.Y3JvcCwxMjEyLDk0OCwwLDA.png',
    appreciations: 11,
    views: 88,
  },
  {
    title: 'VR OTT platform inspired by YouTube',
    url: 'https://www.behance.net/gallery/207952307/VR-OTT-platform-inspired-by-YouTube',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/b61dbf207952307.Y3JvcCw1NDEwLDQyMzIsMzkyMyww.png',
    appreciations: 8,
    views: 110,
  },
  {
    title: 'Show Time: Movie Seat Booking App UI Design',
    url: 'https://www.behance.net/gallery/206078421/Show-Time-Movie-Seat-Booking-App-UI-Design',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/c15e27206078421.Y3JvcCw1NTc0LDQzNjAsMjIwNyww.png',
    appreciations: 15,
    views: 119,
  },
  {
    title: 'Animal coloring book A-Z',
    url: 'https://www.behance.net/gallery/232007255/Animal-coloring-book-A-Z',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/458d9c232007255.Y3JvcCwzMDExLDIzNTUsOTU0LDMxMw.png',
    appreciations: 7,
    views: 38,
  },
  {
    title: 'Graphics design post',
    url: 'https://www.behance.net/gallery/233574285/Graphics-design-post',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/6d53b6233574285.Y3JvcCwzMzc1LDI2MzksMCw0Njc.png',
    appreciations: 7,
    views: 20,
  },
  {
    title: 'Visual storytelling through poster design',
    url: 'https://www.behance.net/gallery/233782253/Visual-storytelling-through-poster-design',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/aea5e8233782253.Y3JvcCwzMzc1LDI2MzksMCwxNjc.png',
    appreciations: 7,
    views: 16,
  },
]

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a className="navbar-brand" href="/" aria-label="Navigate to behance.net">
          <span className="brand-b">Bē</span>
          <span className="brand-text">Behance</span>
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
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

function TabBar() {
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

function App() {
  return (
    <div className="page">
      <Navbar />
      <header className="banner">
        <img
          className="banner-img"
          src="https://mir-s3-cdn-cf.behance.net/9e459b6d8b47a5a2343e559cb6207b52/28d2fb4c-9643-4c92-b891-d4e661e2a3e7_rwc_747x-6x7200x1281x8750.png"
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

export default App