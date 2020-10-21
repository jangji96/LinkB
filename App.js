import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import IntroScreen from './app/screens/IntroScreen';
import LoginScreen from './app/screens/LoginScreen';
import JoinSelectScreen from './app/screens/JoinSelectScreen';
import Join1Screen from './app/screens/Join1Screen';
import Join2Screen from './app/screens/Join2Screen';
import Join3Screen from './app/screens/Join3Screen';
import Join4Screen from './app/screens/Join4Screen';
import DrawerStack from './app/routers/DrawerStack';
import Loading from './app/screens/Loading'
import AsyncStorage from '@react-native-community/async-storage'

const Stack = createStackNavigator();



export default class extends React.Component {
  state = {
    isLoading: true,
    email: 'test',
    initialRouteName: 'test'
  };
  componentDidMount = async () => {
    // 1,000가 1초
    setTimeout(() => { this.setState({ isLoading: false }) }, 1300);

    AsyncStorage.getItem('token').then((result) => {
      const UserInfo = JSON.parse(result);
      this.setState({
        email: UserInfo.email,
        initialRouteName: 'Drawer'
      })
      console.log("getItem");
      console.log("email:" + UserInfo.email);
    }).catch(function (error) {
      console.log('get Error ' + error);
    });

  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator headerMode='none' initialRouteName={this.state.initialRouteName} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Stack.Screen name="Intro" component={IntroScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="JoinSelect" component={JoinSelectScreen} />
            <Stack.Screen name="Join1" component={Join1Screen} />
            <Stack.Screen name="Join2" component={Join2Screen} />
            <Stack.Screen name="Join3" component={Join3Screen} />
            <Stack.Screen name="Join4" component={Join4Screen} />
            <Stack.Screen name="Drawer" component={DrawerStack} />
          </Stack.Navigator>
        </NavigationContainer>);
    }
  }
} 