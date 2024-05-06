import {
  Header,
  Footer,
  Impressum,
  DataProtection,
  Home,
  Wissen,
  Datenschutzerklärung,
} from "./components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/impressum" element={<Impressum />}></Route>
        <Route path="/data-protection" element={<DataProtection />}></Route>
        <Route path="/wissen" element={<Wissen />}></Route>
        <Route
          path="/datenschutzerklärung"
          element={<Datenschutzerklärung />}
        ></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
