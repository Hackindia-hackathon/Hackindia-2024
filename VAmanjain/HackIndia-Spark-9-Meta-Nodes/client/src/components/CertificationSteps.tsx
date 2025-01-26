import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface CertificationStep {
  title: string;
  description: string;
  image: string;
  duration: string;
  bgColor: string;
}

const CertificationSteps: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const steps: CertificationStep[] = [
    {
      title: "Step 1: Course Registration",
      description:
        "Sign up for the certification program through our online portal.",
      image: "/api/placeholder/300/200",
      duration: "1-2 days",
      bgColor: "bg-blue-600",
    },
    {
      title: "Step 2: Complete Online Modules",
      description:
        "Work through a series of interactive online learning modules at your own pace.",
      image: "/api/placeholder/300/200",
      duration: "2-4 weeks",
      bgColor: "bg-green-600",
    },
    {
      title: "Step 3: Practical Assignments",
      description:
        "Complete hands-on projects to apply your new skills in real-world scenarios.",
      image: "/api/placeholder/300/200",
      duration: "3-5 weeks",
      bgColor: "bg-yellow-600",
    },
    {
      title: "Step 4: Final Assessment",
      description:
        "Take a comprehensive exam to demonstrate your mastery of the course material.",
      image: "/api/placeholder/300/200",
      duration: "1 day",
      bgColor: "bg-red-600",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const newProgress = oldProgress + 1;
        if (newProgress === 100 && swiper) {
          swiper.slideNext();
        }
        return newProgress;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [swiper]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setProgress(0);
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#9D00FF] p-8 h-[80vh] rounded-3xl ">
      <div className="md:w-1/3 flex flex-col pr-8 pt-10">
        <div>
          <motion.h1
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Steps to Complete Your Certification
          </motion.h1>
          <motion.p
            className="text-gray-300 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Follow these steps to earn your certificate
          </motion.p>
          <motion.button
            className="bg-[#32FF7E] text-black px-4 py-2 rounded-full font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey →
          </motion.button>
        </div>
        <div className="flex gap-8 items-center mt-10">
          <motion.button
            onClick={() => swiper?.slidePrev()}
            className="text-white bg-[#007BFF] p-2 rounded-full  "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={() => swiper?.slideNext()}
            className="text-white bg-[#007BFF] p-2 rounded-full  "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
      <div className="md:w-2/3">
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        //   pagination={{
        //     type: 'fraction',
        //   }}
        //   navigation={true}
        slidesPerView={2} // Show 2 slides at a time
          modules={[Autoplay, Pagination, Navigation]}
          onSwiper={(swiperInstance: SwiperType) => setSwiper(swiperInstance)}
          onSlideChange={handleSlideChange}
          className="h-[70vh] w-[800px] rounded-3xl space-x-24 "
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            '@1.5': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@3.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@4.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`${step.bgColor} p-6  h-full w-[350px] flex flex-col rounded-3xl `}
                >
                  <motion.img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded mb-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.h2
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {step.title}
                  </motion.h2>
                  <motion.p
                    className="text-gray-200 mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {step.description}
                  </motion.p>
                  <motion.div
                    className="mt-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <p className="text-white font-bold">Duration: {step.duration}</p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={2} // Show 2 slides at a time
          modules={[Autoplay, Pagination, Navigation]}
          onSwiper={(swiperInstance: SwiperType) => setSwiper(swiperInstance)}
          onSlideChange={handleSlideChange}
          className="h-[70vh] w-[70%] rounded-3xl" // Adjusted width to full
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`${step.bgColor} p-6 h-full flex flex-col rounded-3xl`}
                >
                  <motion.img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded mb-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.h2
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {step.title}
                  </motion.h2>
                  <motion.p
                    className="text-gray-200 mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {step.description}
                  </motion.p>
                  <motion.div
                    className="mt-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <p className="text-white font-bold">
                      Duration: {step.duration}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper> */}
        {/* <motion.div 
          className="w-[50px] bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div 
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div> */}
      </div>
    </div>
  );
};

export default CertificationSteps;
