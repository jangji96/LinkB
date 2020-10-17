import React from "react";
import MainScreen from "../screens/Main/MainScreen";
import DetailScreen from "../screens/Detail/DetailScreen";
import ApplyScreen from "../screens/Apply/ApplyScreen";
import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export default function App({navigation,route}) {
  return (
    <MainStack.Navigator headerMode='none' screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Detail" component={DetailScreen} />      
      <MainStack.Screen name="Apply" component={ApplyScreen} />
    </MainStack.Navigator>
  );
}
