import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from "../screens/Search/SearchScreen";
import NoticeScreen from "../screens/Notice/NoticeScreen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MainScreen from "../screens/Main/MainScreen";
import MainStack from "../routers/MainStack";
import MessengerScreen from "../screens/Messenger/MessengerScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();

export default function App() {
  //헤더 숨기기
  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Main';
    switch (routeName) {
      case 'Main':
        return true;
      case 'Detail':
        return false;
      case 'Messenger':
        return true;
      case 'MessengerDetail':
        return false;
      case 'Apply':
        return false;
      case 'ApplyComplete':
        return false;
        case 'MyInfo':
        return false;
    }
  }
  
  return (
    //탭바 포커스 옵션 & 아이콘
    <Tab.Navigator initialRouteName='MainStack' tabBarOptions={{showLabel:false, style: { backgroundColor: '#311957',borderTopColor:'#311957' } }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Main') {
            iconName = 'home-sharp'
            color = focused
              ? 'white'
              : '#978cab';
          } else if (route.name === 'Search') {
            iconName = 'search-sharp'
            color = focused
              ? 'white'
              : '#978cab';
          }
          else if (route.name === 'Notice') {
            iconName = 'notifications-sharp'
            color = focused
              ? 'white'
              : '#978cab';
          }
          else if (route.name === 'Messenger') {
            iconName = 'chatbox-ellipses-sharp'
            color = focused
              ? 'white'
              : '#978cab';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })} >
      <Tab.Screen name="Main" component={MainStack}
        options={({ route }) => ({
          tabBarVisible: getHeaderTitle(route)
        })} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notice" component={NoticeScreen} />
      <Tab.Screen name="Messenger" component={MessengerScreen}
        options={({ route }) => ({
          tabBarVisible: getHeaderTitle(route),
        })} />
    </Tab.Navigator>
  );
}
