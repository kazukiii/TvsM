import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Universe from './pages/Universe.tsx'
import TeddiesUniverse from './components/TeddiesUniverse/TeddiesUniverse.tsx'
import MonsterUniverse from './components/MonsterUniverse/MonsterUniverse.tsx'
import SignUp from './pages/SignUp.tsx'
import Login from './pages/Login.tsx'
import Profile from './pages/Profile.tsx'
const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/universe/teddies" element={<TeddiesUniverse />} />
        <Route path="/universe/monster" element={<MonsterUniverse />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
