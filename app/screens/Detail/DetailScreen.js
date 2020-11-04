import React from "react";
import DetailScreenPresenter from './DetailScreenPresenter'
import axios from 'axios';

class DetailScreen extends React.Component {
  state = {
    event_name: '',
    event_image: 'empty',
    event_start_date: '',
    event_end_date: '',
    cnt: '',
    event_host: '',
    event_map: '',
    event_introduce: '',
    company_name: '',
    recommend_event_list: []
  }

  componentDidMount = () => {
    //select_event_detail 받아오기
    axios.get('http://101.101.161.189/api/index.php/linkb_event/select_event_detail',
      {
        headers: {
          'apikey': 'starthub'
        },
        params: {
          'event_idx': this.props.route.params.event_idx
        }
      })
      .then((response) => {
        this.setState({
          event_name: response.data.event[0].event_name,
          event_image: response.data.event[0].event_image,
          event_start_date: response.data.event[0].event_start_date,
          event_end_date: response.data.event[0].event_end_date,
          cnt: response.data.member[0].cnt,
          event_host: response.data.event[0].event_host,
          event_map: response.data.event[0].event_map,
          event_introduce: response.data.event[0].event_introduce,
          company_name: response.data.company[0].company_name
        })
      })
      .catch(function (error) {
        console.log(error);
      });

    //select_recommend_event_list 받아오기
    axios.get('http://101.101.161.189/api/index.php/linkb_event/select_recommend_event_list', { headers: { 'apikey': 'starthub' } })
      .then((response) => {
        // console.log('recommend_event_list : ', response.data.event_list);
        this.setState({
          recommend_event_list: response.data.event_list
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <DetailScreenPresenter {...this.state} navigation={this.props.navigation}></DetailScreenPresenter>
    );
  }
}

export default DetailScreen;