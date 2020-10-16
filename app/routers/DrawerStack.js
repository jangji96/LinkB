import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabStack from './TabStack';
import CustomDrawer from '../screens/CustomDrawer';
import SettingScreen from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="TabStack" component={TabStack}/>
      <Drawer.Screen name="Setting" component={SettingScreen}/>
    </Drawer.Navigator>
  );
}
