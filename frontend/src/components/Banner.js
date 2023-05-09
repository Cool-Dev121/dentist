

import expertDentist from '../assets/images/tooth.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


export default function Banner(props) {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="flex flex-wrap items-center bg-[#008F9B] text-white">
                <div className="md:w-1/2 text-center" data-aos="fade-up">
                    <h1 className='text-5xl font-mono'>{props.title}</h1>
                    <span className="ml-2 text-xl">Home Page - {props.title}</span>
                </div>
                <div className="md:w-1/2 h-1/2 py-24 px-12">
                    <img src={expertDentist} alt="expertDentist" className=" " />
                </div>
            </div>

        </>
    );
}