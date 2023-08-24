import { FC, useState } from 'react'
import Button from '../common/Button.tsx'
import { Link } from 'react-router-dom'

const SwampMonster: FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-no-repeat bg-cover bg-center w-full h-screen relative ${
        isHovered ? 'bg-swamp-monster-variant' : 'bg-swamp-monster-default'
      }`}
    >
      <Link to="/universe" className="text-tvsm-white text-2xl font-mulish">
        <Button
          text="LEARN MORE"
          className="w-96 h-28 text-3xl py-5 px-10 absolute bottom-5 left-1/2 transform -translate-x-1/2"
        />
      </Link>
    </div>
  )
}

export default SwampMonster
