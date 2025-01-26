'use client'

import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdKey } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { useAuthContext } from "@/components/context/authContext";

export default function AuthPage() {
    const { googleLogin } = useAuthContext();
    const signIn = async () => {
        googleLogin();
    }
    return (
        <div className="w-screen min-h-screen flex items-center">
            <div className="w-full md:w-8/12 flex flex-col justify-center items-center z-10 backdrop-blur-sm">
                <img src="/logo.svg" alt="logo" className="max-w-[40px]" />
                <div className="w-11/12 mx-auto">
                    <div className="w-full mx-auto flex justify-between h-[70px] items-center">
                        <FaFacebookSquare className="text-4xl h-4/6 w-[50px] text-blue-600 bg-white rounded-lg" />
                        <p className="w-11/12 text-center border border-white p-2 rounded-lg">Continue with Facebook</p>
                    </div>
                    <div className="w-full mx-auto flex justify-between h-[70px] items-center">
                        <FcGoogle className="text-4xl h-4/6 w-[50px] bg-white rounded-lg" />
                        <p onClick={() => { signIn() }} className="w-11/12 text-center border border-white p-2 rounded-lg hover:bg-white hover:text-black hover:border-black transition-all cursor-pointer">Continue with Google</p>
                    </div>
                    <div className="w-full mx-auto flex justify-between h-[70px] items-center">
                        <FaSquareXTwitter className="text-4xl h-4/6 w-[50px] text-black bg-white rounded-lg" />
                        <p className="w-11/12 text-center border border-white p-2 rounded-lg">Continue with X</p>
                    </div>
                    <div className="w-full mx-auto flex justify-between h-[70px] items-center">
                        <MdKey className="text-4xl h-4/6 w-[50px] bg-[#CB2742] p-2 rounded-lg" />
                        <p className="w-11/12 text-center border border-white p-2 rounded-lg">Import Private Key</p>
                    </div>
                    <div className="w-full mx-auto flex justify-between h-[70px] items-center">
                        <IoNewspaper className="text-4xl h-4/6 w-[50px] bg-[#CB2742] p-2 rounded-lg" />
                        <p className="w-11/12 text-center border border-white p-2 rounded-lg">Import Mneuonic</p>
                    </div>
                </div>

            </div>
            <img src="/auth.svg" alt="auth" className="fixed right-0 max-h-full object-contain max-w-[500px] w-1/2" />
        </div>
    );
}