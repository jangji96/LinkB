import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from "../screens/Main/MainScreen";
import SearchScreen from "../screens/SearchScreen";
import NoticeScreen from "../screens/NoticeScreen";
import MessengerScreen from "../screens/MessengerScreen";
import DetailScreen from "../screens/Detail/DetailScreen";
import { createStackNavigator } from "@react-navigation/stack";

import TabStack from "./TabStack"

const MainStack = createStackNavigator();

export default function App({navigation,route}) {
  return (
    <MainStack.Navigator headerMode='none'>
      <MainStack.Screen name="Tab" component={TabStack} />
      <MainStack.Screen name="Detail" component={DetailScreen} options={{ tabBarVisible:false}} />
    </MainStack.Navigator>
  );
}
