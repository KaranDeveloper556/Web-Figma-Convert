import React from 'react'
import Button from '../common/Button'
import Upload from './../../assets/upload.gif'
import QualityCode from './../../assets/quality.png'
import { MdOutlineArrowOutward } from "react-icons/md";

const DetailsSection = () => {
  return (
    <section className="relative top-[-5rem] Details-section" id='about'>
      <div className="upload-details flex flex-wrap md:flex-nowrap items-center justify-center gap-2 p-5 mb-[6rem] max-w-[90rem]">
        <div className="flex flex-col justify-center gap-[2rem] p-5 datails">
          <div className="slogan lg:text-[3.4rem] md:text-[2rem] sm:text-[2.2rem] vsm:text-[1.8rem] text-[1.6rem] lg:leading-[3.4rem] md:leading-[2rem] sm:leading-[2.8rem] vsm:leading-[2rem] leading-[1.6rem] font-semibold">
            Just need to upload the file, <span className='text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text'>Convertio</span> will convert it easily
          </div>
          <p className='font-medium leading-5 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit vel in quo assumenda voluptate soluta expedita molestiae dolores illo.
          </p>
          <div className="font-medium leading-5 text-gray-600 cons">
            <p> <span className='mr-4'>✔️</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit adipisicing elit </p>
            <p> <span className='mr-4'>✔️</span> Lorem ipsum dolor, sit amet consectetur  </p>
          </div>
          <div>
            <Button value={'Try Now'} tailwindclass={'px-[2rem]'} />
          </div>
        </div>
        <img src={Upload} alt="" className='h-[15rem] vsm:h-[18rem] sm:h-[22rem] md:h-[18rem] lg:h-[22rem] xl:h-[25rem] rounded-2xl' />
      </div>

      <div className="points" id='features'>
        <div className="ml-[2rem] md:ml-[4rem] mb-[3rem] flex items-center justify-between md:gap-[10rem] sm:gap-[4rem] gap-[1rem] heading">
          <div className="slogan max-w-[60rem] lg:text-[3.4rem] md:text-[2rem] sm:text-[2.2rem] vsm:text-[1.8rem] text-[1.6rem] lg:leading-[3.4rem] md:leading-[2rem] sm:leading-[2.8rem] vsm:leading-[2rem] leading-[1.6rem] font-bold">
            Just need to upload the file, <span className='text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text'>Convertio</span> will convert it easily
          </div>
          <MdOutlineArrowOutward className='lg:text-[5.4rem] md:text-[4rem] sm:text-[4.2rem] text-[4.2rem] ' />
        </div>
        <div className="flex flex-wrap flex-row-reverse md:flex-nowrap items-center justify-center gap-2 px-[1rem] lg:px-[4rem] max-w-[90rem]">
          <div className="flex flex-col justify-center gap-[2rem] md:p-2 p-5 datails">
            <div className=" question-list">
              <div className='flex p-5 mb-2 font-medium leading-5 text-gray-500 transition-shadow duration-300 rounded-lg max-w-[37rem] hover:shadow-lg'>
                <span className='pr-3 text-black'>01</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, consequatur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quo</span>
              </div>
              <div className='flex p-5 mb-2 font-medium leading-5 text-gray-500 transition-shadow duration-300 rounded-lg max-w-[37rem] hover:shadow-lg'>
                <span className='pr-3 text-black'>02</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, consequatur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quo</span>
              </div>
              <div className='flex p-5 mb-2 font-medium leading-5 text-gray-500 transition-shadow duration-300 rounded-lg max-w-[37rem] hover:shadow-lg'>
                <span className='pr-3 text-black'>03</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, consequatur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quo</span>
              </div>
              <div className='flex p-5 font-medium leading-5 text-gray-500 transition-shadow duration-300 rounded-lg max-w-[37rem] hover:shadow-lg'>
                <span className='pr-3 text-black'>04</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, consequatur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quo</span>
              </div>
            </div>
            <div className="font-medium leading-5 text-gray-600 cons">
            </div>
          </div>
          <img src={QualityCode} alt="" className='h-[20rem] vsm:h-[15rem] sm:h-[22rem] md:h-[22rem] lg:h-[26rem] xl:h-[34rem]' />
        </div>
      </div>
    </section>
  )
}

export default DetailsSection
