import React from 'react';
import "./animation.css"
import round from './images/shbg.png'
import model from "./images/shoes_2.png"

const TestAnimation = () => {
    return (
        <div className='mt-10'>
            <div className="circle-animation ">
                <div className="round">
                    <img src={round} alt="" />
                </div>
                <div className="ring"></div>
                <div className="model">
                    <img src={model} alt="model" />
                </div>
            </div>
        </div>

    );
};

export default TestAnimation;