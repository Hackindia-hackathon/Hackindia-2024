import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import {useWalletContext} from "../../contexts/useWalletContext.jsx";
import {useEffect} from "react";

function Navbar() {

    const {account, connectWallet, disconnectWallet} = useWalletContext();

    useEffect(() => {
    }, [account]);

    return (
        <nav className="sticky top-0 z-10 w-full flex justify-between items-center px-5 sm:px-8 py-4 border-b-2 border-b-tertiary backdrop-blur bg-primary/50">
            <Link className="font-semibold text-2xl" to="/">freezone</Link>
            <div>
                {
                    account ?
                        <Button label="Disconnect" onClick={disconnectWallet}/> :
                        <Button label="Connect" onClick={connectWallet}/>
                }
            </div>
        </nav>
    );
}

export default Navbar;