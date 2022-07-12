import React, { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Puff } from "react-loader-spinner";
import App from "./App";

function Loader() {
  const [load, setLoad] = useState(false);
  setTimeout(() => {
    setLoad(true);
  }, 2000);
  return (
    <div>
      {load ? (
        <App />
      ) : (
        <div id="preloader">
          <Puff color="#00BFFF" height={100} width={100} />
        </div>
      )}
    </div>
  );
}

export default Loader;
