import { motion } from "framer-motion";
import { FaGripfire } from "react-icons/fa";
import useProperty from "../../../hooks/useProperty";
import PropertyCard from "../../AllProperties/PropertyCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AdvertiseProperty = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const [properties] = useProperty();

    const verifiedProperties = properties.filter(property => property.advertiseStatus && property.advertiseStatus.toLowerCase() === 'verified' && property.role !== 'fraud');
    console.log(verifiedProperties, properties)

    return (
        <div className="container mx-auto px-5 mb-20">
            <div className="mb-14">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1 }}
                    
                    className="flex justify-center">
                    <div className="flex ">
                        <div>
                            <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                        </div>
                        <p className="mb-4 text-xl text-center">Apartment GURU</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1 }}
                >
                    <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center">ADVERTISE <span className='text-[#03a9fc]'>PROPERTY</span></h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center"
                >
                    <p className="mb-5 text-center lg:w-1/2">Explore a diverse range of exquisite properties designed to cater to every lifestyle. Evergreen Estate offers a collection of homes that blend modern comfort with timeless elegance.</p>
                </motion.div>

                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    verifiedProperties.slice(0, 6).map(property => <PropertyCard
                        key={property._id}
                        property={property}
                    ></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default AdvertiseProperty;