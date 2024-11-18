import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: theme.sizes.small + 2,
        marginTop: theme.sizes.medium,
    },
    headerTitle: {
        fontSize: theme.sizes.xLarge - 4,
        fontFamily: "Roboto_700Bold",
        textAlign: "center", // Center aligns the text within its container
        flex: 1, // Ensures the title occupies enough space to be centered
    },
    header: {
        flexDirection: "row",
        justifyContent: "center", // Centers child elements in the row
        alignItems: "center", // Aligns items vertically
    },
});

export default styles;