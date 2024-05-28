import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from '@expo/vector-icons';

import Menu from "../screens/Menu";
import ItemPage from "../components/ItemPage";
import Home from "../screens/Home";
import RecipesHome from "../screens/RecipesHome";
import RecipePage from "../screens/RecipePage";
import Customize from "../screens/Customize";
import Order from "../screens/Order";
import Account from "../screens/Account";
import FoodMenu from "../screens/FoodMenu";
import FoodItemPage from "../components/FoodItemPage";
import { COLORS, FONTS, icons } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeRecipeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RecipesHome" component={RecipesHome} />
      <Stack.Screen name="RecipePage" component={RecipePage} />
    </Stack.Navigator>
  );
};

const MenuStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Menu"}
    >
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="ItemPage" component={ItemPage} />
    </Stack.Navigator>
  );
};

const FoodMenuStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"FoodMenu"}
    >
      <Stack.Screen name="FoodMenu" component={FoodMenu} />
      <Stack.Screen name="FoodItemPage" component={FoodItemPage} />
    </Stack.Navigator>
  );
};


const CustomizeOrderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Menu"}
    >
        <Stack.Screen name="Customize" component={Customize} />
        <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
};

const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <LinearGradient
        colors={[COLORS.thepink, COLORS.theyellow]}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
        }}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: "transparent",
          height: 100,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeRecipeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 2,
              }}
            >
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.thepink : COLORS.gray,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.thepink : COLORS.grey,
                  fontSize: 10,
                }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 2,
              }}
            >
              <Image
                source={icons.coffee_cup}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.thepink : COLORS.gray,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.thepink : COLORS.grey,
                  fontSize: 10,
                }}
              >
                MENU
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Customize"
        component={CustomizeOrderStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.bubbleTea}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor: COLORS.white,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Food"
        component={FoodMenuStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 2,
              }}
            >
              <MaterialIcons name="fastfood" size={35} color={
                focused ? COLORS.thepink : "gray"
              }/>
              <Text
                style={{
                  color: focused ? COLORS.thepink : COLORS.grey,
                  fontSize: 10,
                }}
              >
                Food
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 2,
              }}
            >
              <Image
                source={icons.profile}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.thepink : COLORS.gray,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.thepink : COLORS.grey,
                  fontSize: 10,
                }}
              >
                ACCOUNT
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;
