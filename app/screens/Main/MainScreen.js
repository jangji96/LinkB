import React from "react";
import MainScreenPresenter from './MainScreenPresenter'
import axios from 'axios';
import { BackHandler, ToastAndroid, Animated } from 'react-native'
import { get_data, post_data } from '../module/Axios'

const select_cover_url = 'http://101.101.161.189/api/index.php/linkb_cover/select_cover_list'
const recommend_event_url = 'http://101.101.161.189/api/index.php/linkb_event/select_recommend_event_list'
const event_url = 'http://101.101.161.189/api/index.php/linkb_event/select_event_list'

class MainScreen extends React.Component {
  state = {
    select_cover_list: [],
    recommend_event_list: [],
    event_list: [],

    textValue: "",
  }

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    get_data(select_cover_url, { 'apikey': 'starthub' }, {}, this._get_select_cover)
    get_data(recommend_event_url, { 'apikey': 'starthub' }, {}, this._get_recommend_event)
    get_data(event_url, { 'apikey': 'starthub' }, {}, this._get_event)

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
      textValue: "loading..."
    })

    const { event_list } = this.state;
    const length = event_list.length

    get_data(event_url, { 'apikey': 'starthub' }, { 'last_idx': event_list[length - 1].event_idx }, this._get_more_event)

  }

  _get_select_cover = (data) => {
    this.setState({
      select_cover_list: data.cover
    })
  }

  _get_recommend_event = (data) => {
    this.setState({
      recommend_event_list: data.event_list
    })
  }

  _get_event = (data) => {
    this.setState({
      event_list: data.event_list
    })
  }

  _get_more_event = (data) => {
    if (data.event_list.length == 0) {
      this.setState({
        textValue: "end"
      })
    }
    else {
      this.setState({
        event_list: this.state.event_list.concat(data.event_list),
        textValue: ""
      })
    }
  }

  render() {
    return (
      <MainScreenPresenter {...this.state} scrollEvent={this.scrollEvent} navigation={this.props.navigation}></MainScreenPresenter>
    );
  }
}

export default MainScreen;