import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  WalletIcon,
  AwardIcon,
  ShieldCheckIcon,
  UserIcon,
  CodeIcon,
  ChevronRightIcon,
} from "lucide-react";
import Image from "next/image";
import { MagicCard } from "./ui/magic-card";
import CertificationSteps from "./CertificationSteps";
import { MarqueeDemo } from "./MarqueeDemo";
// import a from "next/link"

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-[#0f0f28] text-gray-100">
      {/* Header */}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 h-screen flex items-center ">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 py-2">
            Vertify Your Skills on the Blockchain
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Secure, verifiable, and immutable skill certifications powered by
            Web3 technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="text-xl bg-purple-600 hover:bg-purple-700 rounded-full">
              Get Started
            </Button>
            {/* <Button size="lg" variant="outline">
              Learn More
            </Button> */}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Web3Certs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MagicCard
              className=" bg-[rgba(10,10,35,0.25)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-4  border border-[rgba(255,255,255,0.18)] backdrop-blur-md  cursor-pointer  whitespace-nowrap text-white p-6   "
              gradientColor="#7ab9fc"
            >
              <ShieldCheckIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tamper-Proof</h3>
              <p className="" >
                Certifications stored on the blockchain cannot be <br/> altered or
                forged.
              </p>
            </MagicCard>
            <MagicCard
              className=" bg-[rgba(10,10,35,0.25)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-4  border border-[rgba(255,255,255,0.18)] backdrop-blur-md   cursor-pointer  whitespace-nowrap text-white p-6 rounded-lg md:col-span-2 rounded-3xl"
              gradientColor="#7ab9fc"
            >
             <UserIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Self-Sovereign Identity
              </h3>
              <p>
                Own and control your certifications without relying on
                centralized authorities.
              </p>
            </MagicCard>
            <MagicCard
              className=" bg-[rgba(10,10,35,0.25)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-4  border border-[rgba(255,255,255,0.18)] backdrop-blur-md   cursor-pointer  whitespace-nowrap text-white p-6  rounded-3xl md:col-span-2 "
              gradientColor="#7ab9fc"
            >
              <CodeIcon className="h-12 w-12 text-purple-500 mb-4 " />
              <h3 className="text-xl font-semibold mb-2">
                Smart Contract Powered
              </h3>
              <p>
                Automated issuance and verification through secure smart
                contracts.
              </p>
            </MagicCard>
            <MagicCard
              className=" bg-[rgba(10,10,35,0.25)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-4  border border-[rgba(255,255,255,0.18)] backdrop-blur-md  cursor-pointer  whitespace-nowrap text-white p-6 rounded-3xl   "
              gradientColor="#7ab9fc"
            >
              <AwardIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Recognition</h3>
              <p>
                Certifications recognized and verifiable worldwide <br/> on the
                blockchain.
              </p>
            </MagicCard>
            {/* <div className="bg-gray-800 p-6 rounded-lg">
              <ShieldCheckIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tamper-Proof</h3>
              <p>
                Certifications stored on the blockchain cannot be altered or
                forged.
              </p>
            </div> */}
            {/* <div className="bg-gray-800 p-6 rounded-lg md:col-span-2">
              <UserIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Self-Sovereign Identity
              </h3>
              <p>
                Own and control your certifications without relying on
                centralized authorities.
              </p>
            </div> */}
            {/* <div className="bg-gray-800 p-6 rounded-lg md:col-span-2">
              <CodeIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Smart Contract Powered
              </h3>
              <p>
                Automated issuance and verification through secure smart
                contracts.
              </p>
            </div> */}
            {/* <div className="bg-gray-800 p-6 rounded-lg">
              <AwardIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Recognition</h3>
              <p>
                Certifications recognized and verifiable worldwide on the
                blockchain.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 ">
        <CertificationSteps/>
        {/* <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-purple-600 rounded-full p-4 mb-4">
                <UserIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Create Account</h3>
              <p>Connect your wallet and set up your Web3Certs profile.</p>
            </div>
            <ChevronRightIcon className="hidden md:block h-8 w-8 text-purple-500" />
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-purple-600 rounded-full p-4 mb-4">
                <CodeIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                2. Complete Courses
              </h3>
              <p>
                Take courses and demonstrate your skills through assessments.
              </p>
            </div>
            <ChevronRightIcon className="hidden md:block h-8 w-8 text-purple-500" />
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-purple-600 rounded-full p-4 mb-4">
                <AwardIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                3. Receive Certification
              </h3>
              <p>
                Get your skills certified on the blockchain upon completion.
              </p>
            </div>
          </div>
        </div> */}
      </section>

      {/* Marquee of Partner Logos */}
      {/* <section className="py-12 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Trusted by Industry Leaders
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex space-x-12 animate-marquee">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <image
                  key={i}
                  href={`/placeholder-logo.svg`}
                  // alt={`Partner ${i}`}
                  width={120}
                  height={60}
                  className="max-w-none"
                />
              ))}
            </div>
            <div className="flex space-x-12 animate-marquee2 absolute top-0">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <image
                  key={i}
                  href={`/placeholder-logo.svg`}
                  // alt={`Partner ${i}`}
                  width={120}
                  height={60}
                  className="max-w-none"
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section id="testimonials" className=" px-4">
        {/* <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Blockchain Developer",
                content:
                  "Web3Certs has been a game-changer for my career. The blockchain-verified certifications give me a competitive edge in the job market.",
              },
              {
                name: "Samantha Lee",
                role: "Data Scientist",
                content:
                  "I love how easy it is to showcase my skills with Web3Certs. The self-sovereign identity aspect aligns perfectly with my values.",
              },
              {
                name: "Michael Chen",
                role: "Smart Contract Auditor",
                content:
                  "As someone who works in blockchain security, I appreciate the robust and tamper-proof nature of Web3Certs certifications.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <p className="mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="bg-purple-600 rounded-full p-2 mr-4">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <MarqueeDemo/>
      </section>

      {/* Call to Action */}
      <section className="py-20  mx-6 rounded-3xl  px-4 bg-[#9D00FF]">
      {/* <section className="py-20  mx-6 rounded-3xl  px-4 bg-gradient-to-r from-purple-600 to-pink-600"> */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Certify Your Skills?
          </h2>
          <p className="text-xl mb-8">
            Join the Web3 revolution and take control of your professional
            credentials.
          </p>
          <Button
            size="lg"
            className=" rounded-full bg-white text-purple-600 hover:bg-gray-100"
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}
