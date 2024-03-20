import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar';
import Subnav from './components/subnav';
import Footer from './components/footer';
import Main from './components/main';
import Maind from './components/main2';
import Maint from './components/main3';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Tvshows from './components/tvshows';
import Detail from './components/detail';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navigation/>
    <Routes>
    <Route path="/" element={<> <Main /><Maind /><Maint /></>} />
    <Route path="/tvshows" element={<><Subnav/> <Tvshows/></>} /> {/* Ho messo Subnav nella pagina tvshows perché pensavo fosse più corretto, anche se nel layout originale si trovava nella pagina principale. */}
    <Route path="/detail" element={<><Detail/></>} /> 
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
