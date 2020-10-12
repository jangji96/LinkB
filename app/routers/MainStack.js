import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from "../screens/Detail/DetailScreen";
import { createStackNavigator } from "@react-navigation/stack";

import TabStack from "./TabStack"

const MainStack = createStackNavigator();

export default function App({ navigation, route }) {
  return (
    <MainStack.Navigator headerMode='none'>
      <MainStack.Screen name="Tab" component={TabStack} />
      <MainStack.Screen name="Detail" component={DetailScreen} options={{ tabBarVisible: false }} />
    </MainStack.Navigator>
  );
}
