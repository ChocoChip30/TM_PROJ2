import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";
import React from "react";
import { COLORS, drinkData, images, SIZES } from "../constants";
import Button from "../components/Button";

const Order = ({ route, navigation }) => {
  const data = route.params ?? {};

  console.log(data);
  return (
    <ImageBackground
    source={images.account}
    style={{ width: "100%", height: "100%", }}
     >
      <View
        style={{
          width: "100%",
          height: 140,
          //flex:1,
          alignItems: "center",
          ...styles.shadow,
          backgroundColor: COLORS.thepink,
          borderBottomColor: COLORS.lightyellow,
          borderBottomWidth: 10,
          position: "absolute",
        }}
      >
        <Text
          style={{
            fontFamily: "Didot-Bold",
            fontSize: 40,
            fontWeight: "bold",
            color: COLORS.white,
            textShadowColor: "rgba(0, 0, 0, 0.5)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
            top: "40%",
          }}
        >
          ORDER
        </Text>
      </View>
      <ScrollView style={{ top: 150 }}>
        <View style={[styles.viewStyle, styles.shadow]}>
          <Text style={styles.eachBoxTitle}>My Order</Text>
          <View>
            {(() => {
              if (Object.keys(data).length === 0) {
                return <View><Text style={styles.tabText}>No custom order</Text></View>;
              } else {
                return (
                  <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.tabTitle}>Base: </Text>
                    <Text style={styles.tabText}>{data.base.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.tabTitle}>Milks: </Text>
                    <Text style={styles.tabText}>{data.milks.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.tabTitle}>Juices: </Text>
                    <Text style={styles.tabText}>{data.juices.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.tabTitle}>Fruit Add-in: </Text>
                    <Text style={styles.tabText}>{data.fruit.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.tabTitle}>Flavors: </Text>
                    <Text style={styles.tabText}>{data.flavors.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.tabTitle}>Toppings: </Text>
                    <Text style={styles.tabText}>{data.toppings.name}</Text>
                    </View>
 
                  </View>
                );
              }
            })()}
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center", margin: 10 }}>
        <Button  label="Place Order" onPress={()=>{
            console.log("added to order")
          }}/>
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.padding * 2,
          }}
        >
          <Image source={images.enjoy} style={{ width: "100%", height: 400 }} />
        </View> */}
        <View style={{ height: 200 }}></View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Order;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  viewStyle: {
    backgroundColor: COLORS.lightyellow,
    width: "95%",
    borderRadius: 7,
    height: 520,
    margin: 5,
    //flex: 1,
    alignSelf: "center",
    padding: 10,
    //position: "absolute"
  },
  eachBoxTitle: {
    color: COLORS.thegreen,
    fontSize: 25,
    padding: 2,
    margin: 4,
    fontFamily: "Didot-Bold",
    fontWeight: "bold",
  },
  tabText: {
    padding: 2,
    fontFamily: "Optima-ExtraBlack",
    fontWeight: "bolder",
    paddingLeft: 10,
    color:  COLORS.thegreen,
    fontSize: 15
  },
  tabTitle: {
    padding: 2,
    fontFamily: "Optima-ExtraBlack",
    fontWeight: "bold",
    paddingLeft: 10,
    color:  COLORS.thegreen,
    fontSize: 15
  }

});
