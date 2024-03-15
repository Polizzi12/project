import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar';
import Subnav from './components/subnav';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
    <Navigation/>
    <Subnav/>
    <Footer/>
    </div>
  );
}

export default App;
