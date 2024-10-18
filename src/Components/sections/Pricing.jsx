import Button from '../common/Button'
import Tag from './../common/Tag'

const Pricing = () => {
    return (
        <section className="Pricing my-[6rem] flex justify-center items-center gap-[2.8rem] flex-col" id='pricing'>
            <Tag value={'PRICING'} emoji={'👋🏻'} />
            <div className="slogan max-w-[60rem] text-center lg:text-[3.8rem] md:text-[3rem] sm:text-[2.6rem] vsm:text-[2rem] text-[1.6rem] lg:leading-[3.4rem] md:leading-[2rem] sm:leading-[2.8rem] vsm:leading-[2rem] leading-[1.6rem] font-bold ">
                Your Comfort Is Our, <span className='text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text'>Happiness</span>
            </div>
            <p className='font-medium leading-5 text-center text-gray-600'>
           No. need to worry about our services, we provide all our best <br /> need to worry about our services, we provide all our best services for you.
            </p>
            <Button value={'Shop Now'} tailwindclass={'px-[2rem]'}/>
        </section>
    )
}

export default Pricing
