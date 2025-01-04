
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';


function App() {

   
  return (
    <>      
       <Routes>
         <Route path="login" element={<Login />} />
         <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
         </Route> 
       </Routes>
       
       
    </>
 );

}

export default App;
