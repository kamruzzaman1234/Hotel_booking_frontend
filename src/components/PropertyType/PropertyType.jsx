import './type.css'
const PropertyType = ()=>{
    return(
        <div className="py-[80px]">
            <div className="container">
                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="sm:text-[18px] md:text-[25px]
                         lg:text-[30px] font-bold uppercase text-center">Browse by property type in Dhaka</h2>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="flex flex-col space-y-5">
                            <div className="h-[270px] w-full">
                                <img src="https://i.ibb.co/YBHjfbtt/pexels-pixabay-262048.jpg" alt=""  
                                className="h-full w-full object-cover rounded-lg"/>
                            </div>
                            <div className="">
                                <h3 className="font-bold text-[18px] mb-3">Hotels</h3>
                                <p className="gap-5 flex"><span className="font-medium text-gray-600 text-[16px]">25 Jul-27 Jul</span>
                                 <span className="font-medium text-[16px] text-gray-600">2 aduls</span></p>
                                 <p className="font-medium text-[16px] text-gray-600">170 available</p>
                            </div>
                        </div>

                         <div className="flex flex-col space-y-5">
                            <div className="h-[270px] w-full">
                                <img src="https://i.ibb.co/604Qw60c/roomjj6.jpg" alt=""  
                                className="h-full w-full object-cover rounded-lg"/>
                            </div>
                            <div className="">
                                <h3 className="font-bold text-[18px] mb-3">Apartment</h3>
                                <p className="gap-5 flex"><span className="font-medium text-gray-600 text-[16px]">25 Jul-27 Jul</span>
                                 <span className="font-medium text-[16px] text-gray-600">2 aduls</span></p>
                                 <p className="font-medium text-[16px] text-gray-600">170 available</p>
                            </div>
                        </div>

                         <div className="flex flex-col space-y-5">
                            <div className="h-[270px] w-full">
                                <img src="https://i.ibb.co/tTYbYVF3/room5.jpg" alt=""  
                                className="h-full w-full object-cover rounded-lg"/>
                            </div>
                            <div className="">
                                <h3 className="font-bold text-[18px] mb-3">Resorts</h3>
                                <p className="gap-5 flex"><span className="font-medium text-gray-600 text-[16px]">25 Jul-27 Jul</span>
                                 <span className="font-medium text-[16px] text-gray-600">2 aduls</span></p>
                                 <p className="font-medium text-[16px] text-gray-600">170 available</p>
                            </div>
                        </div>

                         <div className="flex flex-col space-y-5">
                            <div className="h-[270px] w-full">
                                <img src="https://i.ibb.co/PZWsQtxq/room3.jpg" alt=""  
                                className="h-full w-full object-cover rounded-lg"/>
                            </div>
                            <div className="">
                                <h3 className="font-bold text-[18px] mb-3">Villas</h3>
                                <p className="gap-5 flex"><span className="font-medium text-gray-600 text-[16px]">25 Jul-27 Jul</span>
                                 <span className="font-medium text-[16px] text-gray-600">2 aduls</span></p>
                                 <p className="font-medium text-[16px] text-gray-600">170 available</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyType;