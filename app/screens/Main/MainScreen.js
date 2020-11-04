import React from "react";
import MainScreenPresenter from './MainScreenPresenter'
import axios from 'axios';
import { BackHandler, ToastAndroid, Animated } from 'react-native'

class MainScreen extends React.Component {
  state = {
    select_cover_list: [],
    recommend_event_list: [],
    event_list: [],

    textValue: "",
  }

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    //cover List 받아오기
    axios.get('http://101.101.161.189/api/index.php/linkb_cover/select_cover_list', { headers: { 'apikey': 'starthub' } })
      .then((response) => {
        // console.log('select_cover_list : ', response.data.cover);
        this.setState({
          select_cover_list: response.data.cover
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    //Recommend Event List 받아오기
    axios.get('http://101.101.161.189/api/index.php/linkb_event/select_recommend_event_list', { headers: { 'apikey': 'starthub' } })
      .then((response) => {
        // console.log('select_recommend_event_list : ', response.data.event_list);
        this.setState({
          recommend_event_list: response.data.event_list
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    // Event List 받아오기 
    axios.get('http://101.101.161.189/api/index.php/linkb_event/select_event_list', { headers: { 'apikey': 'starthub' } })
      .then((response) => {
        console.log('select_event_list : ', response.data.event_list[0].event_idx);
        this.setState({
          event_list: response.data.event_list
        })
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  componentWillUnmount() {
    this.exitApp = false;
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

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

  scrollEvent = () => {
    this.setState({
      textValue: "loading..."
    })

    const { event_list } = this.state;
    const length = event_list.length

    axios.get('http://101.101.161.189/api/index.php/linkb_event/select_event_list', { headers: { 'apikey': 'starthub' }, params: { 'last_idx': event_list[length - 1].event_idx }, })
      .then((response) => {
        if (response.data.event_list.length == 0) {
          this.setState({
            textValue: "end"
          })
        }
        else {
          this.setState({
            event_list: event_list.concat(response.data.event_list),
            textValue: ""
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <MainScreenPresenter {...this.state} scrollEvent={this.scrollEvent} navigation={this.props.navigation}></MainScreenPresenter>
    );
  }
}

export default MainScreen;