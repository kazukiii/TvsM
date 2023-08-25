import { FC } from 'react'
import EventCard from './EventCard'
import eventcard1 from '../../assets/eventcard-1.png'
import eventcard2 from '../../assets/eventcard-2.png'
import eventcard3 from '../../assets/eventcard-3.png'

const Events: FC = () => {
  return (
  <div className='my-10 flex flex-col items-center gap-8'>
    <h1 className="my-10 font-ldr-kaet text-5xl text-center">UPCOMING EVENTS</h1>
    <div className='w-[80%] md:w-[85%] flex gap-10 justify-center items-center'>
      {/* <EventCard /> */}
      <img src={eventcard1} alt="eventcard1" className="object-contain w-1/3 md:h-[800px]" />
      <img src={eventcard2} alt="eventcard2" className="object-contain w-1/3 md:h-[800px]" />
      <img src={eventcard3} alt="eventcard3" className="object-contain w-1/3 md:h-[800px]" />
    </div>
  </div>
  )
}

export default Events
