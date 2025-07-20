import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const ExclusiveOffer = ()=>{
    return(
        <div className="py-[80px]">
            <div className="container">
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="sm:text-[18px] md:text-[25px]
                         lg:text-[30px] font-bold uppercase text-center">Exclusive offers</h2>
                    </div>
                    <div className="max-w-[1200px] w-full mx-auto">
                        <div className="">
                            <Swiper
                              slidesPerView={4}
                              spaceBetween={33}
                              freeMode={true}
                              pagination={{
                              clickable: true,
                                }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper ">
                            <SwiperSlide className="w-full h-[350px] mb-[40px] bbb">
                                <img src="https://i.ibb.co/vxSgvKmw/imggg.jpg"
                                 alt="" className="w-full h-full object-cover rounded-lg"/>
                                 <div className="blue rounded-lg space-y-4">
                                        <h3 className="font-bold text-[16px]">Up to 78% discount on Domestic</h3>
                                        <p className="text-[14px]">Up to more discount in our site. Our site 
                                        is the most powerful  domestic </p>
                                        <Link to="" className="px-[24px] py-[10px] border border-white">View Details</Link>
                                 </div>
                            </SwiperSlide>
                             <SwiperSlide className="w-full h-[350px] mb-[40px] bbb">
                                <img src="https://i.ibb.co/vxSgvKmw/imggg.jpg"
                                 alt="" className="w-full h-full object-cover rounded-lg"/>
                                 <div className="blue rounded-lg space-y-4">
                                        <h3 className="font-bold text-[16px]">Up to 78% discount on Domestic</h3>
                                        <p className="text-[14px]">Up to more discount in our site. Our site 
                                        is the most powerful  domestic </p>
                                        <Link to="" className="px-[24px] py-[10px] border border-white">View Details</Link>
                                 </div>
                            </SwiperSlide>
                             <SwiperSlide className="w-full h-[350px] mb-[40px] bbb">
                                <img src="https://i.ibb.co/vxSgvKmw/imggg.jpg"
                                 alt="" className="w-full h-full object-cover rounded-lg"/>
                                 <div className="blue rounded-lg space-y-4">
                                        <h3 className="font-bold text-[16px]">Up to 78% discount on Domestic</h3>
                                        <p className="text-[14px]">Up to more discount in our site. Our site 
                                        is the most powerful  domestic </p>
                                        <Link to="" className="px-[24px] py-[10px] border border-white">View Details</Link>
                                 </div>
                            </SwiperSlide>
                             <SwiperSlide className="w-full h-[350px] mb-[40px] bbb">
                                <img src="https://i.ibb.co/vxSgvKmw/imggg.jpg"
                                 alt="" className="w-full h-full object-cover rounded-lg"/>
                                 <div className="blue rounded-lg space-y-4">
                                        <h3 className="font-bold text-[16px]">Up to 78% discount on Domestic</h3>
                                        <p className="text-[14px]">Up to more discount in our site. Our site 
                                        is the most powerful  domestic </p>
                                        <Link to="" className="px-[24px] py-[10px] border border-white">View Details</Link>
                                 </div>
                            </SwiperSlide>
                             <SwiperSlide className="w-full h-[350px] mb-[40px] bbb">
                                <img src="https://i.ibb.co/vxSgvKmw/imggg.jpg"
                                 alt="" className="w-full h-full object-cover rounded-lg"/>
                                 <div className="blue rounded-lg space-y-4">
                                        <h3 className="font-bold text-[16px]">Up to 78% discount on Domestic</h3>
                                        <p className="text-[14px]">Up to more discount in our site. Our site 
                                        is the most powerful  domestic </p>
                                        <Link to="" className="px-[24px] py-[10px] border border-white">View Details</Link>
                                 </div>
                            </SwiperSlide>
                             <SwiperSlide className="w-full h-[350px] mb-[40px] bbb">
                                <img src="https://i.ibb.co/vxSgvKmw/imggg.jpg"
                                 alt="" className="w-full h-full object-cover rounded-lg"/>
                                 <div className="blue rounded-lg space-y-4">
                                        <h3 className="font-bold text-[16px]">Up to 78% discount on Domestic</h3>
                                        <p className="text-[14px]">Up to more discount in our site. Our site 
                                        is the most powerful  domestic </p>
                                        <Link to="" className="px-[24px] py-[10px] border border-white">View Details</Link>
                                 </div>
                            </SwiperSlide>
                         </Swiper>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExclusiveOffer;