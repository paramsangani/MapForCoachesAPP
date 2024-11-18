import { SafeAreaView } from "react-native";
import WelcomeComponent from "../components/WelcomeComponent";
import HomeCarouselComponent from '../components/HomeCarouselComponent';
import HomeHeadingComponent from "../components/HomeHeadingComponent";
import HomeProductListScreen from "./HomeProductListScreen";
import HomeInfoComponent from "../components/HomeInfoComponent";
//import HomeHeading from "../components/HomeHeading.js"

const HomeScreen=()=>{
    return (
    <SafeAreaView>
        <WelcomeComponent />
        <HomeInfoComponent />
        <HomeCarouselComponent />
        <HomeHeadingComponent />
        <HomeProductListScreen />
    </SafeAreaView>
    );
}

export default HomeScreen;