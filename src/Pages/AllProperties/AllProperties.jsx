import PropertyCard from "./PropertyCard";
import useProperty from "../../hooks/useProperty";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaGripfire } from 'react-icons/fa';
import { motion } from "framer-motion";
import image1 from '../../assets/images/12.png';
import image2 from '../../assets/images/11.png';
import image3 from '../../assets/images/4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { backdropClasses } from "@mui/material";



const AllProperties = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    const [properties] = useProperty();

    const verifiedProperties = properties.filter(property => property.status && property.status.toLowerCase() === 'verified' && property.role !== 'fraud');

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');


    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = verifiedProperties.filter(property =>
            property.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase()) && (minPrice === '' || parseFloat(property.minPriceRange) >= parseFloat(minPrice)) && (maxPrice === '' || parseFloat(property.maxPriceRange) <= parseFloat(maxPrice)));
        if (minPrice && maxPrice) {
            results.sort((a, b) => parseFloat(a.minPriceRange) - parseFloat(b.minPriceRange));
        }

        setSearchResults(results);
    }, [searchTerm, verifiedProperties, maxPrice, minPrice]);


    const handleSort = event => {
        event.preventDefault();
        const form = event.target;

        const minPriceRange = form.minPriceRange.value;
        const maxPriceRange = form.maxPriceRange.value;

        setMinPrice(minPriceRange);
        setMaxPrice(maxPriceRange);
    };


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Apartment GURU | All Properties</title>
            </Helmet>
            <div>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    

                    <SwiperSlide>
                        <div className="hero" style={{backgroundAttachment: 'fixed' }}>
                            <div className="hero-overlay bg-opacity-60" style={{backgroundColor: 'white'}}></div>
                            <div className='container mx-auto px-5 py-28 md:py-44 flex flex-col lg:flex-row gap-10'>
                                <div className='flex-1'>
                                    <div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1 }}
                                            className="flex justify-center gap-3">
                                            <div className="flex gap-2">
                                                <div className="flex">
                                                    <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                                                </div>
                                                <p className="mb-4 text-xl text-black">Apartment GURU</p>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-black text-center">ALL <span className='text-[#03a9fc]'> PROPERTIES</span></h1>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1 }}
                                            className="flex justify-center"
                                        >
                                            <p className='text-black w-2/3 text-center'>Discover opulent residences that epitomize elegance and sophistication. Explore a curated collection of high-end properties designed for those with a taste for the extraordinary. Your dream home awaits in our portfolio of luxurious real estate.</p>
                                        </motion.div>
                                    </div>

                                    <div>
                                        <div className="flex justify-start lg:justify-center  my-10 md:ml-0">
                                            <div className="relative w-full lg:w-1/2">
                                                <input value={searchTerm}
                                                    onChange={handleSearchInputChange} type="text" placeholder="Search" className="input input-bordered w-full bg-grey" style={{backgroundColor: '#F2F2F2'}}/>
                                                <button className="btn bg-[#03a9fc] border-[#03a9fc] hover:bg-grey hover:text-[#03a9fc] text-white absolute right-0  hover:border-[#03a9fc]">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="container mx-auto px-5 mb-20">

                <div className="flex justify-center my-10">
                    <form onSubmit={handleSort} className="flex flex-col md:flex-row gap-5">
                        <div className="form-control">
                            <input type="number" name="minPriceRange" placeholder="Min Price Range" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="number" name="maxPriceRange" placeholder="Max Price Range" className="input input-bordered" required />
                        </div>
                        <button className="btn bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white  hover:border-[#03a9fc]">Sort</button>
                    </form>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        searchResults.map(property => <PropertyCard
                            key={property._id}
                            property={property}
                        ></PropertyCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProperties;