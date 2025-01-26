import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MetaMaskProvider } from "metamask-react";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { BrowserRouter, RouterProvider } from "react-router-dom"; // Import RouterProvider
import Router from "./Router/Router"; // Import your router
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.tsx";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <MetaMaskProvider>
        {/* <RouterProvider router={Router} /> Use RouterProvider here */}
        <BrowserRouter>
          {" "}
          {/* Wrap your App in BrowserRouter */}
          <App /> {/* Render the main App component */}
        </BrowserRouter>
      </MetaMaskProvider>
    </Provider>
  </StrictMode>
);
