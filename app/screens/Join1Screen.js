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
import Snackbar from 'react-native-snackbar'
import axios from 'axios';

const SCREEN_HEIGHT = Dimensions.get("window").height;

const Join1Screen = ({ navigation, route }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDuplicate, setisDuplicate] = React.useState('');

  const duplicate = async () => {
    var data = new FormData();
    data.append('email', email);
    console.log(data);
    var config = {
      method: 'post',
      url: 'http://101.101.161.189/api/index.php/linkb_member/check_email_duplicate',
      headers: {
        'apikey': 'starthub',
      },
      data: data
    }
    axios(config)
      .then(function (response) {
        if (response.data.code.code == '200') {
          console.log('중복안됨');
          Snackbar.show({
            backgroundColor:'#A9F5A9',
            text: '사용할 수 있는 아이디입니다.',
            duration: Snackbar.LENGTH_LONG,
            fontFamily: "NotoSans-Medium",
          });
          setisDuplicate(false)
        } else if (response.data.code.code == '205') {
          console.log('중복됨');
          Snackbar.show({
            backgroundColor:'#F5A9A9',
            text: '사용할 수 없는 아이디입니다.',
            duration: Snackbar.LENGTH_LONG,
            fontFamily: "NotoSans-Medium",
          });
          setisDuplicate(true)
        } else {
          console.log(response.data.code.code);
          console.log('음?');
        }
      })
      .catch(function (error) {
        console.log('에러러러', error);
      });

  }
  const gotoJoin2 = async () => {
    if (isDuplicate == false) {
      navigation.navigate('Join2', { email: email, password: password })
    }
    else {
      Snackbar.show({
        text: '중복체크해주세요',
        duration: Snackbar.LENGTH_LONG,
        fontFamily: "NotoSans-Medium",
      });
    }
  }

  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.JoinContainer2}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.TextInputStyle1}
            placeholder='ID(이메일주소)를 입력하세요'
            placeholderTextColor='white'
            color='white'
            value={email}
            onChangeText={email => setEmail(email)}></TextInput>
          <Text style={styles.ButtonStyle} onPress={duplicate}>중복확인</Text>
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
          onPress={gotoJoin2}>다음단계로</Text>
      </View>
      <StatusBar
        backgroundColor="#311957"
        style={{ color: "white" }}></StatusBar>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#311957',
  },
  title_text: {
    fontFamily: "NotoSans-Bold",
    color: 'white',
  },
  JoinContainer2: {
    paddingTop: '50%',
    paddingBottom: '10%',
    backgroundColor: '#311957',
    justifyContent: "center",
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