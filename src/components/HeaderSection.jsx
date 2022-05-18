import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function HeaderSection() {
  const [selected, setSelected] = useState("AZ");
  const phone = {
    US: "+1",
    GB: "+50",
    FR: "+36",
    AZ: "+994",
    TR: "+90",
    TD: "+72",
    AU: "+48",
  };

  var settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    touchMove: false,
  };

  const [inputValue, setInputValue] = useState("");
  const placeholderRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const checkInput = () => {
      if (inputValue !== "") {
        placeholderRef.current.classList.add("active");
        inputRef.current.classList.remove("invalid");
        placeholderRef.current.nextSibling.classList.remove("invalid");
        placeholderRef.current.parentNode.parentNode.nextSibling.classList.remove(
          "invalid"
        );
      } else {
        placeholderRef.current.classList.remove("active");
        inputRef.current.classList.toggle("invalid");
        placeholderRef.current.nextSibling.classList.toggle("invalid");
        placeholderRef.current.parentNode.parentNode.nextSibling.classList.toggle(
          "invalid"
        );
      }
    };
    checkInput();
  }, [inputValue]);

  return (
    <div className="HeaderSection">
      <div className="gradient"></div>
      <div className="left">
        <img
          src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
          alt=""
        />
        <h1>Dakikalar içinde kapınızda</h1>
      </div>
      <Slider {...settings}>
        <div>
          <img
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
            alt=""
          />
        </div>
      </Slider>
      <div className="right">
        <h5>Giriş yap veya kayıt ol</h5>
        <form>
          <div className="top">
            <ReactFlagsSelect
              countries={Object.keys(phone)}
              customLabels={phone}
              selected={selected}
              onSelect={(code) => setSelected(code)}
            />
            <label>
              <input
                ref={inputRef}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                type="text"
              ></input>
              <span ref={placeholderRef} className="placeholder">
                Telefon Numarası
              </span>
              <HiOutlineExclamationCircle></HiOutlineExclamationCircle>
            </label>
          </div>
          <div className="invalid-message">
            Lütfen telefon numaranızı giriniz.
          </div>

          <button>Telefon numarası ile devam et</button>
        </form>
      </div>
    </div>
  );
}

export default HeaderSection;
