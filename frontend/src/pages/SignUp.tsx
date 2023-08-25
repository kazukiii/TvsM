import { FC } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Button from '../components/common/Button'
import { useNavigate } from 'react-router-dom'

const SignUp: FC = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header />
            <div className='lg:py-[135px] py-[90px] px-[20px]'>
                <div className='max-w-[710px] mx-auto w-full'>
                    <h3 className='font-ldr-kaet lg:text-[68px] sm:text-[45px] text-[25px] text-center'>Welcome to TvsM!</h3>
                    <div className='mt-[20px] flex lg:gap-[40px] gap-5 flex-col'>
                        <div>
                            <input type="email" placeholder='Enter your Email' className='w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]' />
                        </div>
                        <div>
                            <input type="email" placeholder='Re-enter your Email' className='w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]' />
                        </div>
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
                            <div>
                                <input type="password" placeholder='Enter Password' className='w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]' />
                            </div>
                            <div>
                                <input type="password" placeholder='Re-enter Password' className='w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]' />
                            </div>
                        </div>
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
                            <div>
                                <input type="text" placeholder='First Name' className='w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]' />
                            </div>
                            <div>
                                <input type="text" placeholder='Last Name' className='w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]' />
                            </div>
                        </div>
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
                            <Button className='border-tvsm-orange lg:text-[32px] text-[20px] w-full lg:h-[100px] h-[50px]' text='SIGN UP' />
                            <Button className='border-tvsm-orange lg:text-[32px] text-[20px] w-full lg:h-[100px] h-[50px]' text='CONTINUE AS GUEST' />
                        </div>
                    </div>
                    <div className='flex justify-center mt-[20px]'>
                        <button className='text-[#00A0E4] font-ldr-kaet sm:text-[25px] text-[18px]' onClick={() => navigate('/login')}>Already registered? Sign in</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp