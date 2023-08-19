import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Universe from './pages/Universe.tsx'
import CharacterDetailsWrapper from './pages/CharacterDetailsWrapper.tsx'
const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/universe/teddies" element={<CharacterDetailsWrapper character={'TEDDIES'} />} />
        <Route path="/universe/monsters" element={<CharacterDetailsWrapper character={'MONSTERS'} />} />
      </Routes>
    </Router>
  )
}

export default App
