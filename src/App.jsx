import './App.css'
import './joblist-hire.css'
import { Routes, Route } from 'react-router-dom'
import ProfilePage from './ProfilePage.jsx'
import ExplorePage from './ExplorePage.jsx'
import ResourcesPage from './ResourcesPage.jsx'
import JoblistPage from './JoblistPage.jsx'
import HirePage from './HirePage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/resources/commissions" element={<ResourcesPage />} />
      <Route path="/resources/*" element={<ResourcesPage />} />
      <Route path="/joblist" element={<JoblistPage />} />
      <Route path="/hire" element={<HirePage />} />
    </Routes>
  )
}

export default App