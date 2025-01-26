
import { FunctionComponent, useEffect ,useState} from "react"
import Navbar from "../navbar"
import {motion} from "framer-motion"



const BaseLayout: FunctionComponent = ({children}) => {
  return (
    <>
    <Navbar />
    <motion.div className={`py-16 overflow-hidden min-h-screen [background-image:radial-gradient(purple,black)] transition-all duration-700 ease-in-out`}>
      <div className=" h-[100vh] w-full p-0 m-0 flex justify-center">
        {children}
      </div>
    </motion.div>
    </>
  )
}

export default BaseLayout