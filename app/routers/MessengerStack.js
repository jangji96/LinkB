import React from "react";
import MessengerScreen from "../screens/Messenger/MessengerScreen";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import MessengerDetailScreen from "../screens/MessengerDetail/MessengerDetailScreen";

const MessengerStack = createStackNavigator();

export default function App({ navigation, route }) {
  return (
    <MessengerStack.Navigator headerMode='none' screenOptions={{ animationEnabled: false }}>
      <MessengerStack.Screen name="Messenger" component={MessengerScreen} />
      <MessengerStack.Screen name="MessengerDetail" component={MessengerDetailScreen} options={{ tabBarVisible: false }} />
    </MessengerStack.Navigator>
  );
}
