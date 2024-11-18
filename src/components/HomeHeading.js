import React from "react";
import { View, Image, StyleSheet, StatusBar } from "react-native";
import { theme } from "../constants/theme";

const HomeHeading = () => {
    return (
        <View style={styles.topContainer}>
            {/* Set the status bar */}
            <StatusBar 
                backgroundColor={theme.colors.gray} // Match the background color
                barStyle="light-content" // Adjust to "dark-content" for better contrast
            />
            
            {/* Logo Container */}
            <View style={styles.logoContainer}>
                <Image
                    source={require("../../assets/images/map-logo.jpg")}
                    style={styles.logo}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        width: "100%", // Full screen width
        backgroundColor: theme.colors.gray, // Grey background for the top section
        paddingTop: StatusBar.currentHeight, // Adjust for the status bar height
        alignItems: "flex-start", // Align logo to the left
        justifyContent: "center", // Center content vertically in the container
    },
    logoContainer: {
        padding: theme.sizes.small, // Spacing around the logo
    },
    logo: {
        width: 140, // Logo width
        height: 55, // Logo height
    },
});

export default HomeHeading;