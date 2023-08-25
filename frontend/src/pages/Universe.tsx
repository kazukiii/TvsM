import { FC } from 'react'
import Header from '../components/common/Header.tsx'
import Title from '../components/universe/Title.tsx'
import Teddies from '../components/universe/Teddies.tsx'
import Monsters from '../components/universe/Monsters.tsx'
import Footer from '../components/common/Footer.tsx'

const Universe: FC = () => {
  return (
    <>
      <Header />
      <Title />
      <div className="flex">
        <Teddies />
        <Monsters />
      </div>
      <Footer />
    </>
  )
}

export default Universe
