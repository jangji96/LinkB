import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Left, Body, Button, Right, Title } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage'
import Snackbar from 'react-native-snackbar'
import { CommonActions } from '@react-navigation/native'

const SCREEN_WIDTH = Dimensions.get("window").width;

const SettingScreen = ({ navigation, route }) => {
  const logout = () => {
    AsyncStorage.removeItem('token').then(() => {
      console.log('remove item');
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: 'Login' }
          ]
        })
      )
      Snackbar.show({
        text: 'Logout... Good bye!',
        duration: Snackbar.LENGTH_LONG,
        fontFamily: "NotoSans-Medium",
      });
    }).catch(function (error) {
      console.log('remove Error ' + error);
    });
  }


  return (
    <View style={styles.container}>
      <View>
        <Header style={{ backgroundColor: '#311957' }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => navigation.goBack()}>
              <AntDesign color='white' name='left' size={25} />
            </Button>
          </Left>
          <Body style={{ flex: 1, alignItems: 'center' }}>
            <Text style={[styles.title_text, { fontSize: 18, }]}>설정</Text>
          </Body>
          <Right style={{ flex: 1 }}></Right>
        </Header>
      </View>
      <View style={styles.setting_container}>
        <View style={styles.button_view}>
          <TouchableOpacity onPress={() => navigation.navigate('Announcement')}>
            <Text style={[styles.button_text, { color: 'black', marginBottom: 25 }]}>공지사항</Text>
          </TouchableOpacity>
          <View style={styles.line_style_1}></View>
          <View style={styles.line_style_2}></View>
          <View style={styles.line_style_1}></View>
          <Text style={[styles.button_text, { color: 'black', marginVertical: 25 }]}>알림 설정</Text>
          <View style={styles.line_style_1}></View>
          <View style={styles.line_style_2}></View>
          <View style={styles.line_style_1}></View>

          <Text style={[styles.button_text, { color: 'gray', marginTop: 25, }]} onPress={logout}>로그아웃</Text>

        </View>
      </View>
      <StatusBar
        backgroundColor="#311957"
        style={{ color: "white" }}></StatusBar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#311957',
  },
  title_text: {
    fontFamily: "NotoSans-Bold",
    color: 'white',
  },
  line_style_1: {
    backgroundColor: '#DDDDDD',
    height: 1,
  },
  line_style_2: {
    backgroundColor: '#EEEEEE',
    height: 10,
  },
  setting_container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  button_view: {
    width: '100%',
    justifyContent: "center",
  },
  button_text: {
    marginVertical: 25,
    marginLeft: SCREEN_WIDTH * 0.07,
    fontSize: 15,
    fontFamily: "NotoSans-Medium",
  }
});
export default SettingScreen;