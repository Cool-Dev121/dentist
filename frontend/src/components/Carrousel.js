import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Autoplay, Pagination, Navigation } from "swiper";

import img1 from '../assets/images/dentistry1.png';
import img2 from '../assets/images/dentistry2.png';
import img3 from '../assets/images/dentistry5.jpg';


export default function Carrousel() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mx-5"
            >

                <SwiperSlide>
                    <img
                        className="object-fill w-full h-screen"
                        src={img2}
                        alt="image slide 2"
                    />
                    <div className="text absolute" >
                        <h1 className=" text-9xl text-left">Denturo</h1>
                        <p className="text-3xl w-1/2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-screen relative"
                        src={img1}
                        alt="image slide 1"
                    />
                    <div className="text absolute" >
                        <h1 className=" text-9xl text-left" >Denturo</h1>
                        <p className="text-3xl w-1/2" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-screen"
                        src={img3}
                        alt="image slide 3"
                    />
                    <div className="text absolute" >
                        <h1 className=" text-9xl text-left" >Denturo</h1>
                        <p className="text-3xl w-1/2" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}