import "./App.css";
import Cloths from "./components/Cloths";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newarrivals from "./components/Newarrivals";
import TopSelling from "./components/TopSelling";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Cloths/>
        <Newarrivals/>
        <TopSelling/>
        <Customers/>
        <Newsletter/>
        <Footer/>
        <Routes>
          <Route path="/" element={""} />
          <Route path="/shop" element={""} />
          <Route path="/onsale" element={""} />
          <Route path="/new" element={""} />
          <Route path="/brands" element={""} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
