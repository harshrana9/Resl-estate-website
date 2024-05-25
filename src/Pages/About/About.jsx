/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGripfire } from "react-icons/fa";
import banner from '../../assets/images/1.png';
import about1 from '../../assets/images/2.png';
import about2 from '../../assets/images/3.png';
import about3 from '../../assets/images/4.png';
import about4 from '../../assets/images/2.png';
import { Helmet } from "react-helmet";


const About = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Apartment GURU | About</title>
            </Helmet>

            


            <div className="container mx-auto px-5 py-14">
                <div>
                    <div>
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
                            <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center">WHO <span className='text-[#03a9fc]'>WE</span> ARE</h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-center"
                        >
                            <p className="mb-5 text-center lg:w-1/2">Join our community of home enthusiasts to share beautiful properties, build connections, and spread happiness one home at a time.</p>
                        </motion.div>
                    </div>
                </div>


                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-14">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1 }}
                            className="flex-1">
                            <img className="w-full h-[420px]" src={about1} alt="" />
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1 }}
                            >
                                <p className="my-5 text-3xl font-bold"><span className=" text-[#03a9fc]">Our</span> Mission</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1 }}
                            >
                                <p>At Apartment GURU, our mission is to transform the real estate experience by providing personalized, professional, and innovative services to our clients. We are dedicated to helping you find not just a house, but a place to call home, ensuring that every step of your journey is seamless and satisfying.</p>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1 }}
                            className="flex-1">
                            <img className="w-full h-[420px]" src={about2} alt="" />
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1 }}
                            >
                                <p className="my-5 text-3xl font-bold"><span className=" text-[#03a9fc]">Our</span> Expertise</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1 }}
                            >
                                <p>With years of experience in the real estate industry, our team of experts brings extensive knowledge and a deep understanding of the market. We specialize in residential, commercial, and rental properties, offering insights and guidance to help you make informed decisions and achieve your real estate goals.</p>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1 }}
                            className="flex-1">
                            <img className="w-full h-[420px]" src={about3} alt="" />
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1 }}
                            >
                                <p className="my-5 text-3xl font-bold"><span className=" text-[#03a9fc]">Community</span> Focus</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1 }}
                            >
                                <p>We believe in building strong, vibrant communities. Our commitment extends beyond transactions; we strive to connect people with neighborhoods that suit their lifestyle and needs. Through community engagement and support, we aim to foster lasting relationships and contribute to the growth and well-being of the areas we serve.</p>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1 }}
                            className="flex-1">
                            <img className="w-full h-[420px]" src={about4} alt="" />
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1 }}
                            >
                                <p className="my-5 text-3xl font-bold"><span className=" text-[#03a9fc]">Innovative</span> Solutions</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1 }}
                            >
                                <p>In an ever-evolving market, we leverage the latest technology and innovative strategies to provide a cutting-edge real estate experience. From virtual tours and online listings to personalized marketing plans, we utilize modern tools to enhance your buying, selling, or renting journey, ensuring efficiency and convenience at every step.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
    );
};

export default About;