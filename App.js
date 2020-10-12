import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './app/screens/IntroScreen';
import LoginScreen from './app/screens/LoginScreen';
import JoinSelectScreen from './app/screens/JoinSelectScreen';
import Join1Screen from './app/screens/Join1Screen';
import Join2Screen from './app/screens/Join2Screen';
import Join3Screen from './app/screens/Join3Screen';
import Join4Screen from './app/screens/Join4Screen';
import DrawerStack from './app/routers/DrawerStack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode='none'>  
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="JoinSelect" component={JoinSelectScreen} />
      <Stack.Screen name="Join1" component={Join1Screen} />
      <Stack.Screen name="Join2" component={Join2Screen} />
      <Stack.Screen name="Join3" component={Join3Screen} />
      <Stack.Screen name="Join4" component={Join4Screen} />
      <Stack.Screen name="Drawer" component={DrawerStack} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}