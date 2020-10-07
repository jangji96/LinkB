import React, { useState } from "react"

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

import Swiper from 'react-native-swiper'
import { log } from "react-native-reanimated";

let imagePath = require("./image/intro_1.png");

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const slide_height = SCREEN_HEIGHT * 0.84;

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.page == 2 ?
            (<Text style={styles.botton2} onPress={() => this.props.navigation.navigate('Login')}>시작하기</Text>)
            : (<Text style={styles.botton1} onPress={() => this.props.navigation.navigate('Login')}>건너뛰기</Text>)
        }

        <View style={styles.imgSlider}>
          <Swiper
            autoplay={false}
            dot={
              <View style={styles.swiper_dot} />
            }
            activeDot={
              <View style={styles.swiper_activeDot} />
            }
            onIndexChanged={index => this.setState({ page: index })}
            paginationStyle={{
              bottom: SCREEN_HEIGHT * 0.92,
              right: SCREEN_WIDTH * 0.55,
            }}
            loop={false}>
            <View style={{ width: SCREEN_WIDTH, height: slide_height, resizMode: 'cover' }}>
              <Text style={styles.textStyle1}>개인ㆍ단체ㆍ기업</Text>
              <Text style={styles.textStyle2}>모두의 Business</Text>
              <Image source={require("./image/intro_1.png")} style={styles.slide_image} />
            </View>
            <View style={{ width: SCREEN_WIDTH, height: slide_height, resizMode: 'cover' }}>
              <Text style={styles.textStyle1}>다양한 비지니스를</Text>
              <Text style={styles.textStyle2}>한 번에!</Text>
              <Image source={require("./image/intro_2.png")} style={styles.slide_image} />
            </View>
            <View style={{ width: SCREEN_WIDTH, height: slide_height, resizMode: 'cover' }}>
              <Text style={styles.textStyle1}>궁금한건 바로바로!</Text>
              <Text style={styles.textStyle2}>실시간 채팅 서비스</Text>
              <Image source={require("./image/intro_3.png")} style={styles.slide_image} />
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  botton1: {
    width: 65,
    height: 30,
    marginTop: SCREEN_HEIGHT * 0.060,
    marginLeft: SCREEN_WIDTH * 0.75,
    color: "black",
    fontSize: 12,
    fontFamily: "NotoSans-Light",
    textAlign: 'center',
    textAlignVertical: "center",
    position: 'absolute',
  },
  botton2: {
    width: 65,
    height: 30,
    marginTop: SCREEN_HEIGHT * 0.060,
    marginLeft: SCREEN_WIDTH * 0.75,
    backgroundColor: "#311957",
    borderRadius: 15,
    color: "white",
    fontSize: 12,
    fontFamily: "NotoSans-Light",
    textAlign: 'center',
    textAlignVertical: "center",
    position: 'absolute',
  },
  imgSlider: {
    width: "100%",
    height: slide_height,
    marginTop: SCREEN_HEIGHT * 0.16
  },
  textStyle1: {
    marginLeft: SCREEN_WIDTH * 0.1,
    fontFamily: "NotoSans-Light",
    fontSize: 18
  },
  textStyle2: {
    marginLeft: SCREEN_WIDTH * 0.1,
    fontFamily: "NotoSans-Bold",
    fontSize: 24
  },
  slide_image: {
    marginTop: SCREEN_HEIGHT * 0.07,
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  // logincContainer1: {
  //   backgroundColor: '#704591',
  //   flex: 3,
  //   alignItems: "center"
  // },
  // logincContainer2: {
  //   backgroundColor: '#704591',
  //   justifyContent: "center",
  //   flex: 4,
  //   alignItems: "center"
  // },
  swiper_dot: {
    backgroundColor: '#DDDDDD',
    width: 30,
    height: 3,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 3,
  },
  swiper_activeDot: {
    backgroundColor: '#333333',
    width: 30,
    height: 3,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 3,
  },
});
export default IntroScreen;