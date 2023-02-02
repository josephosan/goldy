import React from "react";

export default function Footer() {
  return (
    <>
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
              <h3 className="text-uppercase mb-4 mt-3">لینک ها</h3>

              <ul className="list-unstyled mb-0" style={{ "marginLeft": "2.5rem" }}>
                <li>
                  <a href="https://github.com/josephosan" target="_black" className="text-white">گیت هاب من</a>
                </li>
                <li>
                  <a href="https://github.com/josephosan/goldy" target="_black" className="text-white">کد پروژه</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h3 className="text-uppercase mb-4 mt-3">ارتباط بامن </h3>

              <ul className="list-unstyled mb-0" style={{ "marginLeft": "2.5rem" }}>
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
          <a className="text-white" target="_blank" href="https://josephosan.info">  joseph.o</a>
        </div>
        
      </footer>
    </>
  );
}