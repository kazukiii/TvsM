import { FC, useState } from 'react'
import Button from '../common/Button.tsx'

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
      <Button
        text="LEARN MORE"
        className="w-96 h-28 text-3xl py-5 px-10 absolute bottom-5 left-1/2 transform -translate-x-1/2"
      />
    </div>
  )
}

export default SwampMonster
