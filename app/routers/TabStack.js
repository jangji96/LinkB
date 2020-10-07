import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from "../screens/Main/MainScreen";
import SearchScreen from "../screens/SearchScreen";
import NoticeScreen from "../screens/NoticeScreen";
import MessengerScreen from "../screens/MessengerScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator tabBarOptions={{}}>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notice" component={NoticeScreen} />
      <Tab.Screen name="Messenger" component={MessengerScreen} />
    </Tab.Navigator>
  );
}
