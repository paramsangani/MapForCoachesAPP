import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "../styles/headings.style";
import { useNavigation } from "@react-navigation/native";

const HomeHeadingComponent = () => {
    const nav = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    New Rivals
                </Text>
                <TouchableOpacity onPress={()=>nav.navigate("ProductList")}>
                    <Entypo name="grid" size={24}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}



export default HomeHeadingComponent