import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import serviceDetailImg from '../assets/images/tooth.png';
import serviceDetailImg2 from '../assets/images/dental_logo2.jpg';
import faPlayCircle from '../assets/images/dentistry3.png';

import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner";



export default function Service() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <Header />
            <Banner title="Service"/>
            <div className=" p-5">

                <div className="flex flex-wrap items-center p-5 ">
                    <div className="md:w-1/2 pr-5">
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2 className="font-semibold text-5xl font-mono">PRF For Faster </h2>
                            <p className="mt-2 text-xl">Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at metus malesuada, nec convallis lacus commodo. Duis blandit neque purus, nec auctor mi sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut, placerat eget urna. Curabitur nec faucibus leo, et laoreet nibh. Pellentesque euismod quam at eros efficitur, vitae venenatis sem consectetur. Donec ut risus ultricies, dictum neque at, bibendum purus. In hac habitasse platea dictumst</p>
                            <p className="mt-2 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius.</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 mx-auto">
                        <img src={serviceDetailImg} alt="expertDentist" className="w-1/2 mx-auto " />
                    </div>
                </div>

            </div>

            <div className=" p-5 bg-footer ">

                <div className="flex flex-wrap items-center p-5  ">
                    <div className="w-1/2">
                        <img src={serviceDetailImg2} alt="expertDentist" className="pt-5 w-1/2 mx-auto" />
                    </div>
                    <div className="w-full lg:w-1/2 font-mono">
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2 className="font-semibold text-2xl text-white ">Composite or Mercury?</h2>
                            <p className="text-white mt-2">Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at metus malesuada, nec convallis lacus commodo. Duis blandit neque purus, nec auctor mi sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut, placerat eget urna. Curabitur nec faucibus leo, et laoreet nibh. Pellentesque euismod quam at eros efficitur, vitae venenatis sem consectetur. Donec ut risus ultricies, dictum neque at, bibendum purus. In hac habitasse platea dictumst.</p>
                            <p className="text-white mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mx-auto my-12 font-mono">
                <div className="flex flex-wrap">
                    <div className=" mx-auto text-center order-last lg:order-none">
                        <div className="section-title">
                            <h1 className="text-4xl font-bold font-mono">Safety First</h1>
                        </div>
                        <p className="m-auto mt-5 w-5/12 text-center content-inner text-xl">
                            Since 1998, Denturo Dentistry has been proud to combine modern techniques and high-tech equipment. Dr. Ralf and his team deliver a personalized and comfortable dental care experience unlike any other Mason dentist.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap mt-8 text-center">
                    <div className="lg:w-6/12 w-full p-4 ">
                        <div className="mx-auto">
                            <div className="mx-auto">
                                <img src={faPlayCircle} className="mx-auto rounded-2xl" />
                            </div>
                            <h5 className="text-lg font-bold mt-4">The Importance Of Complete Dentistry for your Health</h5>
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full p-4">
                        <div className="mx-auto">
                            <div className="mx-auto img2">
                                <img src={faPlayCircle} className="mx-auto rounded-2xl" />
                            </div>
                        </div>
                        <h5 className="text-lg font-bold mt-4">Safety First with CT Scans!</h5>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
