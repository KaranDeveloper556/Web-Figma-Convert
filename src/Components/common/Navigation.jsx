import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import Button from './Button'

import { LuUser2 } from "react-icons/lu";
import { LuMenuSquare } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";

import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const Navigation = () => {

  //Variables
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { link: "About", slug: "#about" },
    { link: "Products", slug: "#products" },
    { link: "Features", slug: "#features" },
    { link: "Pricing", slug: "#pricing" },
    { link: "Contact", slug: "#contact" }
  ];

  //Hooks

  useEffect(() => {
    if (isOpen) {
      gsap.from('.ul-wapper', {
        x: 80,
        opacity: 0,
        duration: .2,
        stagger: -0.2,
      });
      gsap.from('#Navlinks .border-b-2', {
        x: 80,
        opacity: 0,
        duration: .2,
        delay: .4,
        stagger: -0.2,
      });
      gsap.from('.auth-btn-mobile button', {
        y: 80,
        opacity: 0,
        duration: .6,
        delay: .8,
        stagger: -0.4,
      });
    }
  }, [isOpen]);

  useGSAP(
    () => {
      gsap.from('#logo-box', {
        y: -20,
        opacity: 0,
        duration: 1,
      })

      const NavTimeline = gsap.timeline()

      NavTimeline.from('#Navlinks a', {
        y: -40,
        opacity: 0,
        duration: .4,
        stagger: -0.10
      })

      gsap.from('#auth-btn button', {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger: -0.20
      })

      gsap.from('#menu', {
        y: -20,
        opacity: 0,
        duration: 1,
      })
    }
  )

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="py-2 shadow-sm bg-[#ede9ff52]">
      <div className="max-w-[100rem] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center z-[99]" id="logo-box">
            <a href="/">
              <img src="/kdevelops-logo.png" alt="logo" className=" lg:h-[2rem] li:h-[1.5rem] h-[1.2rem] " />
            </a>
          </div>

          {/* Center links (hidden on small screens) */}
          <div className={`${isOpen ? 'ul-wapper fixed h-full w-full top-0 right-0 bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-800 z-[98]' : 'hidden'} md:block space-x-6 text-gray-500 font-semibold`}>
            <ul className={isOpen ? 'p-8 mt-[5rem] flex justify-center flex-col text-gray-200 li:text-[3.5rem] text-[2.8rem] font-bold li:leading-[3.5rem] leading-[2.8rem]' : 'flex justify-center space-x-6 items-center'} id="Navlinks">
              {
                links.map(
                  (link, index) => {
                    return <a key={index} href={link.slug} className={`${isOpen ? 'border-b-2 pb-2' : ''} flex items-center justify-between hover:text-indigo-600`} id={`links-${index}`}>
                      {link.link}
                      {isOpen && (
                        <>
                          <MdOutlineArrowOutward />
                        </>
                      )}
                    </a>
                  }
                )
              }
            </ul>
          </div>

          {/* Right buttons (hidden on small screens) */}
          <div className={isOpen ? 'auth-btn-mobile fixed bottom-10 right-10 flex items-center gap-2 scale-[1.3] z-[99]' : "md:flex items-center gap-2 hidden z-[99]"} id="auth-btn">
            <Button icon={<LuPhone />} tailwindclass={'rounded-full px-[.8rem] py-[.8rem]'} />
            <Button icon={<LuUser2 />} value={'Register'} />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden z-[99]" id="menu">
            {
              isOpen ? <Button icon={<MdOutlineClose />} value={'Close'} onclick={() => { setIsOpen(false) }} /> : <Button icon={<LuMenuSquare />} value={'Menu'} onclick={() => { setIsOpen(true) }} />
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
