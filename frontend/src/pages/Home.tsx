import { FC, useEffect } from 'react'
import Header from '../components/common/Header.tsx'
import MainScreen from '../components/home/MainScreen.tsx'
import SwampMonster from '../components/home/SwampMonster.tsx'
import Footer from '../components/common/Footer.tsx'
import { useNavigate } from 'react-router-dom'

const Home: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/signup')
    }
  }, [navigate])

  return (
    <>
      <Header />
      <MainScreen />
      <SwampMonster />
      <Footer />
    </>
  )
}

export default Home
