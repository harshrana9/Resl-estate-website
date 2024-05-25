import logo from '../../assets/images/logocropped.png';
import { SocialIcon } from 'react-social-icons'


const Footer = () => {
    return (
        <div>
            <footer className="py-10 bg-base-200 text-base-content" style={{backgroundColor: '#03a9fc'}}> 
                <div>
                    <div className="footer flex flex-col md:flex-col lg:flex-row justify-between py-10 container mx-auto px-5">
                        <aside>
                            <img className='w-20' src={logo} alt="" />
                            <p className="text-sm md:text-2xl font-extrabold text-[#ffffff]">Apartment <span className="text-[#ffffff]">GURU</span></p>
                            <p className="text-[#ffffff]">Providing reliable homes since 2000</p>
                        </aside>
                        <nav>
                            <header className="text-lg text-[#ffffff] font-extrabold mb-4">Services</header>
                            <a className="link link-hover text-[#ffffff]">Branding</a>
                            <a className="link link-hover text-[#ffffff]">Design</a>
                            <a className="link link-hover text-[#ffffff]">Marketing</a>
                            <a className="link link-hover text-[#ffffff]">Advertisement</a>
                        </nav>
                        <nav>
                            <header className="text-lg text-[#ffffff] font-extrabold mb-4">Company</header>
                            <a className="link link-hover text-[#ffffff]">About us</a>
                            <a className="link link-hover text-[#ffffff]">Contact</a>
                            <a className="link link-hover text-[#ffffff]">Available Homes</a>
                            <a className="link link-hover text-[#ffffff]">Press kit</a>
                        </nav>
                        <nav>
                            <header className="text-lg text-[#ffffff] font-extrabold mb-4">Social Links</header>
                            <div className="flex flex-wrap justify-center gap-4">
                                <SocialIcon url="https://twitter.com"></SocialIcon>
                                <SocialIcon url="https://www.facebook.com/"></SocialIcon>
                                <SocialIcon url="https://instagram.com"></SocialIcon>
                                <SocialIcon url="https://www.linkedin.com/"></SocialIcon>
                            </div>

                            <div>
                                <header className="text-lg text-[#ffffff] font-extrabold mt-4">Address</header>
                                <h2 className="text-[#ffffff]">Rajpura, PB</h2>
                            </div>
                        </nav>
                        <div>
                            <header className="text-lg text-[#ffffff] font-extrabold mb-4">Contact</header>
                            <div className="my-1">
                                <h2 className="font-bold text-[#ffffff]">Phone Number</h2>
                                <p className="text-[#ffffff]">+91-8008569690</p>
                                <p className="text-[#ffffff]">+91-8008569691</p>
                            </div>

                            <div>
                                <h2 className="font-bold text-[#ffffff]">Web Address</h2>
                                <p className="text-[#ffffff]">info@apartmentguru.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;