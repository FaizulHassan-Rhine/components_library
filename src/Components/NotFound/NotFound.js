import React from "react";
import error from "../../images/404.webp";

const NotFound = () => {
  return (
    <div>
      <img className="w-full" src={error} alt="" />
    </div>
  );
};

export default NotFound;
