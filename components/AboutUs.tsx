"use client"
import Image from "next/image";
// import Circle from "../customs/Circle";
import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/fram3.svg";
import frame4 from "../assets/frame4.svg";
import backdrop from "../assets/backdrop.svg"
import { CardBody, CardContainer, CardItem } from "../Animation/3dCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface MissionProps {}

const Mission: React.FC<MissionProps> = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="flex justify-start text-center relative" id="aboutUs">
      <div className="relative md:flex">
        <div
          className="md:ml-32 ml-4 mt-6 md:mt-32 flex flex-col justify-start text-center md:mb-40 relative"
          data-aos="fade-right"
        >
          <h3
        
            className="flex justify-center text-grey md:justify-start font-gilroy tracking-wider sm:tracking-widest font-normal text-tcolor md:pr-6 text-base sm:text-xl"
          >
            ABOUT US
          </h3>
          <h2
            
            className="md:mt-2 flex justify-center md:justify-start mb-4 font-gilroy tracking-wider sm:tracking-widest font-medium md:text-black dark:text-white sm:pr-2 md:pr-8 text-2xl sm:text-5xl"
          >
            Our Mission
          </h2>

          <div className="max-w-l text-center md:text-left flex justify-center md:justify-start md:mt-6">
            <p
              style={{
                
                textAlign: "justify",
              }}
              className="justify-center mr-4 md:max-w-xl sm:max-w-l font-normal font-futura text-center sm:text-left sm:text-xl text-sm dark:text-white md:pr-8 tracking-wider sm:tracking-widest"
            >
              To make software development simple and accessible.
              <br /> With a collective experience of around 13 years in the
              industry, we embark on every project with a commitment to
              excellence that goes beyond just coding and design – it&apos;s
              about crafting digital experiences that leave a lasting
              impression.
              <br /> We understand that every project is a unique opportunity to
              create something extraordinary. From concept to execution, we are
              committed to delivering solutions that not only meet but exceed
              your expectations.
            </p>
          </div>
        </div>

        <CardContainer className="max-w-xl mx-auto md:ml-20 md:pl-8">
          <CardBody className="max-w-4xl group/card mx-auto md:mt-32 px-4 lg:ml-12 lg:px-0 flex flex-col relative z-10">
            <CardItem
              translateZ={100} 
              className="flex flex-wrap justify-center items-center"
            >
              <Image
                 
                src={frame3}
                alt="frame3"
                width={175}
                height={175}
                className="md:max-w-full md:h-[175px] h-[100px] md:mt-0 mt-2 lg:mt-6 lg:mr-2 lg:mb-0"
                data-aos="fade-down-right"
              />
              <Image
                 
                src={frame2}
                alt="frame2"
                width={125}
                height={125}
                className="md:max-w-full md:h-[125px] h-[100px] md:mt-0 sm:mt-16 md:pt-0 md:ml-0 ml-2 lg:mt-20 lg:mb-0"
                data-aos="fade-down-left"
              />
            </CardItem>
            <CardItem className="flex flex-wrap justify-center">
              <Image
                
                src={frame4}
                alt="frame4"
                width={125}
                height={125}
                className="md:max-w-full md:h-[125px] h-[100px] md:mt-0  md:mr-0 mr-2 lg:mt-2 lg:mr-2 lg:mb-0"
                data-aos="fade-up-right"
              />
              <Image
                 
                src={frame1}
               alt="frame"
                width={200}
                height={200}
                className="md:max-w-full md:h-[200px] h-[100px]  lg:mt-2 mb-4 lg:mb-0"
                data-aos="fade-up-left"
              />
            </CardItem>
          </CardBody>

        
          
        </CardContainer>
      </div>
    </section>
  );
};

export default Mission;
