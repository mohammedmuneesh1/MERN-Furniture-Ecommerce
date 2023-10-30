import React, { memo } from "react";

const Offer = () => {

  const close = () => {
    let offerhead=document.querySelector(".offer-head")
    offerhead.style.display = "none";
  };
  

  return (
    <div className="offer-head">
      <span>
        Extra 7.5% off ICICI Bank Cards | Offer Extended |
        <a href="https://www.pepperfry.com/">Hurry & shop now! </a>
      </span>
      <span className="material-symbols-outlined close" onClick={close}>
        close
      </span>
    </div>
  );
};

export default memo(Offer);
