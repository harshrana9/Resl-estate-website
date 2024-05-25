import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import image1 from '../../../assets/images/7.png';
import image2 from '../../../assets/images/8.png';
import image3 from '../../../assets/images/9.png';
import image4 from '../../../assets/images/10.png';
import { FaGripfire } from 'react-icons/fa';
import { motion } from "framer-motion";



const SwiperSliders = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div className='mb-10'>
            
        </div>
    );
};

export default SwiperSliders;