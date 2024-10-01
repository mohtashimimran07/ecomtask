
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
// import Hero from './Components/Hero/hero.jsx';
// import Popular from './Components/Popular/Popular.jsx';
// import Offers from './Components/Offers/Offers.jsx';
// import NewCollections from './Components/NewCollections/NewCollections.jsx';
// import NewsLetter from './Components/NewsLetter/NewsLetter.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Shop from './Pages/Shop.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>

        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      
      {/* <Hero />
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/> */}
      <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
