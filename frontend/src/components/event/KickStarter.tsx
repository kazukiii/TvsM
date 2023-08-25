import { FC } from 'react'

const KickStarter: FC = () => {
  return (
    <div className="my-10 flex flex-col items-center gap-8">
      <h1 className="font-ldr-kaet text-5xl text-center">
        CHECK OUT OUR <br /> KICKSTARTER CAMPAIGN!
      </h1>
      <div className="w-[95%] md:w-[90%] flex gap-2 justify-center items-center">
        <div className="w-1/3 aspect-square flex flex-col gap-2">
          <div className="h-1/2 w-full border-8 border-tvsm-orange bg-panda-event bg-cover bg-center "></div>
          <div className="h-1/2 w-full border-8 border-tvsm-orange bg-bear-event bg-cover  bg-center "></div>
        </div>
        <div className="p-5 w-1/3 aspect-square  border-8 flex flex-col justify-center items-center border-tvsm-orange">
          {/* <img src={logo} alt="logo" className="w-4/5" /> */}
          <div className="h-3/4 w-full  border-tvsm-orange bg-logo-event bg-contain bg-no-repeat bg-center "></div>
          <div className="h-1/4 w-full  border-tvsm-orange bg-kickstarter bg-contain  bg-no-repeat bg-center "></div>
        </div>
        <div className=" w-1/3 aspect-square flex flex-col gap-2">
          <div className="h-1/2 w-full border-8 border-tvsm-orange bg-swamp-event bg-cover  bg-center "></div>
          <div className="h-1/2 w-full border-8 border-tvsm-orange bg-ghost-event bg-cover  bg-center "></div>
        </div>
      </div>
    </div>
  )
}

export default KickStarter
