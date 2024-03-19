import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar';
import Subnav from './components/subnav';
import Footer from './components/footer';
import Main from './components/main';
import Maind from './components/main2';
import Maint from './components/main3';


function App() {
  return (
    <div className="App">
    <Navigation/>
    <Subnav/>
    <Main/>
    <Maind/>
    <Maint/>
    <Footer/>
    </div>
  );
}

export default App;
