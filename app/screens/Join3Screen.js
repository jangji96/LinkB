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

import axios from 'axios';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const Join3Screen = ({ navigation, route }) => {
  const params = route.params
  const email = params.email;
  const password = params.password;
  const name = params.name;
  const phoneNum = params.phoneNum;
  const activeArea = params.activeArea;
  const [company, setCompany] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [position, setPosition] = React.useState('');

  const join = async () => {
    // var data = new FormData();
    // data.append('email', email);
    // data.append('password', password);
    // data.append('name', name);
    // data.append('phone', phoneNum);
    // data.append('work_place', activeArea);
    // data.append('work_company', company);
    // data.append('work_team', department);
    // data.append('work_position', position);
    // console.log(data);
    // var config = {
    //   method: 'post',
    //   url: 'http://101.101.161.189/api/index.php/linkb_member/insert_member',
    //   headers: {
    //     'apikey': 'starthub',
    //   },
    //   data: data
    // }
    // axios(config)
    //   .then(function (response) {
    //     if (response.data.code.code == '200') {
          navigation.navigate('Join4')
    //     } else if (response.data.code.code == '207') {
    //       console.log('실패');
    //     } else {
    //       console.log(response.data.code.code);
    //       console.log('음?');
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log('에러러러', error);
    //   });
  };
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
        <TextInput
          style={styles.TextInputStyle}
          placeholder='근무회사'
          placeholderTextColor='white'
          color='white'
          value={company}
          onChangeText={company => setCompany(company)}></TextInput>
        <TextInput
          style={styles.TextInputStyle}
          placeholder='근무부서'
          placeholderTextColor='white'
          color='white'
          value={department}
          onChangeText={department => setDepartment(department)}></TextInput>
        <TextInput
          style={styles.TextInputStyle}
          placeholder='직급'
          placeholderTextColor='white'
          color='white'
          value={position}
          onChangeText={position => setPosition(position)}></TextInput>
        <Text style={styles.ButtonStyle} onPress={join}>가입완료!</Text>
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
    paddingTop:'50%',
    paddingBottom:'10%',
    backgroundColor: '#311957',
    justifyContent: "center",
    alignItems: "center"
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
  },
  TextInputStyle: {
    marginTop: 10,
    width: '78%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    fontFamily: "NotoSans-Regular",
    paddingLeft: 10
  },
  ButtonStyle: {
    color: 'white',
    marginTop: SCREEN_HEIGHT * 0.1,
    width: '25%',
    height: SCREEN_HEIGHT * 0.05,
    borderColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
    textAlign: 'center',
    fontFamily: "NotoSans-Regular",
    textAlignVertical: "center",
  }
});
export default Join3Screen;