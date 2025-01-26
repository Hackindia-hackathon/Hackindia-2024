import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { AwardIcon } from 'lucide-react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-12  mt-10 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center space-x-2 mb-4">
              <AwardIcon className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold">Web3Certs</span>
            </a>
            <p className="text-sm text-gray-400">
              Empowering professionals with blockchain-verified certifications.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex ">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-full rounded-r-none  "
              />
              <Button type="submit" className="rounded-full rounded-l-none bg-[#FFC107] text-black ">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Web3Certs. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer