import { useState } from 'react'
import MainPage from './Pages/MainPage'
import MainPageDashboard from './Pages/MainPageDashboard'
import './App.css'
import TransactionPage from './Pages/TransactionPage'
import UserExpense from './components/UserExpense';
import Dashboard from './components/Dashboard'
import Card from './components/Card/Card';
import ExistingUser from './components/ExistingUser'
import NewUser from './components/NewUser'

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const Rrouter = createBrowserRouter([
  {
    path:"/",
    element :<MainPage/>,
    children :[ 
      {
        index:true,
        element :<ExistingUser/>
      },{
        path :"/new-user",
        element : <NewUser/>
      }
    ]
  },
  {
    path:"/user/",
    element:<MainPageDashboard/>,
    children : [
      {
        index : true,
        element : <Dashboard />
      },
      {
        path : "/user/expenses",
        element : <UserExpense/>
      },{
        path : "/user/transaction",
        element : <TransactionPage/>
      },{
        path :"/user/card",
        element : <Card/>
      }
    ]
  }
]);

function App() {
 

  return (
    <>
      <RouterProvider router = {Rrouter}/>
     
    </>
  )
}

export default App
