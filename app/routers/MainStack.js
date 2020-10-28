import React from "react";
import MainScreen from "../screens/Main/MainScreen";
import DetailScreen from "../screens/Detail/DetailScreen";
import ApplyScreen from "../screens/Apply/ApplyScreen";
import ApplyCompleteScreen from "../screens/ApplyComplete";
import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export default function App({navigation,route}) {
  return (
    <MainStack.Navigator headerMode='none' screenOptions={{animationEnabled:false}}>
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Detail" component={DetailScreen} />      
      <MainStack.Screen name="Apply" component={ApplyScreen} />     
      <MainStack.Screen name="ApplyComplete" component={ApplyCompleteScreen} />
    </MainStack.Navigator>
  );
}
