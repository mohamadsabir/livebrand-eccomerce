
import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from './componet/Layout';
import Home from './componet/Home';
import About from './componet/About';
import Cloth from './componet/Cloth';
import LogIn from './componet/Login';
import Cart from './componet/Cart';
import SignUp from './componet/Signup';
import Wishlist from './componet/Wishlist';
import Services from './componet/Services';
import Payment from './componet/Payment';
import UserProfilePage from './componet/UserProfilePage';
import BlogPage from './componet/BlogPage';
import Post1Page from './componet/Post1Page';
import Post2Page from './componet/Post2Page';
import Post3Page from './componet/Post3Page';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/" element={<Cloth />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cloth" element={<Cloth />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/UserProfilePage" element={<UserProfilePage />} />
            <Route path="/BlogPage" element={<BlogPage />} />
            <Route path="/post1" element={<Post1Page />} />
            <Route path="/post2" element={<Post2Page />} />
           <Route path="/post3" element={<Post3Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
