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
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { TextInput } from "react-native-gesture-handler";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const JoinSelectScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 23 }}>
        <Header style={{ backgroundColor: '#311957' }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => navigation.goBack()}>
              <AntDesign color='white' name='left' size={25} />
            </Button>
          </Left>
          <Body style={{ flex: 1, alignItems: 'center' }}>
            <Text style={[styles.title_text, { fontSize: 18, }]}>회원가입</Text>
          </Body>
          <Right style={{ flex: 1 }}></Right>
        </Header>
      </View>
      <View style={{ marginTop: SCREEN_HEIGHT * 0.13 }}>
        <View style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: 'row', }}>
          <Text style={[styles.title_text, { fontSize: 21, }]}>[</Text>
          <Text style={[styles.title_text, { fontSize: 18, }]}> 회원가입 방법 </Text>
          <Text style={[styles.title_text, { fontSize: 21, }]}>]</Text>
        </View>
      </View>
      <View style={{ marginTop: SCREEN_HEIGHT * 0.03 }}>
        <View style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: 'row', }}>
          <Text style={styles.circle_text}>회원유형{'\n'}선택</Text>
          <AntDesign color='white' name='swapright' size={25}></AntDesign>
          <Text style={styles.circle_text}>정보입력</Text>
          <AntDesign color='white' name='swapright' size={25}></AntDesign>
          <Text style={styles.circle_text}>완료!</Text>
        </View>
      </View>
      <View style={{ width: '100%', alignItems: "center", justifyContent: "center", marginTop: SCREEN_HEIGHT * 0.04 }}>
        <View style={{ width: SCREEN_WIDTH * 0.90, height: 1, backgroundColor: '#503B70', }}></View>
      </View>
      <View style={{ width: '100%', alignItems: "center", justifyContent: "center", marginTop: SCREEN_HEIGHT * 0.05 }}>
        <Text style={styles.button} onPress={() => navigation.navigate('Join1')}>
          <Ionicons color='#311957' name='md-person-circle-outline' size={17}></Ionicons>
          <Text style={styles.button_text}>개인 회원가입</Text>
        </Text>
        <Text style={styles.button}>
          <Ionicons color='#311957' name='md-business' size={17}></Ionicons>
          <Text style={styles.button_text}>기업 회원가입</Text>
        </Text>
      </View>
      <StatusBar
        backgroundColor="black"
        style={{ color: "white" }}></StatusBar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#311957'
  },
  title_text: {
    fontFamily: "NotoSans-Bold",
    color: 'white',
  },
  circle_text: {
    width: SCREEN_HEIGHT * 0.10,
    height: SCREEN_HEIGHT * 0.10,
    color: 'white',
    fontSize: 13,
    fontFamily: "NotoSans-Medium",
    backgroundColor: '#503B70',
    textAlign: 'center',
    textAlignVertical: "center",
    borderRadius: 45,
    margin: 5,
  },
  button: {
    width: '85%',
    height: SCREEN_HEIGHT * 0.1,
    backgroundColor: 'white',
    textAlign: 'center',
    textAlignVertical: "center",
    borderRadius: 25,
    margin: 6,
    flexDirection: 'row',
  },
  button_text: {
    color: '#311957',
    fontSize: 17,
    fontFamily: "NotoSans-Bold",
  },
});

export default JoinSelectScreen;