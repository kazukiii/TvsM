import { FC, useState } from 'react'

interface ButtonProps {
  text: string
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ text, onClick, className, disabled }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`border-2 lg:rounded-2xl rounded-md ${className ?? ''} ${
        isHovered
          ? 'bg-tvsm-white text-tvsm-orange border-tvsm-orange'
          : 'bg-tvsm-orange text-tvsm-white border-tvsm-white'
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
