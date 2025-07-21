import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import ExclusiveOffer from "../../components/ExclusiveOffer/ExclusiveOffer";
import ImageArea from "../../components/ImageArea/ImageArea";
import PopularHotel from "../../components/PopularHotel/PopularHotel";
import PropertyType from "../../components/PropertyType/PropertyType";

const Home = ()=>{
    return(
        <div>
            <Banner></Banner>
            <Category></Category>
            <ImageArea></ImageArea>
            <ExclusiveOffer></ExclusiveOffer>
            <PropertyType></PropertyType>
            <PopularHotel></PopularHotel>
        </div>
    )
}
export default Home;