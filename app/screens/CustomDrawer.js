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
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const CustomDrawer = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 5, alignSelf: 'center', justifyContent: 'center' }}>
        <EvilIcons style={styles.user_icon} color='white' name='user' size={70}></EvilIcons>
        <Text style={styles.user_name}>링크비 님,</Text>
        <Text style={styles.greeting}>오늘도 좋은 하루 보내세요!</Text>
      </View>
      <View style={{ flex: 7 }}>
        <View style={{ flexDirection: 'row', }}>
          <MaterialIcons color='white' name='event-note' size={25} style={{ marginLeft: '20%', }}></MaterialIcons>
          <Text style={styles.menu_text} >행사목록</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: '7%', }}>
          <Entypo color='white' name='link' size={25} style={{ marginLeft: '20%', }}></Entypo>
          <Text style={styles.menu_text}>행사참여하기</Text>
        </View>
      </View>
      <Text style={styles.setting_view} onPress={() => navigation.navigate('Setting')}>
        <Ionicons color='white' name='md-settings-sharp' size={15}></Ionicons>
        <Text style={styles.setting_button_text}> 설정</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#311957',
  },
  user_icon: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  user_name: {
    color: 'white',
    fontSize: 22,
    fontFamily: "NotoSans-Bold",
    textAlign: 'center',
    marginTop: 15
  },
  greeting: {
    color: 'white',
    fontSize: 17,
    fontFamily: "NotoSans-Regular",
    textAlign: 'center'
  },
  menu_text: {
    marginLeft: 10,
    fontSize: 17,
    color: 'white',
    fontFamily: "NotoSans-Medium",
  },
  setting_view: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#503B70',
    paddingVertical: 8,
    textAlign: 'center',
    textAlignVertical: "center",
  },
  setting_button_text: {
    textAlign: 'center',
    textAlignVertical: "center",
    color: 'white',
    fontSize: 14,
    fontFamily: "NotoSans-Regular",
  }
});

export default CustomDrawer;