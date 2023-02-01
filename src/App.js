import './App.css';
import Inputs from "./components/Inputs";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='container-sm mt-5 d-flex justify-content-center align-items-center'>
        <div className='data-wrapper'>
          <h1 className="p-5 text-uppercase">گولدی</h1>
          <hr />
          <Inputs />
        </div>
      </div>

      <footer style={{ "marginTop": "15rem" }} className="bg-primary text-white text-lg-start my-footer">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h3 className="text-uppercase mb-5">اپ گولدی</h3>

              <p>
              این اپ برای شما، خریدار طلا طراحی شده! همون طور که میدونید، برای محاسبه قیمت طلا موقع خرید از فروشگاه، فرمول ثابتی هست. متاسفانه بعضی فروشنده ها با این فرموله ور میرن و به ی قیمت آبدارتر میرسن. اینجاست که این اپ میاد وسط😃.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h3 className="text-uppercase">لینک ها</h3>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://github.com/josephosan" target="_black" className="text-white">گیت هاب من</a>
                </li>
                <li>
                  <a href="#!" target="_black" className="text-white">کد پروژه</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h3 className="text-uppercase">ارتباط بامن </h3>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://t.me/josephosan" target="_black" className="text-white">تلگرام من</a>
                </li>
                <li>
                  <a href="#!" className="text-white">josephosan1381@gmail.com</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        
        <div className="text-center p-3">
        طراحی شده توسط  
          <a className="text-white" href="https://josephosan.info">  joseph.o</a>
        </div>
        
      </footer>
    </div>
  );
}

export default App;
