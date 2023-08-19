import { FC, useState } from 'react'
import Button from '../common/Button.tsx'
import { Link } from 'react-router-dom'

const Monsters: FC = () => {
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
      className={`h-[1000px] w-1/2 bg-no-repeat bg-cover bg-center relative ${
        isHovered ? 'bg-monsters-variant' : 'bg-monsters-default'
      }`}
    >
      <Link to="/universe/monsters" className="text-tvsm-white text-2xl font-mulish">
        <Button
          text="MONSTER"
          className="w-72 h-20 text-3xl py-5 px-10 font-ldr-kaet absolute bottom-5 left-1/2 transform -translate-x-1/2"
        />
      </Link>
    </div>
  )
}

export default Monsters


