import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Universe from './pages/Universe.tsx'
import RegisterPage from './pages/RegisterPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import FaqsPage from './pages/FaqsPage.tsx';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/faqs" element={<FaqsPage />} />

      </Routes>
    </Router>
  )
}

export default App
