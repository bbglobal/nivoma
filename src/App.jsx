import { Header, Footer, Impressum, DataProtection, Home, Wissen } from './components';
import { Routes, Route } from "react-router-dom";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import './App.css';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/impressum" element={<Impressum />}></Route>
        <Route path="/data-protection" element={<DataProtection />}></Route>
        <Route path="/wissen" element={<Wissen />}></Route>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
