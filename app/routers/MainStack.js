import React from "react";
import MainScreen from "../screens/Main/MainScreen";
import DetailScreen from "../screens/Detail/DetailScreen";
import ApplyScreen from "../screens/Apply/ApplyScreen";
import ApplyCompleteScreen from "../screens/ApplyComplete";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import MyInfoScreen from "../screens/MyInfo/MyInfoScreen";

const MainStack = createStackNavigator();

export default function App({ navigation, route }) {
  React.useLayoutEffect(() => {

    if(route.state!=undefined){
      if (route.state.index == 0) {
        navigation.dangerouslyGetParent().setOptions({ gestureEnabled: true })
      } else {
        navigation.dangerouslyGetParent().setOptions({ gestureEnabled: false })
      }
    }

  }, [navigation, route]);
  return (
    <MainStack.Navigator headerMode='none' screenOptions={{ animationEnabled: false }}>
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Detail" component={DetailScreen} options={{ drawerLockMode: 'locked-closed' }} />
      <MainStack.Screen name="Apply" component={ApplyScreen} />
      <MainStack.Screen name="MyInfo" component={MyInfoScreen} options={{gestureEnabled:false}}/>
      <MainStack.Screen name="ApplyComplete" component={ApplyCompleteScreen} />
    </MainStack.Navigator>
  );
}
