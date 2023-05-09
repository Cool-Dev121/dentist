import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from '../assets/images/happycouple1.jpeg';

export default function About() {
    useEffect(() => {
        AOS.init({
                duration: 1000,
            });
        AOS.refresh();
      }, []);

    return (
        <>
            <div className="flex flex-row space-x-24  m-24 justify-between text-[#008F9B] font-['Quicksand']">
                <div className="w-1/2 flex flex-col rounded-lg " data-aos="fade-right">
                    <div className="about-left" >
                        <img src={img1} alt="Denturo" className="img-fluid Denturo rounded-lg" />
                        {/* <img src={img1} alt="Denturo" className="img-fluid animated DenturoAnim" /> */}
                    </div>

                </div>
                <div className="w-1/2 flex flex-col items-center">
                    <div className="about-right ">
                        <div className="about-content text-start " data-aos="zoom-in">
                            <h1 className=' text-5xl font-bold text-center'>Welcome to a Family</h1><br/>
                            <p className='text-xl justify-left '>Welcome to Datobbo Dental represents everything going to dentist necessary. We have upgraded your dreaded dentist appointment and transformed it into a relaxing. Consectetur adipisicing elit. Quod ea, consequuntur itaque enim et expedita, optio omnis ipsa magni, perspiciatis totam ipsum! Voluptatibus, neque at.</p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}