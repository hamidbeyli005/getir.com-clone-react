import React from "react";

function MobileApp() {
  return (
    <div className="MobileApp">
      <div className="left">
        <h2>Getir'i indirin!</h2>
        <span>
          İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
        </span>
        <ul>
          <li>
            <a href="/">
              <img
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="mobile-img">
        <img
          src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default MobileApp;
