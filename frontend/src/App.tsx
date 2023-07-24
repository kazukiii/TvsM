import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Universe from './pages/Universe.tsx'
import TrackYourOrder from './pages/TrackYourOrder.tsx'
const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universe" element={<Universe />} />
        <Route path='/track-your-order' element={<TrackYourOrder />} />
      </Routes>
    </Router>
  )
}

export default App
