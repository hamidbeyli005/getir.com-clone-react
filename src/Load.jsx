import React, { useState } from "react";
import Loader from "./Loader";

function Load() {
  const [load, setLoad] = useState(false);
  
  return (
    <div>
      <Loader  load={load} setLoad={setLoad}></Loader>
    </div>
  );
}

export default Load;
