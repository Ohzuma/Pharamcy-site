import "./App.css";
import bootstrap from 'bootstrap/dist/css/bootstrap-grid.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Index from "./component/Hero/Index";
import AboutIndex from "./component/About/Index";
import Footer from './component/footer/footer'
import ContactIndex from './component/Contact/Index'
import FaqIndex from './component/Faq/Index'
import DepartmentIndex from './component/Department/Index'
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    Aos.init({})
  })
  return (
    <div className="App">

<BrowserRouter>
<Navbar />
      <Index />
        <AboutIndex />
        <DepartmentIndex/>
        <FaqIndex />
        <ContactIndex/>
      <Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
