import { FC, useState } from 'react'
import instagramIcon from '../../assets/icons/instagram.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import tiktokIcon from '../../assets/icons/tiktok.svg'
import discordIcon from '../../assets/icons/discord.svg'
import Button from '../common/Button.tsx'

const MainScreen: FC = () => {
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
        isHovered ? 'bg-main-screen-variant' : 'bg-main-screen-default'
      }`}
    >
      <div className="flex justify-end items-center p-10 gap-10">
        <img src={instagramIcon} alt="instagram" className="w-10 h-10" />
        <img src={twitterIcon} alt="twitter" className="w-10 h-10" />
        <img src={facebookIcon} alt="facebook" className="w-10 h-10" />
        <img src={tiktokIcon} alt="tiktok" className="w-10 h-10" />
        <img src={discordIcon} alt="discord" className="w-10 h-10" />
      </div>
      <Button
        text="SHOP NOW"
        className="w-96 h-28 text-3xl py-5 px-10 absolute bottom-5 left-1/2 transform -translate-x-1/2"
      />
    </div>
  )
}

export default MainScreen
