'use client'
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: any) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    // const googleLogin = async () => {

    // }
    return (
        // <AuthContext.Provider value={{ user, setUser, googleLogin }} >
        <AuthContext.Provider value={{ user, setUser }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);