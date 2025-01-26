import { createRoot } from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import './index.scss';

import App from './App.jsx';
import Home from "./pages/Home.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="/" element={<Home/>}/>
        </Route>
    )
);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
