import { FC } from 'react'
import Header from '../components/common/Header.tsx'
import Title from '../components/universe/Title.tsx'
import CharacterImage from '../components/universe/CharacterImage.tsx'
import Footer from '../components/common/Footer.tsx'

const CharacterDetailsWrapper: FC = () => {
  return (
    <>
      <Header />
      <Title />
      <div className="flex">
        <CharacterImage />
      </div>
      <Footer />
    </>
  )
}

export default CharacterDetailsWrapper
