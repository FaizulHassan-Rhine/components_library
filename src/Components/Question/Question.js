import React, { useState } from "react";

const Question = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the selected option
        console.log(selectedOption);
    };

    return (
        <div className="container mx-auto bg-green-100 flex flex-col w-[700px] h-[400px] py-4 mt-32">
            <h1 className="text-6xl text-center font-bold mb-12">Question & Answer</h1>

            <form className="" onSubmit={handleSubmit}>
                <div className="mb-4 ">
                    <label className="block text-4xl font-semibold mb-6 text-center">What is your favorite color?</label>
                    <div
                        className={`flex items-center text-3xl gap-3 justify-center mb-4 ${selectedOption === 'option1' ? 'bg-red-500' : ''
                            }`}
                    >
                        <input
                            type="radio"
                            id="option1"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            className="mr-2 h-6 w-6 cursor-pointer"
                        />
                        <label className="cursor-pointer" htmlFor="option1">Option 1</label>
                    </div>
                    <div
                        className={`flex items-center text-3xl gap-3 justify-center mb-4 ${selectedOption === 'option2' ? 'bg-red-500' : ''
                            }`}
                    >
                        <input
                            type="radio"
                            id="option2"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            className="mr-2 h-6 w-6 cursor-pointer"
                        />
                        <label className="cursor-pointer" htmlFor="option2">Option 2</label>
                    </div>
                    <div
                        className={`flex items-center text-3xl gap-3 justify-center mb-4 ${selectedOption === 'option3' ? 'bg-red-500' : ''
                            }`}
                    >
                        <input
                            type="radio"
                            id="option3"
                            value="option3"
                            checked={selectedOption === 'option3'}
                            onChange={handleOptionChange}
                            className="mr-2 h-6 w-6 cursor-pointer"
                        />
                        <label className="cursor-pointer" htmlFor="option3">Option 3</label>
                    </div>
                    <div
                        className={`flex items-center text-3xl gap-3 justify-center  mb-4 ${selectedOption === 'option4' ? 'bg-red-500' : ''
                            }`}
                    >
                        <input
                            type="radio"
                            id="option4"
                            value="option4"
                            checked={selectedOption === 'option4'}
                            onChange={handleOptionChange}
                            className="mr-2 h-6 w-6 cursor-pointer"
                        />
                        <label className="cursor-pointer" htmlFor="option4">Option 4</label>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="bg-green-500 hover:bg-orange-500  text-3xl text-white font-bold py-2 px-8 mt-5 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Question;
