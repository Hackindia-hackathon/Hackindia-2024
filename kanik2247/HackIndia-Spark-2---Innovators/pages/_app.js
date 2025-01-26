import "@/styles/globals.css";

// INTERNAL IMPORT
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import {CrowdFundingProvider} from '../Context/CrowdFund';

export default function App({ Component, pageProps }) {
  return (
    <>
    <CrowdFundingProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      </CrowdFundingProvider>
    </>
  );
}
