import { Link } from "react-router-dom";

const PopularHotel = ()=>{
    return(
        <div className="py-[80px]">
            <div className="container">
                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="sm:text-[18px] md:text-[25px]
                         lg:text-[30px] font-bold uppercase text-center">Popular hotel</h2>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">   
                        <div className="flex flex-col gap-6 shadow-lg px-[20px] py-[16px]
                        rounded-tl-[20px] rounded-br-[20px]">
                            <div className="w-full h-[300px]">
                                <img src="https://i.ibb.co/sJsc6gsQ/h1.jpg" alt="" className="w-full h-full object-cover 
                                rounded-tl-[20px] rounded-br-[20px]"/>
                            </div>
                            <div classNa="flex flex-col">
                                <div>
                                <h3 className="text-[18px] font-bold">Hilton Hotels & Resorts</h3>
                                <p className="text-[14px] font-normal
                                 text-gray-600">A globally luxurious hotel chain, popular
                                  among both business and leisure travelers.</p>
                                </div>
                                <div className="flex justify-between items-center mb-[12px]">
                                    <h4 className="text-[16px] font-medium">1 seat</h4>
                                    <h4 className="font-bold text-yellow-500 text-[18px]">BDT-5000</h4>
                                </div>
                                <div>
                                    <Link to="" className="text-[14px] text-white mt-4 bg-black px-[30px]
                                     py-[8px] font-semibold uppercase rounded-lg">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 shadow-lg px-[20px] py-[16px]
                        rounded-tl-[20px] rounded-br-[20px]">
                            <div className="w-full h-[300px]">
                                <img src="https://i.ibb.co/sJsc6gsQ/h1.jpg" alt="" className="w-full h-full object-cover 
                                rounded-tl-[20px] rounded-br-[20px]"/>
                            </div>
                            <div classNa="flex flex-col">
                                <div>
                                <h3 className="text-[18px] font-bold">Hilton Hotels & Resorts</h3>
                                <p className="text-[14px] font-normal
                                 text-gray-600">A globally luxurious hotel chain, popular
                                  among both business and leisure travelers.</p>
                                </div>
                                <div className="flex justify-between items-center mb-[12px]">
                                    <h4 className="text-[16px] font-medium">1 seat</h4>
                                    <h4 className="font-bold text-yellow-500 text-[18px]">BDT-5000</h4>
                                </div>
                                <div>
                                    <Link to="" className="text-[14px] text-white mt-4 bg-black px-[30px]
                                     py-[8px] font-semibold uppercase rounded-lg">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 shadow-lg px-[20px] py-[16px]
                        rounded-tl-[20px] rounded-br-[20px]">
                            <div className="w-full h-[300px]">
                                <img src="https://i.ibb.co/sJsc6gsQ/h1.jpg" alt="" className="w-full h-full object-cover 
                                rounded-tl-[20px] rounded-br-[20px]"/>
                            </div>
                            <div classNa="flex flex-col">
                                <div>
                                <h3 className="text-[18px] font-bold">Hilton Hotels & Resorts</h3>
                                <p className="text-[14px] font-normal
                                 text-gray-600">A globally luxurious hotel chain, popular
                                  among both business and leisure travelers.</p>
                                </div>
                                <div className="flex justify-between items-center mb-[12px]">
                                    <h4 className="text-[16px] font-medium">1 seat</h4>
                                    <h4 className="font-bold text-yellow-500 text-[18px]">BDT-5000</h4>
                                </div>
                                <div>
                                    <Link to="" className="text-[14px] text-white mt-4 bg-black px-[30px]
                                     py-[8px] font-semibold uppercase rounded-lg">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 shadow-lg px-[20px] py-[16px]
                        rounded-tl-[20px] rounded-br-[20px]">
                            <div className="w-full h-[300px]">
                                <img src="https://i.ibb.co/sJsc6gsQ/h1.jpg" alt="" className="w-full h-full object-cover 
                                rounded-tl-[20px] rounded-br-[20px]"/>
                            </div>
                            <div classNa="flex flex-col">
                                <div>
                                <h3 className="text-[18px] font-bold">Hilton Hotels & Resorts</h3>
                                <p className="text-[14px] font-normal
                                 text-gray-600">A globally luxurious hotel chain, popular
                                  among both business and leisure travelers.</p>
                                </div>
                                <div className="flex justify-between items-center mb-[12px]">
                                    <h4 className="text-[16px] font-medium">1 seat</h4>
                                    <h4 className="font-bold text-yellow-500 text-[18px]">BDT-5000</h4>
                                </div>
                                <div>
                                    <Link to="" className="text-[14px] text-white mt-4 bg-black px-[30px]
                                     py-[8px] font-semibold uppercase rounded-lg">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularHotel;