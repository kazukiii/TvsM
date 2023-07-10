import { FC } from 'react'
import instagramIcon from '../../assets/icons/instagram.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import tiktokIcon from '../../assets/icons/tiktok.svg'
import discordIcon from '../../assets/icons/discord.svg'
import Button from './Button.tsx'

const Footer: FC = () => {
  return (
    <div className="bg-tvsm-black text-tvsm-white w-full h-96 flex justify-between items-center relative p-16">
      <div>
        <p className="text-2xl font-mulish">GET NOTIFY WHEN NEW GAMES ARRIVE!</p>
        <div className="mt-6">
          <input className="bg-tvsm-white text-tvsm-black px-4 py-2 w-96 h-14 mr-1.5" placeholder="Enter your email" />
          <Button text="SUBSCRIBE" className="w-44 h-14 border-2 border-tvsm-white rounded-xl" />
        </div>
        <div className="flex items-center gap-10 mt-6">
          <img src={instagramIcon} alt="instagram" className="w-10 h-10" />
          <img src={twitterIcon} alt="twitter" className="w-10 h-10" />
          <img src={facebookIcon} alt="facebook" className="w-10 h-10" />
          <img src={tiktokIcon} alt="tiktok" className="w-10 h-10" />
          <img src={discordIcon} alt="discord" className="w-10 h-10" />
        </div>
      </div>
      <div className="text-xl grid grid-rows-3 gap-x-20 gap-y-8 grid-flow-col">
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Game Rules</div>
        <div>FAQs</div>
        <div>Privacy Policy</div>
        <div>Terms of Use</div>
        <div>Track Order</div>
      </div>
      <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2">@ 2023 We make games</p>
    </div>
  )
}

export default Footer
