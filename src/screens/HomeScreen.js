import { SafeAreaView } from "react-native";
import WelcomeComponent from "../components/WelcomeComponent";
import HomeCarouselComponent from '../components/HomeCarouselComponent';
import HomeHeadingComponent from "../components/HomeHeadingComponent";
import HomeProductListScreen from "./HomeProductListScreen";

const HomeScreen=()=>{
    return (
    <SafeAreaView>
        <WelcomeComponent />
        <HomeCarouselComponent />
        <HomeHeadingComponent />
        <HomeProductListScreen />
    </SafeAreaView>
    );
}

export default HomeScreen;