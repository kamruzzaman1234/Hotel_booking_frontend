import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import ExclusiveOffer from "../../components/ExclusiveOffer/ExclusiveOffer";
import Facility from "../../components/Facility/Facility";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import ImageArea from "../../components/ImageArea/ImageArea";
import PopularHotel from "../../components/PopularHotel/PopularHotel";
import PropertyType from "../../components/PropertyType/PropertyType";
import TestimonialSlider from "../../components/Testimonial/Testimonial";
import Testimonials from "../../components/Testimonial/Testimonial";

const Home = ()=>{
    return(
        <div>
            <Banner></Banner>
            <Category></Category>
            <ImageArea></ImageArea>
            <ExclusiveOffer></ExclusiveOffer>
            <PropertyType></PropertyType>
            <Facility></Facility>
            <PopularHotel></PopularHotel>
            <TestimonialSlider></TestimonialSlider>
            <GoogleMap></GoogleMap>
            
        </div>
    )
}
export default Home;