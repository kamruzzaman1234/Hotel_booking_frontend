import { CiLocationOn } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
const Category = () => {
    return (
        <div className="py-[80px] mt-[-110px]">
            <div className="container">
                <div className="max-w-[1200px] w-full mx-auto bg-white shadow-lg border-4 border-yellow-500 rounded-lg">
                    <div className="py-[20px] px-[20px] space-y-6">
                        <h2 className="text-center uppercase font-bold mb-2 sm:text-[20px] md:text-[26px] lg:text-[35px]">Popular Page</h2>
                        <div className="flex space-x-3 justify-center">
                            <button className="bg-none border-1 border-yellow-500 px-4 py-2 rounded font-medium uppercase text-black">Dhaka</button>
                            <button className="bg-none border-1 border-yellow-500 px-4 py-2 rounded font-medium uppercase text-black">Rangpur</button>
                            <button className="bg-none border-1 border-yellow-500 px-4 py-2 rounded font-medium uppercase text-black">Chattagram</button>
                            <button className="bg-none border-1 border-yellow-500 px-4 py-2 rounded font-medium uppercase text-black">Syhlet</button>
                        </div>
                        <div className="max-w-[1100px] w-full mx-auto">
                            <div className="grid grid-cols-4 gap-3">
                                <div className="card shadow-lg p-3 space-y-2 border-1 border-yellow-500">
                                    <div className="flex space-x-3 items-center">
                                        <div><CiLocationOn className="text-[26px] font-bold text-warning" /></div>
                                        <div><h3 className="text-[18px] font-bold">Dhaka</h3></div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <h4 className="flex items-center space-x-2"> <span><CiBookmarkCheck className="text-[26px] text-warning"/></span> <span className="font-bold">Check</span> </h4>
                                        <h4 className="font-medium">Dhaka, Bangladesh</h4>
                                    </div>
                                </div>
                                <div className="card shadow-lg p-3 space-y-2 border-1 border-yellow-500">
                                    <div className="flex space-x-3 items-center">
                                        <div><CiLocationOn className="text-[26px] font-bold text-warning" /></div>
                                        <div><h3 className="text-[18px] font-bold">Dhaka</h3></div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <h4 className="flex items-center space-x-2"> <span><CiBookmarkCheck className="text-[26px] text-warning"/></span> <span className="font-bold">Check</span> </h4>
                                        <h4 className="font-medium">Dhaka, Bangladesh</h4>
                                    </div>
                                </div>
                                <div className="card shadow-lg p-3 space-y-2 border-1 border-yellow-500">
                                    <div className="flex space-x-3 items-center">
                                        <div><CiLocationOn className="text-[26px] font-bold text-warning" /></div>
                                        <div><h3 className="text-[18px] font-bold">Dhaka</h3></div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <h4 className="flex items-center space-x-2"> <span><CiBookmarkCheck className='text-[26px] text-warning' /></span> <span className="font-bold">Check</span> </h4>
                                        <h4 className="font-medium">Dhaka, Bangladesh</h4>
                                    </div>
                                </div>
                                <div className="card shadow-lg p-3 space-y-2 border-1 border-yellow-500">
                                    <div className="flex space-x-3 items-center">
                                        <div><CiLocationOn className="text-[26px] font-bold text-warning" /></div>
                                        <div><h3 className="text-[18px] font-bold">Dhaka</h3></div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <h4 className="flex items-center space-x-2"> <span><CiBookmarkCheck className="text-[26px] text-warning"/></span> <span className="font-bold">Check</span> </h4>
                                        <h4 className="font-medium">Dhaka, Bangladesh</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Category;