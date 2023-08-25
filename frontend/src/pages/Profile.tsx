import { FC } from 'react'
import Header from '../components/common/Header.tsx'
import Footer from '../components/common/Footer.tsx'
import { Link } from 'react-router-dom'

// Media Sources
import PlusIcon from '/public/+ 3.png'


const Profile : FC = () => {
    return (
        <>
            <Header />
            <div className="container p-10 pl-40">
                {/* Profile Heading */}
                <div className="profile-heading">
                    <h4 className="font-ldr-kaet text-4xl text-center">Welcome, Bruno</h4>
                    <div className="profile-sections inline-flex gap-6 mt-10">
                        <Link to=""><p className='text-gray-800 text-xl font-mulish not-italic font-normal underline underline-5 underline-offset-8 decoration-yellow-600 decoration-[0.15rem]'>Profile</p></Link>
                        <Link to=""><p className='text-gray-800 text-xl font-mulish not-italic font-normal'>Orders</p></Link>
                    </div>
                </div>
                {/* Profile Body */}
                <div className="profile-body mt-16">
                    <div className="personal-information w-100 inline-flex">
                        <div className="info-fields w-[50%]">

                            {/* Personal Information */}
                            <h3 className='font-ldr-kaet text-gray-800 text-xl not-italic font-normal mb-4'>Personal Information</h3>
                            <input type="text" className='w-[306px] h-[40px] flex-shrink-0 bg-[#F8F8E4] text-gray-800 text-xl not-italic font-normal pl-5 pr-5 py-5 focus:outline-0' style={{border: "1px solid #CE8C3D", borderRadius: "6px"}} />
                            <input type="text" className='w-[306px] h-[40px] flex-shrink-0 bg-[#F8F8E4] text-gray-800 text-xl not-italic font-normal pl-5 pr-5 py-5 focus:outline-0' style={{border: "1px solid #CE8C3D", borderRadius: "6px"}} />
                            <input type="text" className='w-[306px] h-[40px] flex-shrink-0 bg-[#F8F8E4] text-gray-800 text-xl not-italic font-normal pl-5 pr-5 py-5 focus:outline-0' style={{border: "1px solid #CE8C3D", borderRadius: "6px"}} />

                            {/* Addresses */}
                            <div className="inline-flex items-center w-full mt-16 gap-2">
                                <h3 className='font-ldr-kaet text-gray-800 text-xl not-italic font-normal mb-4'>Addresses</h3>
                                <img className='w-[20px] h-[20px] mb-4' src={PlusIcon} alt="" />
                            </div>
                            <div className='w-[406px] inline-flex flex-shrink-0 bg-[#F8F8E4] text-gray-800 text-xl not-italic font-normal p-3 py-2' style={{border: "1px solid #CE8C3D", borderRadius: "6px"}}>
                                <div className="list-of-addresses w-full">
                                    <div className="address w-full">
                                        <p className='w-[fit-content] bg-[#0CFF07] text-gray-800 text-[14px] not-italic font-normal rounded-[5px] pl-3 pr-3 py-1 leading-none font-mulish'>primary</p>
                                        <p className='text-gray-800 text-[16.5px] not-italic font-normal leading-none mt-2 pl-1'>Bruno Pelegrino de Castro</p>
                                        <p className='text-gray-800 text-[16.5px] not-italic font-normal leading-none mt-1 pl-1'>321 - 3890 Carrigan Ct</p>
                                        <p className='text-gray-800 text-[16.5px] not-italic font-normal leading-none mt-1 pl-1'>Burnaby, Canada, British Columbia</p>
                                        <p className='text-gray-800 text-[16.5px] not-italic font-normal leading-none mt-1 pl-1'>V3N 4J1</p>
                                    </div>
                                    
                                </div>
                                <Link to='' className=''><i className="fa-regular fa-pen-to-square"></i></Link>
                                
                            </div>

                            {/* Payment Methods */}
                            <div className="inline-flex items-center w-full mt-16 gap-2">
                                <h3 className='font-ldr-kaet text-gray-800 text-xl not-italic font-normal mb-4'>Payment Methods</h3>
                                <img className='w-[20px] h-[20px] mb-4' src={PlusIcon} alt="" />
                            </div>
                            <input type="text" placeholder='Name on card' className='w-[250px] h-[40px] text-center flex-shrink-0 bg-[#F8F8E4] text-gray-800 text-xl not-italic font-normal pl-5 pr-5 py-5 focus:outline-0' style={{border: "1px solid #CE8C3D", borderRadius: "6px"}} />
                            <input type="text" placeholder='Card Number' className='w-[250px] h-[40px] text-center flex-shrink-0 bg-[#F8F8E4] text-gray-800 text-xl not-italic font-normal pl-5 pr-5 py-5 focus:outline-0' style={{border: "1px solid #CE8C3D", borderRadius: "6px"}} />
                            <div className="w-full inline-flex">
                                <input type="text" placeholder='Exp. Date' className='w-[125px] h-[40px] flex-shrink-0 bg-[#F8F8E4] text-gray-800 text-xl not-italic font-normal pl-5 pr-5 py-5 focus:outline-0' style={{border: "1px solid #CE8C3D", borderRadius: "6px"}} />
                                <input type="text" placeholder='Exp. Date' className='w-[125px] h-[40px] flex-shrink-0 bg-[#F8F8E4] text-gray-800 text-xl not-italic font-normal pl-5 pr-5 py-5 focus:outline-0' style={{border: "1px solid #CE8C3D", borderRadius: "6px"}} />
                                
                            </div>
                            <button className='flex bg-[#CE8C3D] rounded-[8px] h-[fit-content] py-2 pl-7 pr-7 text-[#F8F8E4] text-center text-l not-italic font-bold leading-none font-mulish text-center' style={{border: "2px solid #F8F8E4"}}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile;