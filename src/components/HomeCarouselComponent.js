import React, { useRef, useEffect, useState } from "react";
import { Text, View, Image, FlatList, Dimensions } from "react-native";
import { theme } from "../constants/theme";

const { width } = Dimensions.get("window");

const images = [
    {
        id: "1A",
        path: require("../../assets/images/american-football-1.jpg"),
    },
    {
        id: "1B",
        path: require("../../assets/images/basketball-2.jpg"),
    },
    {
        id: "1C",
        path: require("../../assets/images/soccer-1.jpg"),
    },
    {
        id: "1D",
        path: require("../../assets/images/volleyball-2.jpg"),
    },
];

const HomeCarouselComponent = () => {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % images.length;
                flatListRef.current?.scrollToOffset({
                    offset: nextIndex * (width - 2 * theme.sizes.medium),
                    animated: true,
                });
                return nextIndex;
            });
        }, 3500); //time for carosel movement

        return () => clearInterval(interval); 
    }, []);

    return (
        <View>
            <View
                style={{
                    height: 200,
                    backgroundColor: theme.colors.offWhite,
                    marginHorizontal: theme.sizes.medium,
                    borderRadius: theme.sizes.medium,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <FlatList
                    ref={flatListRef}
                    data={images}
                    renderItem={({ item }) => (
                        <Image
                            style={{
                                width: width - 2 * theme.sizes.medium,
                                height: "100%",
                                resizeMode: "cover",
                            }}
                            source={item.path}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment="center"
                    decelerationRate="fast"
                    snapToInterval={width - 2 * theme.sizes.medium}
                />
            </View>
        </View>
    );
};

export default HomeCarouselComponent;