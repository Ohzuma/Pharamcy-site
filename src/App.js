import "./App.css";
import bootstrap from 'bootstrap/dist/css/bootstrap-grid.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Index from "./component/Hero/Index";
import AboutIndex from "./component/About/Index";
import DeparmentIndex from "./component/Department/Index";
import DoctortIndex from "./component/Dotor/Index";
import OfferIndex from './component/Offers/Index'
import FaqIndex from './component/Faq/Index'
import Appointment from "./component/Appointment/appointment";
import Footer from './footer/footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Index />
        <AboutIndex />
        <DeparmentIndex />
        <DoctortIndex />
        <OfferIndex />
        <FaqIndex />
        <Appointment/>
        <Footer/>
        <Routes>{/* <Route path='/' element={<Hero/>} /> */}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
