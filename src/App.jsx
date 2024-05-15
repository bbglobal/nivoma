import {
  Header,
  Footer,
  Impressum,
  DataProtection,
  Home,
  Wissen,
  Datenschutzerklärung,
  Uberuns,
  Karriere,
  Karriereinsight,
  Referenzen,
  Karrieree
} from "./components";
import { Routes, Route } from "react-router-dom";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import './App.css'


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/uberuns" element={<Uberuns />}></Route>
        <Route path="/referenzen" element={<Referenzen />}></Route>
        <Route path="/impressum" element={<Impressum />}></Route>
        <Route path="/data-protection" element={<DataProtection />}></Route>
        <Route path="/wissen" element={<Wissen />}></Route>
        <Route path="/datenschutzerklärung" element={<Datenschutzerklärung />}></Route>
        <Route path="/uberuns" element={<Uberuns />}></Route>
        <Route path="/karrieree" element={<Karrieree />}></Route>
        <Route path="/karriere" element={<Karriere />}></Route>
        <Route path="/karriere-insight" element={<Karriereinsight />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
