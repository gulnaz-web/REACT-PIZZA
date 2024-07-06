// react
import { Route, Routes } from 'react-router-dom';
// pages
import Home from './pages/Home';
// components
import Header from './components/Header/Header';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { useState } from 'react';
// TO DO
// 1. часть стилей перенести в modules.scss

function App() {
   const [searchValue, setSearchValue] = useState('');

   return (
      <div className="wrapper">
         <Header searchValue={searchValue} setSearchValue={setSearchValue} />

         <div className="content">
            <div className="container">
               <Routes>
                  <Route path="" element={<Home searchValue={searchValue} />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/404" element={<NotFound />} />
               </Routes>
            </div>
         </div>
      </div>
   );
}

export default App;
