import React from "react";
import "./Button.css";
import { FaPinterestP } from "react-icons/fa";

const Button = () => {
  return (
    <div className="container mx-auto ">
      {/* ------------------------------------------------ */}
      <nav>
        <ul>
          <li>
            home
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li>
            products
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li>
            services
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li>
            contact
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Button;
