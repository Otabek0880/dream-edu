import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import HomePage from './pages/home/HomePage';
import Footer from "./pages/footer/Footer"
function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
  </div>
  );
}

export default App;
