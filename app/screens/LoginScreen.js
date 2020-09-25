import React from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
    TextInput
} from 'react-native';
import axios from 'axios';

const LoginScreen = ({navigation,route}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const login = async () => {
    var data = new FormData();
      data.append('email', email);
      data.append('password', password);
  
    var config = {
      method: 'post',
      url: 'http://101.101.161.189/api/index.php/linkb_member/login_member',
      headers: { 
        'apikey': 'starthub', 
      },  
      data : data
    }
    axios(config)
    .then(function (response) {
      if(response.data.code.code == '200'){
        navigation.navigate('Drawer')
      }else if(response.data.code.code == '207'){
        console.log('실패');
      }else{
        console.log('음?');
      }
    })
    .catch(function (error) {
      console.log('에러러러',error);
    });
  };
    return (
      <View style={styles.container}>
        <View style={styles.logincContainer1}>          
        </View>
        <View style={styles.logincContainer2}>
          <View style={{flexDirection:'row', marginBottom:25}}>
            <Text style={{marginRight:50, color:'white', textDecorationLine:"underline" , fontSize:18}}>개인</Text>
            <Text style={{fontSize:18}}>기업</Text>
          </View>          
          <TextInput 
            style={{ height: 40, backgroundColor:'white', width:'80%', borderRadius:100, marginBottom:10, paddingLeft:20}} 
            placeholder="이메일 주소를 입력해 주세요"
            value={email}
            onChangeText={email => setEmail(email)}
            />
          <TextInput 
            style={{ height: 40, backgroundColor:'white', width:'80%', borderRadius:100, marginBottom:30, paddingLeft:20}} 
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChangeText={password => setPassword(password)}/>
          <Text style={{color:'white'}} onPress={login}>시작하기</Text>
          <View style={{flexDirection:'row', marginTop:100}}>
            <Text style={{marginRight:'45%', color:'white', fontSize:12}} onPress={() => navigation.navigate('JoinSelect')}>회원가입</Text>
            <Text style={{fontSize:12, color:'white'}} >비밀번호 찾기</Text>
          </View> 
        </View>
        <View style={styles.logincContainer1}>
        </View>
      </View>
    )
}



const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column'
    },
    logincContainer1:{
      backgroundColor:'#704591',
      flex:3,
      alignItems:"center"
    },
    logincContainer2:{
      backgroundColor:'#704591',
      justifyContent: "center",
      flex:5,
      alignItems:"center"
    }
  });

export default LoginScreen;