import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import faEnvelope1 from '../assets/images/tooth1.png';
import faEnvelope2 from '../assets/images/tooth1.png';
import faEnvelope3 from '../assets/images/tooth1.png';
import Banner from "../components/Banner";


export default function Contactus() {


    const { isLoggedIn } = useSelector(state => state.auth);
    if (isLoggedIn) {

    }
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <Header />
            <Banner title="Contact Us"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12 mx-5 font-mono " >
                <div className="mx-auto flex flex-row items-center " data-aos="fade-up"
                >
                    <div className="flex flex-col ">
                        <img src={faEnvelope1} />
                    </div>
                    <div className="flex flex-col text-left ">
                        <h4 className="text-2xl">Address</h4>
                        <p>55 West, 33rd Street</p>
                        <p>5th Floor, New York</p>
                    </div>
                </div>
                <div className="mx-auto flex flex-row items-center" data-aos="fade-up"
                >
                    <div className="flex flex-col">
                        <img src={faEnvelope2} />
                    </div>
                    <div className="flex flex-col text-left">
                        <h4 className="text-2xl">Email</h4>
                        <p>info@dentzone.com</p>
                        <p>email@gmail.com</p>
                    </div>
                </div>
                <div className="mx-auto flex flex-row  items-center " data-aos="fade-up"
                >
                    <div className="flex flex-col">
                        <img src={faEnvelope3} />
                    </div>
                    <div className="flex flex-col text-left">
                        <h4 className="text-2xl">Phone</h4>
                        <p>(888) 4421-1238-32</p>
                        <p>(888) 838-1238-645</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
