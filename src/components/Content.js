import React from 'react'
import ImageEggAndBread from '../images/egg2.jpg';
import Img2 from '../images/bread-2796393_1920.jpg';


const Content = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center bg-white py-4o h-screen">
            <img src={ImageEggAndBread} alt="egg" title="img 1" className="rounded h-2/4 mb-20 shadow-xl"/>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-2xl mb-2 items-center">
                    Egg Muffins
                </h3>
                <p className="mb-2 text-2xl">
                    Crispy, delicious, nutricious
                </p>
                <span className="mb-2">N500</span>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white py-4o h-screen">
            <img src={Img2} alt="egg" title="img 1" className="rounded h-2/4 mb-20 shadow-xl"/>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-2xl mb-2 items-center">
                    Egg Muffins
                </h3>
                <p className="mb-2 text-2xl">
                    Crispy, delicious, nutricious
                </p>
                <span className="mb-2">N500</span>
            </div>
        </div>
        </>
    )
}

export default Content
