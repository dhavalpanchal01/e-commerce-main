import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// header 
import Header from './components/Header/Header';

// pages 
import Home from './components/Pages/Home'
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Products from './components/Pages/Products';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import Cart from './components/Pages/Cart';

// footer 
import Footer from './components/Footer/Footer';
import Policy from './components/Pages/Policy';
import TermsOfService from './components/Pages/TermsOfService';
import ProductDetailCard from './components/ProductCards/ProductDetailCard';


import Profile from './components/Pages/Profile';







function App() {
  return (
    <>
    <BrowserRouter>

    <Header />

      <Routes>

        
          {/* header navigation  */}
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/cart' element={<Cart />}/>

          <Route path='profile' element={<Profile />}/>


          {/* product navigation  */}
          <Route path={`/products/:id`} element={<ProductDetailCard />} /> 

    


          {/* footer navigation  */}
          <Route path='/privacy-policy' element={<Policy />}/>
          <Route path='/terms-of-service' element={<TermsOfService />}/>
      </Routes>

      <Footer />

    </BrowserRouter>
    </>
  );
}

export default App;


//  <div className="flex">
// {Array.from({ length: 5 }, (_, index) => (
//   <i
//     key={index}
//     className={`fa fa-star${index < Math.floor(product.rating) ? ' text-yellow-400' : ' text-gray-400'}`}
//   ></i>
// ))}
// </div> 
