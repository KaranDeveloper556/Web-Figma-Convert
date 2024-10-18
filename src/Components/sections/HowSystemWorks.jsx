import FigmaImg from '../../assets/figma-convert.gif'
import AutomaticallyImg from '../../assets/automatically.jpeg'
import Tag from './../common/Tag'
import Card from '../common/Card'
import { MdOutlineArrowOutward } from 'react-icons/md'
import Button from '../common/Button'
import star1 from '../../assets/star-1.png'
import star2 from '../../assets/star-2.png'


const HowSystemWorks = () => {
  return (
    <section className="How-system-works-sectio relative py-8 px-2 w-[95%] 4xl:max-w-[120rem] flex flex-col justify-center items-center gap-[2rem] bg-gradient-to-t from-[#fbc2ebbd] to-[#a6c0eec8] rounded-[2rem]">
      <Tag value={'HOW OUR SYSTEM WORKS'} emoji={'🔥'} />
      <div className="slogan max-w-[60rem] text-center lg:text-[3.4rem] md:text-[2rem] sm:text-[2.2rem] vsm:text-[1.8rem] text-[1.6rem] lg:leading-[3.4rem] md:leading-[2rem] sm:leading-[2.8rem] vsm:leading-[2rem] leading-[1.6rem] font-bold ">
        See how our system, <br /> <span className='text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text'>wroks</span> quickly and easily!
      </div>
      <div className="relative upload-details flex flex-wrap md:flex-nowrap items-center justify-center gap-2 vsm:p-5 p-0 max-w-[90rem] ">
        <img src={star2} alt="star" className='absolute top-[-3rem] right-[3rem] lg:right-[0rem] h-[8rem] lg:h-[13rem] z-[10]' />
        <Card imageAddress={FigmaImg} heading={'Upload the ready-made design files from Figma to Convertio'} text={'The file you upload must be in fig format as currently we are only working with Figma to create this magic'} />
        <Card imageAddress={AutomaticallyImg} heading={'Our system will automatically convert your design into code'} text={'The file you upload must be in fig format as currently we are only working with Figma to create this magic'} />
        <img src={star1} alt="star" className='absolute bottom-[12rem] left-[-4rem] rotate-[-40deg] h-[10rem] z-[10]' />
      </div>
      <div className="hearo-button">
        <Button rigthicon={<MdOutlineArrowOutward />} value={'Get Started'} tailwindclass={'p-3 px-5'} />
      </div>
    </section>
  )
}

export default HowSystemWorks
