import Image from "next/image";
import type { NextComponentType, NextPageContext } from "next";
// react icons
import { AiOutlineArrowRight } from "react-icons/ai"

const HeroSection: NextComponentType<NextPageContext, {}, {}> = () => {
    return <>
        <div className="relative flex flex-col ">
            {/* value proposition */}
            <div className="absolute z-10 w-full h-full flex justify-center items-center  text-white bg-black/50">
                <div className="max-w-[320px] mx-auto text-center space-y-4 md:space-y-8">
                    <div className="space-y-2 md:space-y-4">
                        <h1 className="text-2xl md:text-4xl">Proposition Text1</h1>
                        <h2 className="text-md">Proposition Text2</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row md:flex justify-center items-center  space-y-2 lg:space-y-0 sm:space-y-4 md:space-x-6 text-sm md:text-md">
                        <button className="p-1 px-4 md:p-2 md:px-8 rounded-md bg-white text-black font-semibold">Join Now</button>
                        <button className="p-1 px-4 md:p-2 md:px-6 flex justify-center items-center md:space-x-2 hover:underline ">
                            <p>See Reviews</p>
                            <AiOutlineArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[50vh] sm:h-[65vh]  md:h-[75vh]  lg:h-[680px]">
                <Image
                    src="/assets/images/dummy_img.jpg"
                    alt="dummy img"
                    layout="fill"
                />
            </div>
        </div>
    </>
}

export default HeroSection