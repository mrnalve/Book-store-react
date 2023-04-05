import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
    {/* Header part starts */}
    <Header></Header>
    {/* Header part ends */}
    <div className='min-h-[100vh - 136px]'> 
    <Outlet></Outlet>
    </div>
    {/* Footer part */}
    <Footer></Footer>
    </div>
  );
};

export default App;