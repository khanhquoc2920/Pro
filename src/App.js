
import { BrowserRouter , Router,Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Main from './page/Main';
import Footer from './component/Footer';
import Product from './page/Product';
function App() {
  return (

    <>

  <Header/>
  
  <Main/>
              
  <Footer/>

  </>


  );
}

export default App;
