import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/Add a subheading (1).png'
import img2 from '../../../assets/imgage2.png'
import img3 from '../../../assets/image3.jpg'
import img4 from '../../../assets/image4.jpeg'
import img5 from '../../../assets/image5.jpg'
const Slider = () => {
    return (
        <div className='shadow-blue-500/50 rounded shadow-2xl text-center my-28 mx-auto container'>
              <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div className='relative' >
                    <img src={img2} />
                    <p className='text-5xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold'>"Harmonize Your Summer at Cadence Creek Music School Camp!"</p>

                </div>
                <div className='relative'>
                    <img src={img3} />
                    <p className='text-5xl text-white text-center absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>"Compose Memorable Moments at our Cadence Creek Summer Camp!"</p>

               </div>
                <div className='relative'>
                    <img src={img4} />
                    <p className='text-5xl text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>"Join the Orchestra of Fun at our Epic Music School!"</p>

               </div>
                <div className='relative'>
                    <img src={img5} />
                    <p className='text-5xl text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>"Discover Your Musical Journey with our Enchanting Choir!"</p>

               </div>
            
            </Carousel>
        </div>
    );
};

export default Slider;