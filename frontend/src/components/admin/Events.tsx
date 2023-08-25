import { FC, useState } from 'react'
import logoEvent from '../../assets/logo-event.png'
import eventLocation from '../../assets/event-location.png'

const Events: FC = () => {
  const [formData, setFormData] = useState({
    date: 'May 28, 2023',
    address: 'RAINCITY GAMES',
    time: '10:30 AM',
    title: 'TOURNAMENT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };


  return (
  <div className='px-24 gap-24 flex justify-between'>
    <div className='w-1/2 flex flex-col border-4 rounded-3xl border-tvsm-orange bg-tvsm-white'>
      <div className='p-5 gap-5 flex items-center'>
        <img src={logoEvent} alt="logo-event" className='w-1/2'/>
        <p className='w-1/2 font-ldr-kaet text-4xl text-center'>{formData.date}</p>
      </div>
      <div className='p-10 gap-2 flex flex-col items-end bg-ghost-event-card bg-cover bg-center'>
        <p className='font-ldr-kaet text-4xl text-end'>{formData.address}</p>
        <p className='font-ldr-kaet text-3xl text-end'>{formData.time}</p>
      </div>
      <div className='p-10 gap-5 flex flex-col items-center'>
        <p className='font-ldr-kaet text-4xl text-center'>{formData.title}</p>
        <p className='font-mulish text-xl text-center'>{formData.description}</p>
      </div>
      <div className='h-96 w-full'>
        <img src={eventLocation} alt="event-location" className='object-cover w-full h-full'/>
      </div>
    </div>
    <div className='flex flex-col w-1/2 gap-10 items-start'>
      <input name='date' value={formData.date} onChange={handleChange} placeholder='Date' className='p-2 text-center border-4 rounded-xl border-tvsm-orange bg-tvsm-white'/>
      <input name='address' value={formData.address} onChange={handleChange} placeholder='Address' className='p-2 text-center border-4 rounded-xl border-tvsm-orange bg-tvsm-white'/>
      <input name='time' value={formData.time} onChange={handleChange} placeholder='Time' className='p-2 text-center border-4 rounded-xl border-tvsm-orange bg-tvsm-white'/>
      <div className='flex flex-col gap-2'>
        <input name='title' value={formData.title} onChange={handleChange} placeholder='Title'className='w-1/2 p-2 text-center border-4 rounded-xl border-tvsm-orange bg-tvsm-white'/>
        <textarea name='description' value={formData.description} onChange={handleChange} placeholder='Description' rows={5} cols={50} className='p-2 border-4 rounded-xl border-tvsm-orange bg-tvsm-white'/>
      </div>
      <p className='p-2 px-12 border-4 rounded-xl border-tvsm-orange bg-tvsm-white text-center'>Image</p>
      <button className='p-2 px-10 rounded-lg bg-tvsm-orange text-tvsm-white border-tvsm-white'>SUBMIT</button>
    </div>
  </div>
  )
}

export default Events
