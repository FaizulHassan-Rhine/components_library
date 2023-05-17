import React, { useState } from "react";
import profile from '../../../images/loki.png'
import './profile.css'

const ProfileInfo = () => {


    const [activeLink, setActiveLink] = useState("");



    const [isDiv1Visible, setIsDiv1Visible] = useState(true);
    const [isDiv2Visible, setIsDiv2Visible] = useState(false);
    const [isDiv3Visible, setIsDiv3Visible] = useState(false);

    const showDiv1 = () => {
        setIsDiv1Visible(true);
        setIsDiv2Visible(false);
        setIsDiv3Visible(false);
    };

    const showDiv2 = () => {
        setIsDiv1Visible(false);
        setIsDiv2Visible(true);
        setIsDiv3Visible(false);
    };
    const showDiv3 = () => {
        setIsDiv1Visible(false);
        setIsDiv2Visible(false);
        setIsDiv3Visible(true);
    };

    function handleLinkClick(link) {
        setActiveLink(link);
    }


    return (
        <div className="h-[600px] w-full container mx-auto ">

            <div>
                <h2 className="text-4xl font-bold ">My Dashboard</h2>
                <h2 className="text-xl font-semibold mt-4 text-green-500 ">Faizul Hassan</h2>
            </div>


            <div className=" w-[400px] bg-white sm:w-[500px] md:w-[700px]  border-2 shadow-2xl rounded-lg  h-[350px] mt-8 absolute left-[50%]"
                style={{ transform: 'translateX(-50%)' }}>
                <div className="flex justify-evenly">
                    <button onClick={() => { showDiv1(); handleLinkClick("myPlan") }} className={`text-xs md:text-base px-2 py-1  font-semibold ${activeLink === "myPlan" ? "border-b-4 border-green-500" : ""
                        }`}>My Plan</button>
                    <button onClick={() => { showDiv2(); handleLinkClick("Payment") }} className={`text-xs md:text-base px-2 py-1 font-semibold ${activeLink === "Payment" ? "border-b-4 border-green-500" : ""
                        }`}>Payment & Billing</button>
                    <button onClick={() => { showDiv3(); handleLinkClick("Profile") }} className={`text-xs md:text-base px-2 py-1 font-semibold ${activeLink === "Profile" ? "border-b-4 border-green-500" : ""
                        }`}>Account Settings</button>

                </div>



                {/* Div 1 */}
                {isDiv1Visible &&
                    <div className="w-full h-full bg-blue-100  rounded-lg">

                    </div>}

                {/* Div 2 */}
                {isDiv2Visible &&
                    <div className="w-full h-full bg-green-100 rounded-lg">

                    </div>}

                {/* Div 3 */}
                {isDiv3Visible &&
                    <div className="w-full h-full  rounded-lg flex justify-evenly items-center">
                        <div className="h-16 w-16 sm:h-24 sm:w-24 md:h-40 md:w-40 border-8 border-stone-100 shadow-xl  rounded-full">
                            <img className="h-full w-full rounded-full" src={profile} />
                        </div>
                        <div className="sm:h-16 sm:w-80 md:h-40 md:w-96 flex flex-col justify-center gap-4 ">
                            <div className="flex justify-between gap-2 text-xs sm:text-base border-b border-stone-100 ">
                                <h2 className="font-semibold">Name</h2>
                                <h2>Faizul Hassan <i className="fa-solid text-xs fa-pen-to-square"></i></h2>
                            </div>
                            <div className="flex justify-between gap-2 text-xs sm:text-base border-b border-stone-100">
                                <h2 className="font-semibold">Contact Information</h2>
                                <h2>loki@gmail.com <i className="fa-solid text-xs fa-pen-to-square"></i></h2>
                            </div>
                            <div className="flex justify-between text-xs sm:text-base border-b border-stone-100">
                                <h2 className="font-semibold">ID Password</h2>
                                <h2>******** <i className="fa-solid text-xs fa-pen-to-square"></i></h2>
                            </div>
                            <div className="flex justify-between text-xs sm:text-base border-b border-stone-100">
                                <h2 className="font-semibold">Notification Settings</h2>
                                <h2 className=" flex gap-2"><i className="h-7 cursor-pointer w-7 text-green-500 pt-1 border rounded-full border-stone-200 fa-regular fa-bell"></i><i className="fa-regular cursor-pointer h-7 w-7 pt-1 text-red-500 border rounded-full border-stone-200 fa-bell-slash"></i></h2>
                            </div>

                        </div>

                    </div>}


            </div>


        </div>
    )
}

export default ProfileInfo;