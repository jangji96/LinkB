import React from "react";
import MainScreenPresenter from './MainScreenPresenter'
import axios from 'axios';
import { BackHandler, ToastAndroid, Animated } from 'react-native'
import APIManager from '../module/APIManager'

const select_cover_url = 'http://101.101.161.189/api/index.php/linkb_cover/select_cover_list'
const recommend_event_url = 'http://101.101.161.189/api/index.php/linkb_event/select_recommend_event_list'
const event_url = 'http://101.101.161.189/api/index.php/linkb_event/select_event_list'

let am;

class MainScreen extends React.Component {
  state = {
    select_cover_list: [],
    recommend_event_list: [],
    event_list: [],

    image: false,
    textValue: "",
  }

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    am = new APIManager();

    am.url = select_cover_url
    am.get(data => { this.setState({ select_cover_list: data.cover }) })

    am.url = recommend_event_url
    am.get(data => { this.setState({ recommend_event_list: data.event_list }) })

    am.url = event_url
    am.get(data => { this.setState({ event_list: data.event_list }) })
  }

  componentWillUnmount() {
    this.exitApp = false;
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  //뒤로가기 두번 누를 시 앱 종료 이벤트
  handleBackButton = () => {
    if (!this.props.navigation.isFocused()) {
      return false;
    }

    if (this.exitApp == undefined || !this.exitApp) {
      ToastAndroid.show('뒤로가기 버튼을 한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
      this.exitApp = true;

      this.timeout = setTimeout(
        () => {
          this.exitApp = false;
        },
        2000
      );
    } else {
      clearTimeout(this.timeout);
      BackHandler.exitApp();
    }
    return true;
  }

  //무한스크롤 이벤트
  scrollEvent = () => {
    this.setState({
      image: true,
      textValue: "",
    })

    const { event_list } = this.state;

    am.url = event_url

    if (event_list.length == 0) {
      am.params = {}
    } else {
      am.params = { 'last_idx': event_list[event_list.length - 1].event_idx }
    }

    am.get(data => {
      if (data.event_list.length == 0) {
        this.setState({
          image: false,
          textValue: "end"
        })
      }
      else {
        this.setState({
          event_list: this.state.event_list.concat(data.event_list),
          image: false,
          textValue: ""
        })
      }
    })

  }

  render() {
    return (
      <MainScreenPresenter {...this.state} scrollEvent={this.scrollEvent} navigation={this.props.navigation}></MainScreenPresenter>
    );
  }
}

export default MainScreen;