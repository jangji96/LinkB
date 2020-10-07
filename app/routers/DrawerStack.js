import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import TabStack from './TabStack';
import CustomDrawer from '../screens/CustomDrawer';
import SettingScreen from '../screens/SettingScreen';
import MainStack from '../routers/MainStack';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="MainStack" component={MainStack}/>
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}
