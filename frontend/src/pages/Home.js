import Header from "../components/Header";
import Footer from "../components/Footer";
import Appointment from "../components/Appointment";
// import Carrousel from "../components/Carrousel";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import img2 from '../assets/images/dentistry2.png';
import MapContainer from "../components/SimpleMap";


export default function Home() {


    return (
        <>
            <Header />
            <div className="text-white items-center absolute bottom-48 left-10 font-['Quicksand']"  >
                <h1 className=" text-9xl text-left">Denturo</h1>
                <p className="text-3xl ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                    laoreet justo vitae porttitor porttitor.
                </p>
            </div>
            <img
                className="object-fill w-full max-h-[650px]"
                src={img2}
                alt="image slide 2"
            />
            {/* <Carrousel/> */}
            <About />
            <Testimonials />
            <Appointment />
            <MapContainer/>
            <Footer />
        </>
    )
}
