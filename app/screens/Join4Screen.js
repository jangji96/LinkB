import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
  StatusBar
} from 'react-native';
import { Container, Header, Left, Body, Button, Right, Title } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import { color } from "react-native-reanimated";


const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const Join4Screen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View>
        <Header style={{ backgroundColor: '#311957' }}>
          <Left style={{ flex: 1 }}></Left>
          <Body style={{ flex: 2, alignItems: 'center' }}>
            <Text style={[styles.title_text, { fontSize: 18}]}>회원가입 완료!</Text>
          </Body>
          <Right style={{ flex: 1 }}></Right>
        </Header>
      </View>
      <View style={styles.JoinContainer1}></View>
      <View style={styles.JoinContainer2}>
        <Feather color='white' name='user' size={60} />
        <Text style={[styles.welcome_text, { fontSize: 25, }]}>" 기다리고 있었습니다 "{'\n'}제대로 모시겠습니다</Text>
        <Text style={styles.ButtonStyle} onPress={() => navigation.navigate('Login')}>로그인 하러가기</Text>
      </View>
      <View style={styles.JoinContainer3}></View>
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
  JoinContainer1: {
    backgroundColor: '#311957',
    flex: 2,
    alignItems: "center"
  },
  JoinContainer2: {
    backgroundColor: '#311957',
    justifyContent: "center",
    flex: 9,
    alignItems: "center"
  },
  JoinContainer3: {
    backgroundColor: '#311957',
    justifyContent: "center",
    flex: 3,
    alignItems: "center"
  },
  welcome_text: {
    marginTop: SCREEN_HEIGHT * 0.07,
    color: 'white',
    fontFamily: "NotoSans-Light",
    textAlign: 'center',
  },
  ButtonStyle: {
    color: 'white',
    marginTop: SCREEN_HEIGHT * 0.16,
    width: '35%',
    height: SCREEN_HEIGHT * 0.05,
    borderColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
    textAlign: 'center',
    fontFamily: "NotoSans-Regular",
    textAlignVertical: "center",
  }
});
export default Join4Screen;