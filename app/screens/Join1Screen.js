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
import { TextInput } from "react-native-gesture-handler";
import { Container, Header, Left, Body, Button, Right, Title } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const Join1Screen = ({ navigation, route }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  console.log('test',isEmail('foo@bar.com'),isLength('foo', { min: 4, max: 15 }),isAlphanumeric('foo123'))
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
            <Text style={[styles.title_text, { fontSize: 18, }]}>회원가입</Text>
          </Body>
          <Right style={{ flex: 1 }}></Right>
        </Header>
      </View>
      <View style={styles.JoinContainer1}>
      </View>
      <View style={styles.JoinContainer2}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.TextInputStyle1}
            placeholder='ID(이메일주소)를 입력하세요'
            placeholderTextColor='white'
            color='white'
            value={email}
            onChangeText={email => setEmail(email)}></TextInput>
          <Text style={styles.ButtonStyle}>중복확인</Text>
        </View>

        <TextInput
          style={styles.TextInputStyle2}
          placeholder='비밀번호'
          placeholderTextColor='white'
          color='white'
          value={password}
          onChangeText={password => setPassword(password)}></TextInput>
        <TextInput
          style={styles.TextInputStyle2}
          placeholder='비밀번호확인'
          placeholderTextColor='white'
          color='white'></TextInput>
        <Text
          style={{ marginTop: SCREEN_HEIGHT * 0.1, color: 'white', fontFamily: "NotoSans-Regular", }}
          onPress={() => navigation.navigate('Join2', { email: email, password: password })}>다음단계로</Text>
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
    flex: 3,
    alignItems: "center"
  },
  JoinContainer2: {
    backgroundColor: '#311957',
    justifyContent: "center",
    flex: 8,
    alignItems: "center"
  },
  JoinContainer3: {
    backgroundColor: '#311957',
    justifyContent: "center",
    flex: 3,
    alignItems: "center"
  },
  TextInputStyle1: {
    marginTop: 10,
    width: '58%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    fontFamily: "NotoSans-Regular",
    paddingLeft: 10
  },
  TextInputStyle2: {
    marginTop: 10,
    width: '78%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    fontFamily: "NotoSans-Regular",
    paddingLeft: 10
  },
  ButtonStyle: {
    color: 'white',
    marginTop: 10,
    width: '20%',
    borderColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
    textAlign: 'center',
    fontFamily: "NotoSans-Regular",
    textAlignVertical: "center",
  }
});

export default Join1Screen;