import { FC } from 'react'
import mvp1 from '../../assets/mvp1.png'
import mvp2 from '../../assets/mvp2.png'
import mvp3 from '../../assets/mvp3.png'
import medalgold from '../../assets/medal-gold.png'
import medalsilver from '../../assets/medal-silver.png'
import medalbronze from '../../assets/medal-bronze.png'

const MVP: FC = () => {
  return (
  <div>
    <h1 className="my-10 font-ldr-kaet text-5xl text-center">LAST EVENT MVPS</h1>
    <div className='p-20 flex bg-black bg-teddies-detail-1 bg-cover bg-center'>
      <div className='flex flex-col items-center ml-32'>
        <div className='flex flex-col items-end gap-3 ml-10'>
          <img src={mvp1} alt="mvp1" className='h-52 md:h-60'/>
          <h1 className="font-ldr-kaet text-2xl md:text-4xl text-white self-center">EMILY</h1>
          <img src={medalgold} alt="gold" className='h-20 md:h-24 mt-[-120px] mr-[-10px]'/>
        </div>
        <div className='flex gap-14'>
          <div className='flex flex-col items-end gap-3 mr-10'>
            <img src={mvp2} alt="mvp2" className='h-52 md:h-60'/>
            <h1 className="font-ldr-kaet text-2xl md:text-4xl text-white self-center">JASON</h1>
            <img src={medalsilver} alt="silver" className='h-20 md:h-24 mt-[-120px] mr-[-10px]'/>
          </div>
          <div className='flex flex-col items-end gap-3 mt-10'>
            <img src={mvp3} alt="mvp3" className='h-52 md:h-60'/>
            <h1 className="font-ldr-kaet text-2xl md:text-4xl text-white self-center">DAVID</h1>
            <img src={medalbronze} alt="bronze" className='h-20 md:h-24 mt-[-120px] mr-[-10px]'/>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
  )
}

export default MVP
