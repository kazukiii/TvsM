import { FC } from 'react'
import Header from '../components/common/Header.tsx'
import MainScreen from '../components/home/MainScreen.tsx'
import SwampMonster from '../components/home/SwampMonster.tsx'
import Footer from '../components/common/Footer.tsx'

const Home: FC = () => {
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
