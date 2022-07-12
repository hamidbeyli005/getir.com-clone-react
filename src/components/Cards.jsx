import React from "react";

function Cards() {
  return (
    <div className="Cards">
      <ul>
        <li>
          <div className="image">
            <img
              src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
              alt=""
            />
          </div>
          <span className="title">Her siparişinize bir kampanya</span>
          <span className="altTitle">
            Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
          </span>
        </li>
        <li>
          <div className="image">
            <img
              src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
              alt=""
            />
          </div>
          <span className="title">Dakikalar içinde kapınızda</span>
          <span className="altTitle">
            Getir’le siparişiniz dakikalar içinde kapınıza gelir.
          </span>
        </li>
        <li>
          <div className="image">
            <img
              src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
              alt=""
            />
          </div>
          <span className="title">Binlerce çeşit mutluluk</span>
          <span className="altTitle">
            Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.{" "}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Cards;
