import { Feather, Ionicons } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { theme } from "../constants/theme";
import styles from "../styles/welcome.style";

function WelcomeView() {
    return (
        <View>
            <View style={styles.topContainer}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require("../../assets/images/map-logo.jpg")} 
                        style={styles.logo} 
                    />
                </View>
            </View>

            <View style={styles.searchContainer}>
                <TouchableOpacity onPress={() => {
                    console.log("Search button tapped");
                }}>
                    <Feather name="search" size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput  
                        placeholder="What are you looking for"
                        style={styles.searchInput}
                    />
                </View>
                <View style={styles.searchBtn}>
                    <Ionicons 
                        name="camera-outline" 
                        size={36} 
                        color={theme.colors.offWhite} 
                    />
                </View>
            </View>
        </View>
    );
}

export default WelcomeView;