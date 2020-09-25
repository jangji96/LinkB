/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, TabRouter } from 'react-navigation';
import { createStackNavigator, HeaderBackground } from 'react-navigation-stack';
import {
  StatusBar
} from 'react-native';
import IntroScreen from './app/screens/IntroScreen';
import LoginScreen from './app/screens/LoginScreen';
import TabStack from "./app/routers/TabStack";
import DrawerStack from "./app/routers/DrawerStack";
import Join1Screen from "./app/screens/Join1Screen";
import Join2Screen from "./app/screens/Join2Screen";
import Join3Screen from "./app/screens/Join3Screen";
import Join4Screen from "./app/screens/Join4Screen";
import JoinSelectScreen from "./app/screens/JoinSelectScreen";

StatusBar.setHidden(true, 'none');

const RootStack = createStackNavigator( 
  {
    Intro: {
      screen:IntroScreen,
      navigationOptions: {
        headerShown: false ,
        borderBottomWidth:0,
      }
    },
    Login: {
      screen:LoginScreen,
      navigationOptions: {
        headerTintColor:'white',
        title: "LinkB",
        headerTitleAlign:'center',
        borderBottomWidth:0,
        headerStyle: {
          elevation: 0,
          backgroundColor: '#704591',
        }
      }
    },
    JoinSelect: {
      screen : JoinSelectScreen,
      navigationOptions: {
        animationEnabled:false,
        headerTintColor:'white',
        title: "LinkB",
        headerTitleAlign:'center',
        borderBottomWidth:0,
        headerStyle: {
          elevation: 0,
          backgroundColor: '#704591',
        }
      }
    },
    Join1: {
      screen : Join1Screen,
      navigationOptions: {
        animationEnabled:false,
        headerTintColor:'white',
        title: "LinkB",
        headerTitleAlign:'center',
        borderBottomWidth:0,
        headerStyle: {
          elevation: 0,
          backgroundColor: '#704591',
        }
      }
    },
    Join2: {
      screen : Join2Screen,
      navigationOptions: {
        animationEnabled:false,
        headerTintColor:'white',
        title: "LinkB",
        headerTitleAlign:'center',
        borderBottomWidth:0,
        headerStyle: {
          elevation: 0,
          backgroundColor: '#704591',
        }
      }
    },
    Join3: {
      screen : Join3Screen,
      navigationOptions: {
        animationEnabled:false,
        headerTintColor:'white',
        title: "LinkB",
        headerTitleAlign:'center',
        borderBottomWidth:0,
        headerStyle: {
          elevation: 0,
          backgroundColor: '#704591',
        }
      }
    },
    Join4: {
      screen : Join4Screen,
      navigationOptions: {
        animationEnabled:false,
        headerTintColor:'white',
        title: "LinkB",
        headerTitleAlign:'center',
        borderBottomWidth:0,
        headerStyle: {
          elevation: 0,
          backgroundColor: '#704591',
        }
      }
    },
    Drawer: {
      screen : DrawerStack,
      navigationOptions: {
        headerShown: false ,
        borderBottomWidth:0,
      }
    }
  }
)

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
