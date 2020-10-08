import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Dimensions,
  TextInput,
  StatusBar
} from 'react-native';
import axios from 'axios';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';


const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    color1: '#311957',
    color2: '#ffffff',
  }

  setEmail = (str) => {
    this.setState({
      email: str
    })
  }

  setPassword = (str) => {
    this.setState({
      password: str
    })
  }

  login = async () => {
    var data = new FormData();
    data.append('email', this.state.email);
    data.append('password', this.state.password);

    var config = {
      method: 'post',
      url: 'http://101.101.161.189/api/index.php/linkb_member/login_member',
      headers: {
        'apikey': 'starthub',
      },
      data: data
    }
    var navigation = this.props.navigation

    axios(config)
      .then(function (response) {
        if (response.data.code.code == '200') {
          navigation.navigate('Drawer')
        } else if (response.data.code.code == '207') {
          console.log('실패');
        } else {
          console.log('음?');
        }
      })
      .catch(function (error) {
        console.log('에러러러', error);
      });
  };

  user_login = () => {
    this.setState({ color1: '#311957', color2: '#ffffff' })
  }

  company_login = () => {
    this.setState({ color1: '#ffffff', color2: '#311957' })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 23, flex: 4.6 }}>
          <Header style={{ backgroundColor: '#311957' }}>
            <Left style={{ flex: 1 }}>

            </Left>
            <Body style={{ flex: 1, alignItems: 'center' }}>
              <Text style={styles.Logo_text_1}>LINKB</Text>
              <Text style={styles.Logo_text_2}>WE LINK BUSINESS</Text>
            </Body>
            <Right style={{ flex: 1 }}>

            </Right>
          </Header>
        </View>
        <View style={styles.logincContainer2}>
          <View style={styles.login_type_view}>
            <Text
              style={[styles.login_type_1, { backgroundColor: this.state.color1, color: this.state.color2 }]}
              onPress={this.user_login}>개인</Text>
            <Text
              style={[styles.login_type_2, { backgroundColor: this.state.color2, color: this.state.color1 }]}
              onPress={this.company_login}>기업</Text>
          </View>
          <TextInput
            style={{ height: 40, backgroundColor: 'white', width: '85%', borderRadius: 100, marginBottom: 10, paddingLeft: 20 }}
            placeholder="이메일 주소를 입력해 주세요"
            value={this.state.email}
            onChangeText={email => this.setEmail(email)}
          />
          <TextInput
            style={{ height: 40, backgroundColor: 'white', width: '85%', borderRadius: 100, marginBottom: 20, paddingLeft: 20 }}
            placeholder="비밀번호를 입력해 주세요"
            value={this.state.password}
            onChangeText={password => this.setPassword(password)} />
          <Text style={{ color: 'white', fontFamily: "NotoSans-Medium", }} onPress={this.login}>로그인</Text>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <Image source={require("./image/naver.png")} style={{ width: SCREEN_HEIGHT * 0.07, height: SCREEN_HEIGHT * 0.07, margin: 5, borderRadius: 30 }} />
            <Image source={require("./image/kakaotalk.png")} style={{ width: SCREEN_HEIGHT * 0.07, height: SCREEN_HEIGHT * 0.07, margin: 5, borderRadius: 30, }} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text style={{ fontFamily: "NotoSans-Regular", marginRight: '50%', color: 'white', fontSize: 12 }} onPress={() => this.props.navigation.navigate('JoinSelect')}>회원가입</Text>
            <Text style={{ fontFamily: "NotoSans-Regular", fontSize: 12, color: 'white' }} >비밀번호 찾기</Text>
          </View>
        </View>
        <View style={styles.logincContainer1}>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#311957'
  },
  logincContainer1: {
    backgroundColor: '#311957',
    flex: 3,
    alignItems: "center",
    marginTop: 23
  },
  logincContainer2: {
    backgroundColor: '#311957',
    justifyContent: "center",
    flex: 10,
    alignItems: "center"
  },
  login_type_view: {
    width: 125,
    backgroundColor: "white",
    flexDirection: 'row',
    marginBottom: SCREEN_HEIGHT * 0.045,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    paddingVertical: 3,
  },
  login_type_1: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: "center",
    marginLeft: 3,
    borderRadius: 20,
    paddingVertical: 7,
    fontFamily: "NotoSans-Medium",
  },
  login_type_2: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: "center",
    marginRight: 3,
    borderRadius: 20,
    paddingVertical: 7,
    fontFamily: "NotoSans-Medium"
  },
  Logo_text_1: {
    fontFamily: "NotoSans-ExtraBold",
    color: 'white',
    fontSize: 21,
  },
  Logo_text_2: {
    fontFamily: "NotoSans-Regular",
    color: 'white',
    fontSize: 7,
    marginTop: -7,
  },
});

export default LoginScreen;