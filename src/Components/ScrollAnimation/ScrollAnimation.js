import React from 'react';
import { useInView } from 'react-intersection-observer';
import image1 from "../../Images/Spice-Box.jpg";

const ScrollAnimation = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.2,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.2,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <div ref={ref1} className={`w-full md:w-1/2 p-6 transition-all duration-1000 ${inView1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <img src={image1} alt="Spice Box" />
        </div>
        <div ref={ref2} className={`w-full md:w-1/2 p-6 transition-all duration-1000 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img src={image1} alt="Spice Box" />
        </div>
        <div ref={ref3} className={`w-full md:w-1/2 p-6 transition-all duration-1000 ${inView3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <img src={image1} alt="Spice Box" />
        </div>
        <div ref={ref4} className={`w-full md:w-1/2 p-6 transition-all duration-1000 ${inView4 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <img src={image1} alt="Spice Box" />
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
