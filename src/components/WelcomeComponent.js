import React, { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import { theme } from "../constants/theme";
import styles from "../styles/welcome.style";

function WelcomeView() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigation = useNavigation(); // Access navigation

  const menuOptions = [
    "Football",
    "Basketball",
    "Soccer",
    "Volleyball",
    "Resume Questionnaire",
  ];

  const handleOptionSelect = (option) => {
    setIsMenuVisible(false); // Close the menu
    navigation.navigate("Profile", { selectedOption: option }); // Navigate to ProfileScreen
  };

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
        <TouchableOpacity onPress={() => console.log("Search button tapped")}>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput  
            placeholder="What are you looking for"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.searchBtn}>
          <TouchableOpacity onPress={() => setIsMenuVisible(true)}>
            <Ionicons 
              name="menu-outline" 
              size={36} 
              color={theme.colors.offWhite} 
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Dropdown Menu */}
      <Modal
        isVisible={isMenuVisible}
        onBackdropPress={() => setIsMenuVisible(false)} // Close menu on outside touch
        style={modalStyles.modal}
      >
        <View style={modalStyles.menuContainer}>
          {menuOptions.map((option, index) => (
            <TouchableOpacity 
              key={index} 
              style={modalStyles.option} 
              onPress={() => handleOptionSelect(option)}
            >
              <Text style={modalStyles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
}

export default WelcomeView;

const modalStyles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  menuContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
});
