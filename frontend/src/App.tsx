import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Universe from './pages/Universe.tsx'
import Privacy from './pages/Privacy.tsx'
import Term from './pages/Term.tsx'
const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/termsofuse" element={<Term />} />
      </Routes>
    </Router>
  )
}

export default App
