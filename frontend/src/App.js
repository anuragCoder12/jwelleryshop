
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Hero from './components/pages/hero/Hero';
import Products from './components/pages/products page/Products';

function App() {
  return (
  <div>
<Router>
<Navbar/>
  <Routes>
<Route path='/' Component={Hero}/>
<Route path='/:_id' Component={Products}/>
  </Routes>
  <Footer/>
</Router>
   
    
    
    
    </div>
  );
}

export default App;
