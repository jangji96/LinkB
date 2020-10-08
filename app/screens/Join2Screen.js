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

function Join2Screen({ route, navigation }) {
  const params = route.params
  const email = params.email;
  const password = params.password;
  const [name, setName] = React.useState('');
  const [phoneNum, setPphoneNum] = React.useState('');
  const [activeArea, setActiveArea] = React.useState('');
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
      <View style={styles.JoinContainer1}></View>
      <View style={styles.JoinContainer2}>
        <TextInput
          style={styles.TextInputStyle}
          placeholder='이름'
          placeholderTextColor='white'
          color='white'
          value={name}
          onChangeText={name => setName(name)}></TextInput>
        <TextInput
          style={styles.TextInputStyle}
          placeholder='전화번호'
          placeholderTextColor='white'
          color='white'
          value={phoneNum}
          onChangeText={phoneNum => setPphoneNum(phoneNum)}></TextInput>
        <TextInput
          style={styles.TextInputStyle}
          placeholder='활동장소'
          placeholderTextColor='white'
          color='white'
          value={activeArea}
          onChangeText={activeArea => setActiveArea(activeArea)}></TextInput>
        <Text style={{ marginTop: SCREEN_HEIGHT * 0.1, color: 'white', fontFamily: "NotoSans-Regular", }} onPress={() => navigation.navigate('Join3', { email: email, password: password, name: name, phoneNum: phoneNum, activeArea: activeArea })}>다음단계로</Text>
      </View>
      <View style={styles.JoinContainer3}></View>
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
  TextInputStyle: {
    marginTop: 10,
    width: '78%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    fontFamily: "NotoSans-Regular",
    paddingLeft: 10
  }
});

export default Join2Screen;