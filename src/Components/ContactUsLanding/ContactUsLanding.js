import { useEffect, useState } from "react";
import "./style.css"
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/logoBlack.png"
    const ContactUsLanding = () => {
        const [getOption, setOption] = useState(null);
        const navigate = useNavigate();
    
        function randomDate(end) {
            return new Number(end + Math.random());
        }
        var p = randomDate(new Number()) * 10000000000000000;
        function sendEmail(e) {
            e.preventDefault();
    
            getOption && emailjs.sendForm(
                "service_1zfatsb",
                "template_0ciuxfr",
                e.target,
                "user_3TcS4pRKMgpo7fArsKmSf"
            )
                .then(
                    (result) => {
                        console.log(result.text);
                        // window.location.href = "./thank-you/" + p;
                        navigate(`/thank-you/${p}"`)
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
            e.target.reset();
        }
    
        useEffect(() => {
    
            document.getElementById("hello").innerHTML = p;
    
        }, [])
        return (
            <div className='h-[100vh]'>
                <div className='cover-image '>
                <div className="container mx-auto relative">

                    <div className="absolute top-4 left-[-30px] cursor-pointer">
                        <img className="w-[100px]" src={logo} alt="" />
                    </div>
                    <div className="flex flex-col-reverse md:flex-row  justify-end gap-10 md:gap-20 items-center pt-40">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="flex w-full flex-col border-b-2 border-[#98AE61]  justify-end items-end text-end">
                                <p className="text-4xl font-bold text-[#333333]">GET IN TOUCH</p>
                                <p className="text-4xl font-bold text-[#333333]">WITH US</p>
                                {/* <p className="text-xl  text-white">Contact us</p> */}
                            </div>
                            <form onSubmit={sendEmail} className="w-[350px] sm:w-[400px] md:w-[400px] flex flex-col">
                                <div className="flex flex-col gap-3">
                                    <div id="nameid" className="flex flex-col ">
                                        <input
                                            type="text"
                                            className="py-2 text-xl px-2 bg-[#DEE2E3] rounded-md  outline-none border-b-2 border-[#D2D2D2]  "
                                            placeholder="Name"
                                            name="name"
                                            required
                                            
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <select  id="inputState"
                                            onChange={(e) => {setOption(e.target.value)}}
                                            className="py-2 pl-1 text-xl bg-[#DEE2E3] font-base rounded-md cursor-pointer outline-none border-b-2 border-[#D2D2D2]"
                                            name="option"
                                            required>
                                            <option value="" className="" selected> Select Option </option>
                                            <option value="Image Editing Services">Image Editing Services</option>
                                            <option value="Video Editing Services">Video Editing Services</option>
                                            <option value="3D/CGI Services">3D/CGI Services</option>
                                            {/* <option>Retouched.ai</option> */}
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            type="email"
                                            className="py-2 px-2 text-xl bg-[#DEE2E3] text-black rounded-md outline-none border-b-2 border-[#D2D2D2]"
                                            placeholder="Email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            type="text"
                                            className="py-2 px-2 text-xl bg-[#DEE2E3] outline-none rounded-md border-b-2 border-[#D2D2D2]"
                                            placeholder="Subject"
                                            name="subject"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <textarea
                                            className="py-2 px-2 text-xl bg-[#DEE2E3] outline-none rounded-md border-b-2 border-[#D2D2D2]"
                                            id=""
                                            cols="20"
                                            rows="3"
                                            placeholder="Your message"
                                            name="message"
                                            required
                                        ></textarea>
                                    </div>

                                    <div hidden>
                                        <textarea
                                            cols="30"
                                            rows="3"
                                            type="number"
                                            className=""
                                            name="uniqueid"
                                            id="hello"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <div className="text-center">
                                            <input
                                                type="submit"
                                                id="button-19"
                                                className="bg-[#7c9c30] py-3 px-16 text-white  cursor-pointer font-bold rounded-3xl"
                                                value="SUBMIT"
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>

                </div>
            </div>
        );
    };

    export default ContactUsLanding;