
import Testimonial from "./Testimonial";



export default function Testimonials() {
    const advantages = [
        "Save 50% and more on dentures",
        "Complimentary Comparative Offer",
        "Extended warranty up to 5 years",
        "CE and MPG tested materials",
        "DIN EN ISO controlled quality assurance",
        "PRF For Faster Healing",
];
  
    return (
        <>
            <div className="container my-24 px-6 mx-auto font-['Quicksand'] ">

                <div className="mb-32 text-gray-800 text-center">

                    <h2 className="text-3xl font-bold mb-12 text-[#008F9B]">Better Services</h2>

                    <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12 ">
                        {advantages.map((advantage)=>(
                            <Testimonial advantage={advantage}/>
                        ))}
                    </div>

                </div>

            </div>
        </>


    )
}