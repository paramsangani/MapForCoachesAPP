import { View,Text, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductCardComponent from '../components/ProductCardComponent';
import LottieView from 'lottie-react-native';

const localProductList = [
  {
      id: "1A",
      title:"FOOTBALL",
      //price:"",
      path: require("../../assets/images/football-2.jpg"),
  },
  {
      id: "1B",
      title:"BASKETBALL",
      //price:"",
      path: require("../../assets/images/basketball-1.jpg"),
  },
  {
      id: "1C",
      title:"SOCCER",
      //price:"$400",
      path: require("../../assets/images/soccer-2.jpg"),
  },
  {
    id: "1D",
    title:"VOLLEYBALL",
    //price:"$400",
    path: require("../../assets/images/volleyball-1.jpg"),
},

];

export default function SportsList() {
  
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return ()=>clearTimeout(timer);
  }, []);


  if (loading) {
    return (
      <View style={{ justifyContent:"center", alignItems:"center", flex: 1}}>
        <LottieView 
          source={require("../../assets/jsons/animation2.json")}
          autoPlay
          style={{width:150, height:150}}
          loop
        />
      </View>
    );
  }


  const renderItem = ({item})=>{
    console.log("The vaue of loading is point 1", loading);

    return (
      <ProductCardComponent item={item}/>
    );
  }
  return (
    <SafeAreaView>
      <FlatList 
        data={localProductList}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id}
        numColumns={2}
      />
    </SafeAreaView>
  )
}

