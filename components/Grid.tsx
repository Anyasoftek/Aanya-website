
import { BentoGrid, BentoGridItem } from "../components/utils/BentoGrid";
import ai from "../assets/ai.svg"
import blockchain from "../assets/blockchain.svg"
import IOT from "../assets/IOT.svg"
import ar from "../assets/ar.svg"

interface SkeletonProps {
    title: string;
    description: string;
  }

const Grid = () => {
  return (
    <section id="services " className="sm:mt-8">
        <div className="max-w-5xl md:pb-6 lg:pb-8 pb-2 mx-auto" >
            <h1 className="md:text-4xl md:pb-2 text-3xl font-gilroy lg:pb-2 lg:text-6xl">Unlock the power of</h1>
            <h2  className="text-pink-400 font-bold font-gilory md:pb-2 lg:pb-2 text-3xl md:text-6xl">Aanyaa Softek</h2>
            <p className="md:text-l text-sm font-gilroy sm:mt-2 sm:mb-4 text-grey">At ASTPL, we propel businesses towards success  with our strategic expertise, cutting-edge solutions,  offered services  and an unwavering commitment to excellence.</p>
        </div>
       <BentoGrid className="max-w-5xl   mx-auto md:auto-rows-[20rem]">
      {gridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          
          header={item.header}
          className={item.className}

          description={item.description}
        //  icon={item.img}
        //   icon={item.icon}

        />
      ))}
    </BentoGrid>
    </section>
  );
};

export default Grid;

const Skeleton: React.FC<SkeletonProps> = ({ title,description }) => (
    <div className="flex flex-col justify-center items-center flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-purple/[0.9] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-blue-500 dark:border-blue/[0.2] bg-neutral-100 dark:bg-black">
        <h2 className="font-gilroy md:text-3xl text-purple">{title}</h2>
        <p className="font-futura md:w-[245px] text-orange-200 text-center">{description}</p>
    </div>
  );

  export const gridItems = [
    {
      id: 1,
     
      header: <Skeleton description="Machine Learning Models
      Natural Language Processing (NLP)
      Predictive Analytics" title= "Artificial Intelligence"/>,
      
      className: "md:col-span-2   ",
      
      titleClassName: "justify-end",
      img: ai,  // Pass the image directly
    },
    {
      id: 2,
      
      header: <Skeleton title="Blockchain" description="Smart Contracts Development
      Decentralized Applications (DApps)
      Blockchain Integration Services"/>,
      
      className: "md:col-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: blockchain,  // Pass the image directly
    },
    {
      id: 3,
    
      header: <Skeleton description="IoT System Design and Development
      IoT Device Management
      Data Analytics for IoT"   title="IOT Solutions" />,
     
      className: "md:col-span-1",
      imgClassName: "",
      titleClassName: "justify-center",
      img: IOT,  // Pass the image directly
    },
    {
      id: 4,
     
      header: <Skeleton description="AR Application Development
      AR for Training and Education
      AR for Marketing and Customer Engagement" title="Augmented Reality" />,
      description: "",
      className: "md:col-span-2 max-w-3xl",
      imgClassName: "",
      titleClassName: "justify-start",
      img: ar,  // Pass the image directly
    },
  ];
  

