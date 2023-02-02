import './App.css';
import Inputs from "./components/Inputs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    document.head.innerHTML+=`
    <meta name='description' content='گولدی'/>
    <meta name='keywords' content='گولدی'/>
    `
  }, []);
  return (
    <div className="App">
      <div className='container-sm mt-5 d-flex justify-content-center align-items-center'>
        <div className='data-wrapper'>
          <h1 className="p-5 text-uppercase">گولدی</h1>
          <hr />
          <Inputs />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
