import { FC } from 'react'
import Header from '../components/common/Header.tsx'
import Footer from '../components/common/Footer.tsx'
import instagramIcon from '../assets/icons/instagram.svg'
import twitterIcon from '../assets/icons/twitter.svg'
import facebookIcon from '../assets/icons/facebook.svg'
import tiktokIcon from '../assets/icons/tiktok.svg'
import discordIcon from '../assets/icons/discord.svg'

const Term: FC = () => {
    return (
      <div>
        <Header />
        <div className="flex justify-end items-center p-10 gap-10">
                <img src={instagramIcon} alt="instagram" className="w-10 h-10" />
                <img src={twitterIcon} alt="twitter" className="w-10 h-10" />
                <img src={facebookIcon} alt="facebook" className="w-10 h-10" />
                <img src={tiktokIcon} alt="tiktok" className="w-10 h-10" />
                <img src={discordIcon} alt="discord" className="w-10 h-10" />
        </div>
        <div className='flex flex-col items-center mb-20'>
            <h1 className="font-ldr-kaet text-4xl">TERMS OF USE</h1>
            <div className='h-screen w-5/6 bg-[#F8F8E4] rounded mt-2' style={{border: "1px solid #CE8C3D"}}></div>
        </div>
        <Footer />
      </div>
    )
  }
  
  export default Term