import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
  Button,
  StatusBar
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { TextInput } from "react-native-gesture-handler";

const CustomDrawer = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={{flex:4, alignSelf:'center',justifyContent:'center'}}>
          <Text style={{textAlign:'center'}}>링크비 님</Text>
          <Text>오늘도 좋은하루 보내세요!</Text>
      </View>
      <View style={{flex:7}}>
          <Text style={{marginLeft:'20%',fontSize:20}} >행사목록</Text>
          <Text style={{marginLeft:'20%',fontSize:20,marginTop:'5%'}}>행사참여하기</Text>
      </View>
      <View style={{alignSelf:'baseline',width:'100%'}}>
        <Button title='설정' onPress={() => navigation.navigate('Setting')}></Button>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default CustomDrawer;