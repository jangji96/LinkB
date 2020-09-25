import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
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
import { TextInput } from "react-native-gesture-handler";

import axios from 'axios';

const Join3Screen = ({ navigation, route }) => {
  const params = navigation.state.params
  const email = params.email;
  const password = params.password;
  const name = params.name;
  const phoneNum = params.phoneNum;
  const activeArea = params.activeArea;
  const [company, setCompany] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [position, setPosition] = React.useState('');

  const join = async () => {
    var data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('name', name);
    data.append('phone', phoneNum);
    data.append('work_place', activeArea);
    data.append('work_company', company);
    data.append('work_team', department);
    data.append('work_position', position);
    console.log(data);
    var config = {
      method: 'post',
      url: 'http://101.101.161.189/api/index.php/linkb_member/insert_member',
      headers: {
        'apikey': 'starthub',
      },
      data: data
    }
    axios(config)
      .then(function (response) {
        if (response.data.code.code == '200') {
          navigation.navigate('Join4')
        } else if (response.data.code.code == '207') {
          console.log('실패');
        } else {
          console.log(response.data.code.code);
          console.log('음?');
        }
      })
      .catch(function (error) {
        console.log('에러러러', error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.JoinContainer1}></View>
      <View style={styles.JoinContainer2}>
        <TextInput 
          style={styles.TextInputStyle}
          placeholder='근무회사'
          placeholderTextColor='white'
          value={company}
          onChangeText={company => setCompany(company)}></TextInput>
        <TextInput
          style={styles.TextInputStyle}
          placeholder='근무부서'
          placeholderTextColor='white'
          value={department}
          onChangeText={department => setDepartment(department)}></TextInput>
        <TextInput
          style={styles.TextInputStyle}
          placeholder='직급'
          placeholderTextColor='white'
          value={position}
          onChangeText={position => setPosition(position)}></TextInput>
        <Text style={{ marginTop: 50, color: 'white' }} onPress={join}>다음단계로</Text>
      </View>
      <View style={styles.JoinContainer3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  JoinContainer1: {
    backgroundColor: '#704591',
    flex: 2,
    alignItems: "center"
  },
  JoinContainer2: {
    backgroundColor: '#704591',
    justifyContent: "center",
    flex: 8,
    alignItems: "center"
  },
  JoinContainer3: {
    backgroundColor: '#704591',
    justifyContent: "center",
    flex: 3,
    alignItems: "center"
  },
  TextInputStyle: {
    marginTop: 10,
    width: '78%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingLeft: 15
  }
});
export default Join3Screen;