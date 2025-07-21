import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";



const TestimonialSlider = () => {
    const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com", bg: "bg-[#1877F2]" },
    { icon: <FaTwitter />, url: "https://twitter.com", bg: "bg-[#1DA1F2]" },
    { icon: <FaInstagram />, url: "https://instagram.com", bg: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com", bg: "bg-[#0077B5]" },
    { icon: <FaEnvelope />, url: "mailto:example@gmail.com", bg: "bg-[#EA4335]" }, // Gmail
  ];
  return(
    <div className="py-[80px]">
         <div className="container">
            <div className="flex flex-col gap-10"> 
                <div>
                           <h2 className="sm:text-[18px] md:text-[25px]
                         lg:text-[30px] font-bold uppercase text-center">Our client say</h2>
                </div>
                <div>
                     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-[40px] px-[40px] border-r-5 border-t-5 shadow-lg border-yellow-400 py-[20px] rounded-lg">
            <div className="flex flex-col gap-8">
                    <div className="flex justify-center flex-col gap-3 items-center">
                        <FaQuoteLeft className="text-warning text-[50px] text-center"/>
                        <div className="flex gap-2">
                       <FaFacebookF className="text-[24px] text-gray-600" />       
                        <FaTwitter className="text-[24px] text-gray-600" />        
                        <FaInstagram className="text-[24px] text-gray-600" />       
                        <FaLinkedinIn className="text-[24px] text-gray-600" />    
                        <FaEnvelope className="text-[24px] text-gray-600" />   

      
                        </div>
                    </div>
                <div className="flex gap-6 ">
                    <div className="w-[100px] h-[100px]">
                        <img src="https://i.ibb.co/5xrN7r6n/pexels-simon-robben-55958-614810.jpg"
                         alt="" className="w-full h-full rounded-full border-4 border-black"/>
                    </div>
                    <div className="w-[250px] flex flex-col gap-3">
                        <div className="flex gap-1">
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                        </div>
                        <div>
                            <h3 className="text-[18px] text-gray-800 font-bold">Davit John</h3>
                            <p className="text-[15px] text-gray-400">The stay was exceptional! The staff were incredibly welcoming
                             and helpful throughout our trip.</p>
                        </div>

                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="mb-[40px] px-[40px] border-r-5 border-t-5 shadow-lg border-yellow-400 py-[20px] rounded-lg">
            <div className="flex flex-col gap-8">
                    <div className="flex justify-center flex-col gap-3 items-center">
                        <FaQuoteLeft className="text-warning text-[50px] text-center"/>
                        <div className="flex gap-2">
                       <FaFacebookF className="text-[24px] text-gray-600" />       
                        <FaTwitter className="text-[24px] text-gray-600" />        
                        <FaInstagram className="text-[24px] text-gray-600" />       
                        <FaLinkedinIn className="text-[24px] text-gray-600" />    
                        <FaEnvelope className="text-[24px] text-gray-600" />   

      
                        </div>
                    </div>
                <div className="flex gap-6 ">
                    <div className="w-[100px] h-[100px]">
                        <img src="https://i.ibb.co/5xrN7r6n/pexels-simon-robben-55958-614810.jpg"
                         alt="" className="w-full h-full rounded-full border-4 border-black"/>
                    </div>
                    <div className="w-[250px] flex flex-col gap-3">
                        <div className="flex gap-1">
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                        </div>
                        <div>
                            <h3 className="text-[18px] text-gray-800 font-bold">Davit John</h3>
                            <p className="text-[15px] text-gray-400">The stay was exceptional! The staff were incredibly welcoming
                             and helpful throughout our trip.</p>
                        </div>

                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="mb-[40px] px-[40px] border-r-5 border-t-5 shadow-lg border-yellow-400 py-[20px] rounded-lg">
            <div className="flex flex-col gap-8">
                    <div className="flex justify-center flex-col gap-3 items-center">
                        <FaQuoteLeft className="text-warning text-[50px] text-center"/>
                        <div className="flex gap-2">
                       <FaFacebookF className="text-[24px] text-gray-600" />       
                        <FaTwitter className="text-[24px] text-gray-600" />        
                        <FaInstagram className="text-[24px] text-gray-600" />       
                        <FaLinkedinIn className="text-[24px] text-gray-600" />    
                        <FaEnvelope className="text-[24px] text-gray-600" />   

      
                        </div>
                    </div>
                <div className="flex gap-6 ">
                    <div className="w-[100px] h-[100px]">
                        <img src="https://i.ibb.co/5xrN7r6n/pexels-simon-robben-55958-614810.jpg"
                         alt="" className="w-full h-full rounded-full border-4 border-black"/>
                    </div>
                    <div className="w-[250px] flex flex-col gap-3">
                        <div className="flex gap-1">
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                        </div>
                        <div>
                            <h3 className="text-[18px] text-gray-800 font-bold">Davit John</h3>
                            <p className="text-[15px] text-gray-400">The stay was exceptional! The staff were incredibly welcoming
                             and helpful throughout our trip.</p>
                        </div>

                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="mb-[40px] px-[40px] border-r-5 border-t-5 shadow-lg border-yellow-400 py-[20px] rounded-lg">
            <div className="flex flex-col gap-8">
                    <div className="flex justify-center flex-col gap-3 items-center">
                        <FaQuoteLeft className="text-warning text-[50px] text-center"/>
                        <div className="flex gap-2">
                       <FaFacebookF className="text-[24px] text-gray-600" />       
                        <FaTwitter className="text-[24px] text-gray-600" />        
                        <FaInstagram className="text-[24px] text-gray-600" />       
                        <FaLinkedinIn className="text-[24px] text-gray-600" />    
                        <FaEnvelope className="text-[24px] text-gray-600" />   

      
                        </div>
                    </div>
                <div className="flex gap-6 ">
                    <div className="w-[100px] h-[100px]">
                        <img src="https://i.ibb.co/5xrN7r6n/pexels-simon-robben-55958-614810.jpg"
                         alt="" className="w-full h-full rounded-full border-4 border-black"/>
                    </div>
                    <div className="w-[250px] flex flex-col gap-3">
                        <div className="flex gap-1">
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                        </div>
                        <div>
                            <h3 className="text-[18px] text-gray-800 font-bold">Davit John</h3>
                            <p className="text-[15px] text-gray-400">The stay was exceptional! The staff were incredibly welcoming
                             and helpful throughout our trip.</p>
                        </div>

                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="mb-[40px] px-[40px] border-r-5 border-t-5 shadow-lg border-yellow-400 py-[20px] rounded-lg">
            <div className="flex flex-col gap-8">
                    <div className="flex justify-center flex-col gap-3 items-center">
                        <FaQuoteLeft className="text-warning text-[50px] text-center"/>
                        <div className="flex gap-2">
                       <FaFacebookF className="text-[24px] text-gray-600" />       
                        <FaTwitter className="text-[24px] text-gray-600" />        
                        <FaInstagram className="text-[24px] text-gray-600" />       
                        <FaLinkedinIn className="text-[24px] text-gray-600" />    
                        <FaEnvelope className="text-[24px] text-gray-600" />   

      
                        </div>
                    </div>
                <div className="flex gap-6 ">
                    <div className="w-[100px] h-[100px]">
                        <img src="https://i.ibb.co/5xrN7r6n/pexels-simon-robben-55958-614810.jpg"
                         alt="" className="w-full h-full rounded-full border-4 border-black"/>
                    </div>
                    <div className="w-[250px] flex flex-col gap-3">
                        <div className="flex gap-1">
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                        </div>
                        <div>
                            <h3 className="text-[18px] text-gray-800 font-bold">Davit John</h3>
                            <p className="text-[15px] text-gray-400">The stay was exceptional! The staff were incredibly welcoming
                             and helpful throughout our trip.</p>
                        </div>

                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="mb-[40px] px-[40px] border-r-5 border-t-5 shadow-lg border-yellow-400 py-[20px] rounded-lg">
            <div className="flex flex-col gap-8">
                    <div className="flex justify-center flex-col gap-3 items-center">
                        <FaQuoteLeft className="text-warning text-[50px] text-center"/>
                        <div className="flex gap-2">
                       <FaFacebookF className="text-[24px] text-gray-600" />       
                        <FaTwitter className="text-[24px] text-gray-600" />        
                        <FaInstagram className="text-[24px] text-gray-600" />       
                        <FaLinkedinIn className="text-[24px] text-gray-600" />    
                        <FaEnvelope className="text-[24px] text-gray-600" />   

      
                        </div>
                    </div>
                <div className="flex gap-6 ">
                    <div className="w-[100px] h-[100px]">
                        <img src="https://i.ibb.co/5xrN7r6n/pexels-simon-robben-55958-614810.jpg"
                         alt="" className="w-full h-full rounded-full border-4 border-black"/>
                    </div>
                    <div className="w-[250px] flex flex-col gap-3">
                        <div className="flex gap-1">
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                            <FaStar className="text-warning text-[20px]"/>
                        </div>
                        <div>
                            <h3 className="text-[18px] text-gray-800 font-bold">Davit John</h3>
                            <p className="text-[15px] text-gray-400">The stay was exceptional! The staff were incredibly welcoming
                             and helpful throughout our trip.</p>
                        </div>

                    </div>
                </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
                </div>
            </div>
         </div>
    </div>
  )
};

export default TestimonialSlider;
