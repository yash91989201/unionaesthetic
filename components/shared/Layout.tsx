import { useEffect, useState } from "react";
import Link from "next/link"
import type { NextComponentType, NextPageContext } from "next";
// react icons
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { MdVerticalAlignTop } from "react-icons/md"

// custom components
import Navbar from "./Navbar"

interface PropTypes {
    children: React.ReactNode
}

const Layout: NextComponentType<NextPageContext, {}, PropTypes> = ({ children }) => {
    const [scrollPopup, setScrollPopup] = useState("hidden")
    const scrollObserver = () => {
        if (window.pageYOffset > 480)
            setScrollPopup("flex")
        else
            setScrollPopup("hidden")

    }

    useEffect(() => {
        window.addEventListener("scroll", scrollObserver)
        return () => window.removeEventListener("scroll", scrollObserver)
    }, [])
    return (
        <>
            <Navbar />
            {children}
            {/* contact section */}
            <address className={`fixed left-0 top-[40vh] mx-0.5  min-w-fit ${scrollPopup}  animate-slide-in-left`}>
                <div className="w-full  flex flex-col text-white space-y-2 ">
                    <Link href="">
                        <a className="p-2"
                            style={{
                                background: " linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                                filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )",
                            }}
                        >
                            <BsInstagram className="text-xl" />
                        </a>
                    </Link>
                    <Link href="">
                        <a className="p-2 bg-[#25D366]  ">
                            <BsWhatsapp className="text-xl" />
                        </a>
                    </Link>
                </div>
            </address>
            <button className={`fixed bottom-0 right-0 m-3  p-3 px-4 ${scrollPopup} items-center rounded-full  bg-blue-500 text-white  space-x-2 animate-slide-in-right `}>
                <MdVerticalAlignTop className="text-xl font-bold" />
                <p className="text-md">Scroll to top</p>
            </button>
        </>
    )
}

export default Layout