
import './App.css';
import Navbar from './components/common/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import SoftwareServices from './pages/SoftwareServices';
import Error from './pages/Error';

function App() {
  return (
    <div className='bg-[#000000] w-screen min-h-screen flex flex-col'>
      <header>
        <Navbar/>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/software-services' element={<SoftwareServices/>}/>
        <Route path='*' element={<Error/>}/>
        {/* Open Route - for Only Non Logged in User */}
        {/* <Route path='/login' element={<OpenRoute><Login/></OpenRoute>}/>
        <Route path='/signup' 
          element={<OpenRoute><Signup/></OpenRoute>}/> */}
      </Routes>
    </div>
  );
}

export default App;
