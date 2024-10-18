import Button from "./Button"
import { LuArrowRight } from "react-icons/lu"

const Card = ({ imageAddress , heading , text }) => {
    return (
        <div className="relative w-[100%] xl:w-[34rem] flex flex-col justify-start items-start gap-[1rem] vsm:p-[2rem] p-[1.2rem] m-2 bg-white rounded-3xl">
            <img src={imageAddress} alt="image" className="w-full bg-slate-300 rounded-3xl" />
            <h2 className="lg:text-[2.4rem] md:text-[1.5rem] sm:text-[2rem] vsm:text-[2.2rem] text-[1.4rem] lg:leading-[2.4rem] md:leading-[1.8rem] sm:leading-[2.3rem] vsm:leading-[2.2rem] leading-[1.5rem] font-bold "> {heading}</h2>
            <p className="text-sm font-medium text-gray-700 leading-[1.2rem]"> {text}</p>
            <a href="#" className="flex text-left items-center justify-center gap-[1rem] text-blue-800 font-semibold ">Learn more <LuArrowRight /> </a>
        </div>
    )
}

export default Card