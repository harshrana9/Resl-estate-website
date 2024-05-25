import { FaGripfire, FaHome, FaPhone } from "react-icons/fa";
import { TbHomeStats } from "react-icons/tb";
import banner from '../../assets/images/1.png';
import banner2 from '../../assets/images/2.png';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Apartment GURU | Contact Us</title>
            </Helmet>


            


            <div className="container mx-auto px-5 pt-5 py-20 mt-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex-1">
                        <div>
                            <div className="flex gap-3">
                                <div className="flex">
                                    <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                                </div>
                                <p className="mb-4 text-xl">Contact Us</p>
                            </div>
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Chandigarh <span className="text-[#03a9fc]">Office</span></h1>
                            <p className="mb-5">Chitkara University is a private university located in Rajpura, Punjab, India. It offers undergraduate programs, post-graduate program and doctoral programs in fields of engineering, management, pharmacy, health sciences, nursing, hospitality, art & design and education.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">Call Us</h3>
                                    <p>+91-8008569690</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        Chitkara University,</h3>
                                    <p>Rajpura, Punjab 140401</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        Have any Questions?</h3>
                                    <p>info@apartmentguru.net</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">Monday — Friday</h3>
                                    <p>9:00 AM — 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1 }}
                        className="flex-1">
                        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.174971800066!2d76.65720287612602!3d30.516091096069417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1716280229533!5m2!1sen!2sin"></iframe>
                    </motion.div>
                </div>

                <div className="divider my-20"></div>

                <div className="flex flex-col-reverse lg:flex-row gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1 }}
                        className="flex-1">
                        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.6649799402235!2d76.87104806645004!3d30.877687766953766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff55d9e0ed113%3A0x34a6cadf9a13d341!2sCHITKARA%20UNIVERSITY%2C%20BADDI!5e0!3m2!1sen!2sin!4v1716280549964!5m2!1sen!2sin"></iframe>
                    </motion.div>

                    <div className="flex-1">
                        <div>
                            <div className="flex gap-3">
                                <div className="flex">
                                    <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                                </div>
                                <p className="mb-4 text-xl">Contact Us</p>
                            </div>
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Himachal Pradesh <span className="text-[#03a9fc]">Office</span></h1>
                            <p className="mb-5">Chitkara University, Himachal Pradesh is a private university located at the HIMUDA Education Hub, near the village Kallujhanda, Solan district, Himachal Pradesh, India. The university was established in 2009 by the Chitkara Educational Trust through the Chitkara University Act, 2008.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">Call Us</h3>
                                    <p>+91-8008569691</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">
                                    Pinjore-Nalagarh NH,</h3>
                                    <p>Baddi, Himachal Pradesh 174103</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        Have any Questions?</h3>
                                    <p>info@apartmentguru.net</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">Monday — Friday</h3>
                                    <p>9:00 AM — 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="divider my-20"></div>


                <div className="px-20 pb-20">
                    <div>
                        <div className="flex justify-center gap-3">
                            <div className="flex">
                                <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                            </div>
                            <p className="mb-4 text-xl">Contact With Us</p>
                        </div>
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-center">Drop us a <span className="text-[#03a9fc]">line below</span></h1>
                        <div className="flex justify-center">
                            <p className="mb-8 text-center w-1/2">Top rated construction packages we pleasure rationally encounter
                                consequences interesting who loves or pursue or desires.</p>
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="flex-1 border rounded-xl p-14">
                            <h2 className="text-2xl font-bold mb-4 text-[#03a9fc]">Feedback From</h2>
                            <div className=" gap-8 mb-6">
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                            </div>
                            <div className="gap-8 mb-6">
                                <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
                            </div>
                            <div className="mb-6">
                                <textarea className="textarea textarea-bordered  textarea-lg w-full" placeholder="Message"></textarea>
                            </div>
                            <button className="btn w-full bg-[#03a9fc] border-[#03a9fc] text-white hover:bg-white hover:text-[#03a9fc] hover:border-[#03a9fc] px-14">Submit</button>
                        </div>


                        <div className="border rounded-xl p-14 flex-1">
                            <div>
                                <h2 className="text-3xl font-bold">Office Address</h2>
                                <hr className="my-3 w-1/3" />
                                <p className="text-lg">Chitkara University, CHD</p>
                            </div>

                            <div className="my-8">
                                <h2 className="text-3xl font-bold">Phone Number</h2>
                                <hr className="my-3 w-1/3" />
                                <p className="text-lg">+91-8008569690</p>
                                <p className="text-lg">+91-8008569691</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">Web Address</h2>
                                <hr className="my-3 w-1/3" />
                                <p className="text-lg">info@apartmentguru.com</p>
                                <p className="text-lg">www.apartmentguru.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
    );
};

export default Contact;