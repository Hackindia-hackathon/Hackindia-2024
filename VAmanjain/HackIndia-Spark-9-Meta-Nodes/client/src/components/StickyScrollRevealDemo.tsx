"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import "../index.css"

const content = [
  {
    title: "Step 1: ",
    description:
      "This is some sample text , we have written this for now. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white rounded-xl overflow-hidden ">
        <img
          src="https://th.bing.com/th/id/OIP.IRc22Zc7yDsxGQ44OS0X6AAAAA?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Step 2",
    description:
      "This is Second Step for the process. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white rounded-xl overflow-hidden ">
        <img
          src="https://th.bing.com/th/id/OIP.avNhhI7Kd7cLArArBrEe7AAAAA?w=302&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Step 3",
    description:
      "This is step 3. Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white rounded-xl overflow-hidden">
         <img
          src="https://th.bing.com/th/id/OIP.ow5ndU9unbGAmQZK87HjiQAAAA?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          width={300}
          height={300}
          className="h-full w-full object-cover "
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <>
      <p className="text-white text-5xl text-center mt-40 mb-16 font-bold ">Steps to Get Certified</p>
    <div className="p-4 flex justify-center  ">
      <StickyScroll content={content}  />
    </div>
    </>
  );
}
