import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import ExclusiveOffer from "../../components/ExclusiveOffer/ExclusiveOffer";
import ImageArea from "../../components/ImageArea/ImageArea";
import PropertyType from "../../components/PropertyType/PropertyType";

const Home = ()=>{
    return(
        <div>
            <Banner></Banner>
            <Category></Category>
            <ExclusiveOffer></ExclusiveOffer>
            <ImageArea></ImageArea>
            <PropertyType></PropertyType>
        </div>
    )
}
export default Home;