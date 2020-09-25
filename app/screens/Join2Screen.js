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

function Join2Screen({ route, navigation }) {
  const params = navigation.state.params
  const email = params.email;
  const password = params.password;
  const [name, setName] = React.useState('');
  const [phoneNum, setPphoneNum] = React.useState('');
  const [activeArea, setActiveArea] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.JoinContainer1}></View>
      <View style={styles.JoinContainer2}>
        <TextInput 
          style={styles.TextInputStyle} 
          placeholder='이름' 
          placeholderTextColor='white'
          value={name}
          onChangeText={name => setName(name)}></TextInput>
        <TextInput 
          style={styles.TextInputStyle} 
          placeholder='전화번호' 
          placeholderTextColor='white'
          value={phoneNum}
          onChangeText={phoneNum => setPphoneNum(phoneNum)}></TextInput>
        <TextInput 
          style={styles.TextInputStyle} 
          placeholder='활동장소' 
          placeholderTextColor='white'
          value={activeArea}
          onChangeText={activeArea => setActiveArea(activeArea)}></TextInput>
        <Text style={{ marginTop: 50, color: 'white' }} onPress={() => navigation.navigate('Join3',{email:email,password:password,name:name,phoneNum:phoneNum,activeArea:activeArea})}>다음단계로</Text>
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

export default Join2Screen;