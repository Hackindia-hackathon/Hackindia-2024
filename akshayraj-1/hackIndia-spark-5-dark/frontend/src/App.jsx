import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./components/UI/Navbar.jsx";
import MainBackground from "./components/Backgrounds/MainBackground.jsx";
import {WalletProvider} from "./contexts/useWalletContext.jsx";


function App() {
    return (
        <WalletProvider>
            <MainBackground>
                <Navbar/>
                <Suspense>
                    <Outlet/>
                </Suspense>
            </MainBackground>
        </WalletProvider>
    );
}

export default App;
