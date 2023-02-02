import './App.css';
import Inputs from "./components/Inputs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Helmet from 'react-helmet';


function App() {

  return (
    <div className="App">
      <Helmet>
        <title>گولدی</title>
        <meta name='description' content='گولدی' />
      </Helmet>
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
