import { FC } from 'react'
import Button from '../common/Button'
import instagramIcon from '../../assets/icons/instagram.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import tiktokIcon from '../../assets/icons/tiktok.svg'
import discordIcon from '../../assets/icons/discord.svg'


const ContactForm: FC = () => {

    return (
        <div>
            <div className="flex justify-end items-center p-10 gap-10">
                <img src={instagramIcon} alt="instagram" className="w-10 h-10" />
                <img src={twitterIcon} alt="twitter" className="w-10 h-10" />
                <img src={facebookIcon} alt="facebook" className="w-10 h-10" />
                <img src={tiktokIcon} alt="tiktok" className="w-10 h-10" />
                <img src={discordIcon} alt="discord" className="w-10 h-10" />
            </div>
            <div className='flex flex-col items-center text-center gap-20 mb-20'>
                <h1 className="font-ldr-kaet text-4xl">CONTACT US</h1>
                <form className='flex flex-col gap-10'>
                    <div>
                    <h3 className="font-ldr-kaet text-xl"> SUBJECT </h3>
                    <input className='h-10 flex-shrink-0 w-[450px] bg-[#F8F8E4] rounded mt-2' style={{border: "1px solid #CE8C3D"}} />
                    </div>
                    <div>
                    <h3 className="font-ldr-kaet text-xl"> NAME </h3>
                    <input className='h-10 flex-shrink-0 w-[450px] bg-[#F8F8E4] rounded mt-2' style={{border: "1px solid #CE8C3D"}} />
                    </div>
                    <div>
                    <h3 className="font-ldr-kaet text-xl"> EMAIL </h3>
                    <input className='h-10 flex-shrink-0 w-[450px] bg-[#F8F8E4] rounded mt-2' style={{border: "1px solid #CE8C3D"}} />
                    </div>
                    <div>
                    <h3 className="font-ldr-kaet text-xl">ORDER NUMBER (IF APPLICABLE)</h3>
                    <input className='h-10 flex-shrink-0 w-[450px] bg-[#F8F8E4] rounded mt-2' style={{border: "1px solid #CE8C3D"}}/>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                    <h3 className="font-ldr-kaet text-xl"> MESSAGE </h3>
                    <textarea rows={10} className=' flex-shrink-0 w-[450px] bg-[#F8F8E4] rounded mt-2' style={{border: "1px solid #CE8C3D"}}/>
                    <Button
                        className='w-1/3 py-2'
                        text="SEND" 
                    />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
