import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  content: string;
  photoUrl: string;
  iconUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, content, photoUrl, iconUrl }) => {
  return (
   <div className="md:w-[270px] animate-popup md:h-[270px] bg-black rounded-2xl md:p-4 p-4 flex flex-col shadow-lg border border-lightpurple relative">
      <div className="flex justify-between md:mb-4">
        <div >
          <Image src={iconUrl} alt="Icon" width={40} height={40} />
        </div>
        <div>
          <Image src={photoUrl} alt="Photo" width={60} height={60} className="rounded-full" />
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-end">
        <h3 className="font-gilroy text-lightpuprle md:text-xl text-xl font-bold mb-2">{name}</h3>
        <p className=" tracking-wide text-purple-400 font-futura md:text-sm text-[0.8rem] overflow-hidden">{content}</p>
      </div>
   </div>
  );
};

export default TestimonialCard;
