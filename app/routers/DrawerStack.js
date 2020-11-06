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
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import DetailScreen from '../screens/Detail/DetailScreen';
import ApplyCompleteScreen from '../screens/ApplyComplete';
import ApplyScreen from '../screens/Apply/ApplyScreen';
import MessengerDetailScreen from '../screens/MessengerDetail/MessengerDetailScreen';
import ScanScreen from '../screens/ScanScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="TabStack" drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="TabStack" component={TabStack}/>    
      <Drawer.Screen name="Apply" component={ApplyScreen} options={{ gestureEnabled: false }}/>     
      <Drawer.Screen name="ApplyComplete" component={ApplyCompleteScreen} options={{ gestureEnabled: false }}/>
      <Drawer.Screen name="MessengerDetail" component={MessengerDetailScreen} options={{ gestureEnabled: false }} />
      <Drawer.Screen name="Setting" component={SettingScreen} options={{gestureEnabled:false}}/>
      <Drawer.Screen name="MyInfo" component={MyInfoScreen} options={{gestureEnabled:false}}/>
      <Drawer.Screen name="Announcement" component={AnnouncementlScreen} options={{gestureEnabled:false}}/>
      <Drawer.Screen name="EventRegistration" component={EventRegistrationScreen} options={{gestureEnabled:false}}/>
      <Drawer.Screen name="OpenComplete" component={OpenCompleteScreen} options={{gestureEnabled:false}}/>
      <Drawer.Screen name="CodeApply" component={CodeApplyScreen} options={{gestureEnabled:false}}/>
      <Drawer.Screen name="Scan" component={ScanScreen} options={{gestureEnabled:false}}/>
    </Drawer.Navigator>
  );
}
