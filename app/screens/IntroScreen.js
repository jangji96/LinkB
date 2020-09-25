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
}from 'react-native/Libraries/NewAppScreen';
let imagePath = require("./image/intro_1.png");

const IntroScreen = ({navigation,route}) => {
    const {width} = Dimensions.get("window");
    const height = width*0.6;
    return(
        <View style={styles.container}>
        <View style={styles.topButton}>
          <Text style={styles.sliderButton1} ></Text>
          <Text style={styles.sliderButton2} ></Text>
          <Text style={styles.sliderButton2} ></Text>
          <View style={styles.columnView}>
          <Text style={styles.sliderButton3} onPress={() => navigation.navigate('Login')}>건너뛰기</Text>
          </View>
        </View>
        
        <View style={styles.imgSlider}>
          <ScrollView 
            // onScroll={event => { 
            //   this.yOffset = event.nativeEvent.contentOffset.x
            //   console.log(yOffset);
            // }}
            pagingEnabled
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={{width,height}}>
            <View style={{width,height,resizMode:'cover'}}>
              <Text style={styles.textStyle1}>개인ㆍ단체ㆍ기업</Text>
              <Text style={styles.textStyle2}>모두의 Business</Text>
              <Image source = {require("./image/intro_1.png")} style={{
                  aspectRatio: 0.48,
                  resizeMode: 'contain',
                  alignSelf:'center'
                }} />
            </View>
            <View style={{width,height,resizMode:'cover'}}>
              <Text style={styles.textStyle1}>다양한 비지니스를</Text>
              <Text style={styles.textStyle2}>한 번에!</Text>
              <Image source = {require("./image/intro_2.png")} style={{
                  aspectRatio: 0.48,
                  resizeMode: 'contain',
                  alignSelf:'center'
                }} />
            </View>
            <View style={{width,height,resizMode:'cover'}}>
              <Text style={styles.textStyle1}>궁금한건 바로바로!</Text>
              <Text style={styles.textStyle2}>실시간 채팅 서비스</Text>
              <Image source = {require("./image/intro_3.png")} style={{
                  aspectRatio: 0.48,
                  resizeMode: 'contain',
                  alignSelf:'center'
                }} />
            </View>
          </ScrollView>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column'
    },
    topButton:{
      backgroundColor:'white',
      alignItems:'center',
      flex:15,
      flexDirection:'row',
    },
    imgSlider:{
      backgroundColor:'white',
      flex:85,
    },
    sliderButton1:{    
      marginLeft : 18,
      margin : 4,
      width : 30,
      height : 6,
      backgroundColor:'black'
    },
    sliderButton2:{    
      margin : 4,
      width : 30,
      height : 6,
      backgroundColor:'gray'
    },
    sliderButton3:{
      fontSize:12,
      marginLeft:150
    },
    buttonSize:{
      borderWidth:30
    },
    textStyle1:{
      marginLeft:18,
      fontSize:18
    },
    textStyle2:{
      marginLeft:18,
      fontSize:24
    },
    logincContainer1:{
      backgroundColor:'#704591',
      flex:3,
      alignItems:"center"
    },
    logincContainer2:{
      backgroundColor:'#704591',
      justifyContent: "center",
      flex:4,
      alignItems:"center"
    }
  });
export default IntroScreen;