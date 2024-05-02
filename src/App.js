import { Header, Footer, Impressum, DataProtection, Home } from './components';
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
