import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {Home} from '../src/components/Home/home'
import {Data} from '../src/Data/data'
import {Web3} from './Web3/web3'
const App = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Data' element={<Data/>}/>
        <Route path='/Cam' element={<Web3/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
