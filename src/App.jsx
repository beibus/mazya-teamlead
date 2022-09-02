import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import Promo from './pages/Promo/Promo'
import Footer from './Components/Footer/Footer'
import Selections from './Containers/Selections/Selections';
import SelectionExact from './Containers/Selections/SelectionExact';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="details/:id" element={<Details />}/>
        <Route path="promo" element={<Promo />}/>
        <Route path="selection" element={<Selections />}/>
        <Route path="selection/:id" element={<SelectionExact />}/>
        </Routes>
        <Footer/>
    </div>
  );
}
export default App;

