import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Products from './components/products'
import Footer from './components/footer'
import box from './assets/4x4box.svg'
import Contact from './components/contact'

function App() {
  return (
    <>
      <img src={box} alt="" className="
        min-w-[500px] w-[calc(100vw+100px)] fixed z-0 bottom-[-50px] right-[-50px]
        lg:w-[calc(100vh+100px)] lg:top-[-50px] lg:bottom-[unset] lg:right-[50px]
      "/>
      <Router basename='/awx-corp'>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/products" element={<Products path="dpib-miniatur"/>} />
          <Route path="/products/:productid" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App