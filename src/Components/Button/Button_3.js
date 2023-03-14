import React from "react";
import "./Button_3.css";

const Button_3 = () => {
  return (
    <div>
      {/* 2nd------------------------------------------------------------- */}
      <h1> Button effects </h1>

      <div class="container">
        <button class="button type1">Effect one</button>

        <button class="button type2">Effect two</button>

        <button class="button type3">Effect three</button>

        <button class="button type4">Effect Four</button>
      </div>

      {/* --------------------------------------------------------- */}
      <span class="title">Basic Box Hover</span>
      <div class="basicBox">
        Hover
        <svg
          width="130"
          height="65"
          viewBox="0 0 130 65"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" fill="none" width="130" height="65" />
        </svg>
      </div>

      <span class="title">Swiggle Box Hover</span>
      <div class="swiggleBox">
        Hover
        <svg
          width="130"
          height="65"
          viewBox="0 0 130 65"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.6,0.5c0,5.4,0,61.5,0,61.5s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0
s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0
c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c0,0,0-56.1,0-61.5H0.6z"
          />
        </svg>
      </div>

      <span class="title">Check Box Hover</span>
      <div class="checkBox">
        Hover
        <svg
          width="140"
          height="65"
          viewBox="0 0 140 65"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" class="button" width="128.8" height="63.9" />
          <rect x="0" y="22.5" class="box" width="20" height="20" />
          <polyline class="checkMark" points="4.5,32.6 8.7,36.8 16.5,29.1" />
        </svg>
      </div>
    </div>
  );
};

export default Button_3;
