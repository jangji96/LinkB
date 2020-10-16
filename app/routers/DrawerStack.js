import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabStack from './TabStack';
import CustomDrawer from '../screens/CustomDrawer';
import SettingScreen from '../screens/SettingScreen';
import MyInfoScreen from '../screens/MyInfo/MyInfoScreen';
import AnnouncementlScreen from '../screens/Announcement/AnnouncementScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="TabStack" component={TabStack}/>
      <Drawer.Screen name="Setting" component={SettingScreen}/>      
      <Drawer.Screen name="MyInfo" component={MyInfoScreen}/>
      <Drawer.Screen name="Announcement" component={AnnouncementlScreen}/> 
    </Drawer.Navigator>
  );
}
