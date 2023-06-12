import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from "./Components/Header";
import './style/index.css';
import Documentation from "./pages/Documentation";
import Tutorials from "./pages/Tutorials";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="Container">
      <Header/>
      <Routes>
         <Route exact path='/' element={<Home />}/> 
        <Route exact path='/documentation' element={<Documentation/>}/>
        <Route exact path='/tutorials' element={<Tutorials />}/>
        <Route exact path='/about-us' element={<AboutUs />}/>


      </Routes>
     

    </div>
  );
}

export default App;
