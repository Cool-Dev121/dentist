import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import expertDentist1 from '../assets/images/dentistry3.png';
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner";

export default function Aboutus() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <Header />
            <Banner title="About Us"/>

            <div className="flex flex-wrap py-16">
                <div className="order-2 md:order-1 w-full  mx-auto md:mx-0 px-2">
                    <div className="section-title text-center">
                        <h1 className="text-3xl font-bold">About Us</h1>
                    </div>
                    <p className="w-10/12 mx-auto mt-6 text-lg text-center md:text-left">
                        Since 2023, Donturo Dentistry has been proud to combine modern techniques and high-tech equipment. Dr. Ralf and his team deliver a personalized and comfortable dental care experience unlike any other dentist.
                    </p>
                </div>
            </div>
            <div className="expert-dentist mx-12 my-12 justify-between">
                <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-6/12 px-4">
                        <img src={expertDentist1} alt="expertDentist" className="img-fluid rounded-2xl shadow" />
                    </div>
                    <div className="w-full lg:w-6/12 px-4 mt-5 lg:mt-0">
                        <div className="expertDentist-txt">
                            <h2 className="text-3xl font-bold mb-4">Experienced Dentist</h2>
                            <p className="text-lg mb-4">Smiling comes naturally to Dr. Ralf, author of ‘Denturo’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thousands of patients.</p>
                            <p className="text-lg">Dr. Ralf believes in providing her patients with more than just world class dental care. He also helps patients recognize the vital connection between dental health and whole body health. A graduate of the University of California’s School of Dentistry, Dr. Ralf is a leader in the movement to bring environmental sanity and well-being into the dental world for future.</p>
                        </div>
                    </div>
                </div>

            </div>


            <Footer />
        </>
    )
}
