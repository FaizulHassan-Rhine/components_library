import React, { useState } from 'react';
import ColorPlate from './ColorPlate';
import './style.css';

const ServiceExplore = () => {
    const [getLinintColor, setLinintColor] = useState(2)
    const [getLaesColor, setLacesColor] = useState(1)
    const [getTongueColor, setTongueColor] = useState(1)
    const [getVampColor, setVampColor] = useState(1)
    const [getQuerterColor, setQuerterColor] = useState(1)
    const [getUpperSoleColor, setUpperSoleColor] = useState(5)
    const [getLowerSoleColor, setLowerSoleColor] = useState(5)

    return (
        <div className='w-full pb-10 pt-12'>
            <div className='container m-auto'>
                <div className='grid grid-cols-6 gap-14'>
                    <div className="col-span-6 h-[340px] md:h-auto md:col-span-4 flex flex-col justify-center items-center relative before:bg-white before:opacity-20 before:absolute before:w-full before:h-full ">
                        <div id='imgWrap' className='relative h-[450px] w-full'>
                            <img id='lining' className='imgLayer absolute bottom-0' src={require('./img/lining/'+getLinintColor+'.png')} />
                            <img id='laces' className='imgLayer absolute bottom-0' src={require('./img/laces/'+getLaesColor+'.png')} />
                            <img id='tongue' className='imgLayer absolute bottom-0' src={require('./img/tongue/'+getTongueColor+'.png')} />
                            <img id='vamp' className='imgLayer absolute bottom-0' src={require('./img/vamp/'+getVampColor+'.png')} />
                            <img id='querterPannel' className='imgLayer absolute bottom-0' src={require('./img/quarter_pannel/'+getQuerterColor+'.png')} />
                            <img id='uperSole' className='imgLayer absolute bottom-0' src={require('./img/upper_sole/'+getUpperSoleColor+'.png')} />
                            <img id='lowerSole' className='imgLayer absolute bottom-0' src={require('./img/lower_sole/'+getLowerSoleColor+'.png')} />
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-2 text-center md:text-left">
                        <div className='pb-3'>
                            <h3 className='text-white text-sm'>Lining color</h3>
                            <div className='pt-3'>
                                <button onClick={() => setLinintColor(2)} className={'rounded-full bg-[#d0ccd2] p-5 mr-2 ' + (getLinintColor == 2 ? ' border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setLinintColor(1)} className={'rounded-full bg-[#d7aa77] p-5 mr-2 ' + (getLinintColor == 1 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setLinintColor(3)} className={'rounded-full bg-[#645e61] p-5 mr-2 ' + (getLinintColor == 3 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setLinintColor(4)} className={'rounded-full bg-[#4d7669] p-5 mr-2 ' + (getLinintColor == 4 ? 'border-shade-color border-2 border-solid' : '')}></button>
                            </div>
                        </div>

                        <div className='pb-3'>
                            <h3 className='text-white text-sm'>Laces color</h3>
                            <div className='pt-3'>
                                <button onClick={() => setLacesColor(1)} className={'rounded-full bg-white p-5 mr-2 ' + (getLaesColor == 1 ? ' border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setLacesColor(2)} className={'rounded-full bg-[#9f9ea9] p-5 mr-2 ' + (getLaesColor == 2 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setLacesColor(3)} className={'rounded-full bg-[#a2baf0] p-5 mr-2 ' + (getLaesColor == 3 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setLacesColor(4)} className={'rounded-full bg-[#565559] p-5 mr-2 ' + (getLaesColor == 4 ? 'border-shade-color border-2 border-solid' : '')}></button>
                            </div>
                        </div>
                        
                        <div className='pb-3'>
                            <h3 className='text-white text-sm'>Tongue color</h3>
                            <div className='pt-3'>
                                <button onClick={() => setTongueColor(1)} className={'rounded-full bg-[#d7aa77] p-5 mr-2 ' + (getTongueColor == 1 ? ' border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setTongueColor(2)} className={'rounded-full bg-[#a3938f] p-5 mr-2 ' + (getTongueColor == 2 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setTongueColor(3)} className={'rounded-full bg-[#52515d] p-5 mr-2 ' + (getTongueColor == 3 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setTongueColor(4)} className={'rounded-full bg-[#333134] p-5 mr-2 ' + (getTongueColor == 4 ? 'border-shade-color border-2 border-solid' : '')}></button>
                            </div>
                        </div>
                        <div className='pb-3'>
                            <h3 className='text-white text-sm'>Vamp color</h3>
                            <div className='pt-3'>
                                <button onClick={() => setVampColor(1)} className={'rounded-full bg-white p-5 mr-2 ' + (getVampColor == 1 ? ' border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setVampColor(2)} className={'rounded-full bg-[#665c60] p-5 mr-2 ' + (getVampColor == 2 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setVampColor(3)} className={'rounded-full bg-[#75768f] p-5 mr-2 ' + (getVampColor == 3 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setVampColor(4)} className={'rounded-full bg-[#d9c4bd] p-5 mr-2 ' + (getVampColor == 4 ? 'border-shade-color border-2 border-solid' : '')}></button>
                            </div>
                        </div>
                        
                        <div className='pb-3'>
                            <h3 className='text-white text-sm'>Quarter pannel color</h3>
                            <div className='pt-3'>
                                <button onClick={() => setQuerterColor(1)} className={'rounded-full bg-[#e44548] p-5 mr-2 ' + (getQuerterColor == 1 ? ' border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setQuerterColor(2)} className={'rounded-full bg-[#403e41] p-5 mr-2 ' + (getQuerterColor == 2 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setQuerterColor(3)} className={'rounded-full bg-[#ffdd61] p-5 mr-2 ' + (getQuerterColor == 3 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setQuerterColor(4)} className={'rounded-full bg-[#42414d] p-5 mr-2 ' + (getQuerterColor == 4 ? 'border-shade-color border-2 border-solid' : '')}></button>
                            </div>
                        </div>
                        
                        <div className='pb-3'>
                            <h3 className='text-white text-sm'>Upper sole color</h3>
                            <div className='pt-3'>
                            <button onClick={() => setUpperSoleColor(5)} className={'rounded-full bg-white p-5 mr-2 ' + (getUpperSoleColor == 5 ? ' border-shade-color border-2 border-solid' : '')}></button>
                            <button onClick={() => setUpperSoleColor(1)} className={'rounded-full bg-[#352f30] p-5 mr-2 ' + (getUpperSoleColor == 1 ? ' border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setUpperSoleColor(2)} className={'rounded-full bg-[#69689e] p-5 mr-2 ' + (getUpperSoleColor == 2 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setUpperSoleColor(3)} className={'rounded-full bg-[#145346] p-5 mr-2 ' + (getUpperSoleColor == 3 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setUpperSoleColor(4)} className={'rounded-full bg-[#cf4f30] p-5 mr-2 ' + (getUpperSoleColor == 4 ? 'border-shade-color border-2 border-solid' : '')}></button>
                            </div>
                        </div>
                        
                        <div className='pb-3'>
                            <h3 className='text-white text-sm'>Lower sole color</h3>
                            <div className='pt-3'>
                            <button onClick={() => setLowerSoleColor(5)} className={'rounded-full bg-white p-5 mr-2 ' + (getLowerSoleColor == 5 ? ' border-shade-color border-2 border-solid' : '')}></button>
                            <button onClick={() => setLowerSoleColor(1)} className={'rounded-full bg-[#352f30] p-5 mr-2 ' + (getLowerSoleColor == 1 ? ' border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setLowerSoleColor(2)} className={'rounded-full bg-[#69689e] p-5 mr-2 ' + (getLowerSoleColor == 2 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setLowerSoleColor(3)} className={'rounded-full bg-[#145346] p-5 mr-2 ' + (getLowerSoleColor == 3 ? 'border-shade-color border-2 border-solid' : '')}></button>
                                <button onClick={() => setLowerSoleColor(4)} className={'rounded-full bg-[#cf4f30] p-5 mr-2 ' + (getLowerSoleColor == 4 ? 'border-shade-color border-2 border-solid' : '')}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceExplore;