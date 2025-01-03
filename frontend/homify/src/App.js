
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';


function App() {
  return (
    <><Layout>
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
       </Routes>
       </Layout>
       
    </>
 );

}

export default App;
