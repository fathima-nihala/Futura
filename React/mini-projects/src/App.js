import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route, RouterProvider, Router } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assets/women_banner.png'
import men_banner from './Components/Assets/men_banner.png'
import kidz_banner from './Components/Assets/kidz_banner.png'
import LatestCollection from './Pages/LatestCollection';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatagory  banner={men_banner} catagory="men"/>}/>
        <Route path='/womens' element={<ShopCatagory banner={women_banner} catagory="women"/>}/>
        <Route path='/kids' element={<ShopCatagory banner={kidz_banner} catagory="kids"/>}/>
        <Route path='/latest' element={<LatestCollection/>}></Route>
        <Route path='/product' element={<Product/>}> 
          <Route path=':productId' element={<Product/>}/>
        </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
