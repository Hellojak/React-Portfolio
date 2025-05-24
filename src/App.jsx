import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Portfolio from './Component/Portfolio'
import About from './Component/About'
import Contact from './Component/Contact'
import Testimonials from './Component/Testimonials'
import Footer from './Component/Footer'
import Layout from './Component/Layout'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home'
import NotFound from './Component/NotFound'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>

          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/hero' element={<Hero />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/testimonials' element={<Testimonials />} />
              <Route path='/footer' element={<Footer />} />
               <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
