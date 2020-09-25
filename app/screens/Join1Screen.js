import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
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

const Join1Screen = ({ navigation, route }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.JoinContainer1}></View>
      <View style={styles.JoinContainer2}>
        <View style={{flexDirection:'row' }}>
          <TextInput
            style={styles.TextInputStyle1}
            placeholder='이메일'
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
          style={{ marginTop: 50, color: 'white' }} 
          onPress={() => navigation.navigate('Join2',{email:email,password:password})}>다음단계로</Text>
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
  TextInputStyle1: {
    marginTop: 10,
    width: '51%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingLeft: 15
  },
  TextInputStyle2: {
    marginTop: 10,
    width: '78%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingLeft: 15
  },
  ButtonStyle:{
    color:'white',
    marginTop:10,
    width:'15%',
    borderColor:'white',
    borderRadius:100,
    borderWidth:1,
    textAlign:'center',
    justifyContent:'space-between',
    alignContent:'center',
    padding:'3.5%'
  }
});

export default Join1Screen;