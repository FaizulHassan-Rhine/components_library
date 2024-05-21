import React, { useEffect, useState } from "react";

const ColorChange = () => {
  const colors = ["#92c952", "#771796", "#24f355", "#d32776", "#f66b97"];



  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v === 4 ? 0 : v + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center mt-20">
      <h1 className="h-40 w-40 duration-700 ease-in transform text-center " style={{ backgroundColor: colors[value] }}>Change Color</h1>
    </div>
  );
};

export default ColorChange;
