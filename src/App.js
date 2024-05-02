import { Header, Footer, Impressum, DataProtection} from './components';
import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
import './App.css';

function App() {
  return (
    <>
    <Header />
      {/* <Routes>
        <Route path='/impressum' element={<Impressum />}></Route>
        <Route path='/data-protection' element={<DataProtection />}></Route>
      </Routes> */}
    <Footer />
    </>
  );
}

export default App;
