import ai from "../assets/ai.svg"
import blockchain from "../assets/blockchain.svg"
import IOT from "../assets/IOT.svg"
import ar from "../assets/ar.svg"

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
export const navLinks = [
    {
      id: "0",
      title: "Home",
      url: "#hero",
    },
    {
      id: "1",
      title: "About Us",
      url: "#aboutUs",
    },
    {
      id: "2",
      title: "Our Services",
      url: "#services",
    },
    {
      id: "3",
      title: "Contact us",
      url: "#contact us",
    },
    {
        id: "4",
        title: "Get in touch",
        url: "#contact us",
        onlyMobile: true,
      },
  
    
    
  ];
  export const gridItems = [
    {
      id: 1,
      title: "Artificial Intelligence",
      header: <Skeleton />,
      description: "Machine Learning Models Natural Language Processing Predictive Analytics",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: ai,  // Pass the image directly
    },
    {
      id: 2,
      title: "Blockchain",
      header: <Skeleton />,
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: blockchain,  // Pass the image directly
    },
    {
      id: 3,
      title: "IOT Solutions",
      header: <Skeleton />,
      description: "I constantly try to improve",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: IOT,  // Pass the image directly
    },
    {
      id: 4,
      title: "Augmented Reality",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: ar,  // Pass the image directly
    },
  ];
  


  export const Team = [{
    id: "1",
    title: "Co-founder",
    description : "Lorem-ipsum",
    image: ""
  },{
    id: "2",
    title: "CTO ",
    description : "Lorem-ipsum",
    image: ""
  },{
    id: "3",
    title: "Bussiness Analyst",
    description : "Lorem-ipsum",
    image: ""
  },{
    id: "4",
    title: "Web Developer",
    description : "Lorem-ipsum",
    image: ""
  }]