import { FC, useState } from 'react'
import Button from '../common/Button.tsx'
import { useNavigate } from 'react-router-dom'

const SwampMonster: FC = () => {
  const navigate = useNavigate()
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
        isHovered ? 'sm:bg-swamp-monster-variant' : 'sm:bg-swamp-monster-default'
      } bg-swamp-monster-variant`}
    >
      <Button
        text="LEARN MORE"
        className="sm:w-96 w-max sm:h-28 h-fit sm:text-3xl text-xl py-5 px-10 absolute bottom-5 left-1/2 transform -translate-x-1/2"
        onClick={() => navigate('/universe')}
      />
    </div>
  )
}

export default SwampMonster
