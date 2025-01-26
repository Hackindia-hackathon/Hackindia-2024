import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
 
import { BentoCard, BentoGrid } from "./ui/bento-grid";
 
const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 text-[#fff] hover:bg-[#32FF7E] transition-all transition-[0.s] ease-in-out  hover:text-[#000]  ",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 text-[#fff] hover:bg-[#32FF7E] transition-all transition-[0.s] ease-in-out  hover:text-[#000]  ",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 text-[#fff] hover:bg-[#32FF7E] transition-all transition-[0.s] ease-in-out  hover:text-[#000]  ",
  },
  
];
 
export  const  BentoDemo=()=> {
  return (
    <BentoGrid className="lg:grid-rows-3 max-h-[90vh] max-w-[1200px] px-[3rem]   ">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}