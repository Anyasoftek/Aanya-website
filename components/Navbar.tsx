"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Image from "next/image";
import logo from "../assets/logo.svg"; // Adjust the path to your image
import { navLinks } from "../constants/index";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";

const Header: React.FC = () => {
    const pathname = usePathname();
    const [openNavigation, setOpenNavigation] = useState(false);
    const linkVariants = {
        initial: { y: 0, opacity: 1 },
        hover: { 
          y: -5, 
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }
      };

  useEffect(() => {
    // Close navigation when pathname changes
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  }, [pathname, openNavigation]);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };


  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <Image src={logo} width={190} height={40} alt="Aanya Softek" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navLinks.map((item) => (
                 <motion.div
                 key={item.id}
                 initial="initial"
                 whileHover="hover"
                 variants={linkVariants}
               >
                
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-futura text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
             </motion.div>
            ))}
          </div>

         
        </nav>

        <Button className="hidden lg:flex" href="#home">
          Get In Touch
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
