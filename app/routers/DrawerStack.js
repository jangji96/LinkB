import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabStack from './TabStack';
import CustomDrawer from '../screens/CustomDrawer';
import SettingScreen from '../screens/SettingScreen';
import MyInfoScreen from '../screens/MyInfo/MyInfoScreen';
import AnnouncementlScreen from '../screens/Announcement/AnnouncementScreen';
import EventRegistrationScreen from '../screens/EventRegistration/EventRegistrationScreen';
import OpenCompleteScreen from '../screens/OpenCompleteScreen';
import CodeApplyScreen from '../screens/CodeApply/CodeApplyScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="TabStack" drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="TabStack" component={TabStack} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
      <Drawer.Screen name="MyInfo" component={MyInfoScreen} />
      <Drawer.Screen name="Announcement" component={AnnouncementlScreen} />
      <Drawer.Screen name="EventRegistration" component={EventRegistrationScreen} />
      <Drawer.Screen name="OpenComplete" component={OpenCompleteScreen} />      
      <Drawer.Screen name="CodeApply" component={CodeApplyScreen} />
    </Drawer.Navigator>
  );
}
