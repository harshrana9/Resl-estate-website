import { FaGripfire } from "react-icons/fa";
import { motion } from "framer-motion";
import news1 from '../../../assets/images/news1.jpg';
import news2 from '../../../assets/images/news2.jpg';
import news3 from '../../../assets/images/news3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const RecentNews = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div>
            
        </div>
    );
};

export default RecentNews;