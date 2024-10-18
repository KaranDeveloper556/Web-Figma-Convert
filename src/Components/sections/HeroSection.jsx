import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import Tag from './../common/Tag';
import Button from '../common/Button';
import { MdOutlineArrowOutward } from "react-icons/md";

import codeImg from './../../assets/code-img.png'
import nft from './../../assets/nft.png'
import rocket from './../../assets/rocket.png'

const HeroSection = () => {

  useGSAP(
    () => {
      gsap.from('.intro .tag', {
        y: -40,
        scale: 0,
        duration: 1
      })

      gsap.from('.intro .slogan', {
        y: -40,
        scale: 0,
        delay:.6,
        duration: .8,
      })
      gsap.from('.intro .hero-para', {
        y: -40,
        scale: 0,
        delay:.8,
        duration: .8,
      })

      gsap.from('.intro .hero-button', {
        y: -40,
        scale: 0,
        delay:1,
        duration: .8,
      })
    }
  )

  return (
    <section className="relative flex flex-col items-center justify-center w-full Hero-section">

      <div className="intro m-4 w-[95%] 4xl:max-w-[120rem] pb-[15rem] relative p-8 bg-gradient-to-t from-[#fbc2ebbd] to-[#a6c0eec8] flex flex-col justify-center items-center md:gap-7 gap-4 rounded-2xl">
        <Tag value={'Job Finder Website'} emoji={'🔥'} />
        <div className="slogan lg:text-[5.4rem] md:text-[4rem] sm:text-[3rem] vsm:text-[2.4rem] text-[1.6rem] lg:leading-[4.8rem] md:leading-[3.8rem] sm:leading-[2.8rem] vsm:leading-[2.3rem] leading-[1.8rem] font-bold text-center">
          <p>Figma to <span className='text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text'>{'{'}frontend{'}'}</span></p>
          <p>quickly and easily</p>
        </div>
        <p className='hero-para max-w-[40rem] pt-3 leading-5 font-medium text-gray-600 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam, provident dolorem error sint vitae est. Quidem ea repudiandae facilis.</p>
        <div className="hero-button">
          <Button rigthicon={<MdOutlineArrowOutward />} value={'Get Started'} tailwindclass={'p-3 px-5'} />
        </div>
      </div>
      <div className="relative top-[-12rem] flex images">
        <img src={nft} alt="nft" className='absolute bottom-[-10%] left-[-10%] h-[7rem] sm:h-[14rem] md:h-[16rem] animate-nftAnime z-[10]' />
        <img src={codeImg} alt="code" className='relative h-[12rem] vsm:h-[18rem] sm:h-[25rem] md:h-[30rem] xl:h-[35rem] rounded-[5%]' />
        <img src={rocket} alt="nft" className='absolute top-[-10%] right-[-10%] h-[7rem] sm:h-[14rem] animate-rocketAnime z-[10]' />
      </div>

    </section>
  )
}

export default HeroSection