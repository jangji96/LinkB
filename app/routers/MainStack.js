import React from "react";
import MainScreen from "../screens/Main/MainScreen";
import DetailScreen from "../screens/Detail/DetailScreen";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export default function App({navigation,route}) {
  return (
    <MainStack.Navigator headerMode='none'>
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Detail" component={DetailScreen} />
    </MainStack.Navigator>
  );
}
