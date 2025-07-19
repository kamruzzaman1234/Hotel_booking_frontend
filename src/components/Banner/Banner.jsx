const Banner = ()=>{
    return(
       <div className="bg-img">
         <div className="overlay z-1">
            <div className="container">
                <div className="max-w-[580px] w-full ">
                    <div className="flex flex-col space-y-4">
                    <p className="mt-4 text-white text-lg md:text-xl font-medium drop-shadow-md">
                        Enjoy your stay with comfort and luxury.
                     </p>
                  <h1 className="text-4xl md:text-5xl text-white font-bold drop-shadow-lg">
                     Welcome to Our Hotel
                </h1>
                <div>
                    <button className="uppercase text-white rounded-lg border-2 broder-white 
                    bg-black px-[35px] py-[12px]">Visit our site</button>
                </div>
                
                    </div>
                </div>
            </div>
        </div>
</div>
    )
}
export default Banner;