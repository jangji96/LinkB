import React from "react";
import MainScreenPresenter from './MainScreenPresenter'

import axios from 'axios';


class MainScreen extends React.Component {
  state = {
    select_cover_list: [],
    recommend_event_list: [],
    event_list: [],
  }

  componentDidMount = () => {
    //cover List 받아오기
    axios.get('http://101.101.161.189/api/index.php/linkb_cover/select_cover_list', { headers: { 'apikey': 'starthub' } })
      .then((response) => {
        // console.log('이거임?1', response.data.cover);
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
        // console.log('이거임?2', response.data.event_list);
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
        console.log('이거임?3', response.data.event_list[0].event_image);
        this.setState({
          event_list: response.data.event_list
        })
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <MainScreenPresenter {...this.state} clicked={this.clicked} navigation={this.props.navigation}></MainScreenPresenter>
    );
  }
}

export default MainScreen;