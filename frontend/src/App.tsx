import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Universe from './pages/Universe.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import FaqsPage from './pages/FaqsPage.tsx'
import CharacterDetailsWrapper from './pages/CharacterDetailsWrapper.tsx'
import TrackYourOrder from './pages/TrackYourOrder.tsx'
import Profile from './pages/Profile.tsx'
import Games from './pages/Games.tsx'
import Admin from './pages/Admin.tsx'
import Shop from './pages/Shop.tsx'
import ItemDetail from './pages/ItemDetail.tsx'

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/universe/teddies" element={<CharacterDetailsWrapper character={'TEDDIES'} />} />
        <Route path="/universe/monsters" element={<CharacterDetailsWrapper character={'MONSTERS'} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/track-your-order" element={<TrackYourOrder />} />
        <Route path="/games" element={<Games />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/item/:id" element={<ItemDetail />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  )
}

export default App
