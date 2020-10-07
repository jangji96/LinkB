import React from "react";
import DetailScreenPresenter from './DetailScreenPresenter'
import axios from 'axios';


class DetailScreen extends React.Component {
  state = {
    event_detail: []
  }
  componentDidMount = () => {
    //select_event_detail 받아오기
    axios.get('http://101.101.161.189/api/index.php/linkb_event/select_event_detail', 
      {
        headers: {
          'apikey': 'starthub'
        },
        params:{
          'event_idx':this.props.route.params.event_idx
        }
      })
      .then((response) => {
        console.log('이거임?1', this.props.route.params.event_idx);
        console.log('이거임요??', response.data);
        this.setState({
          event_detail: response.data
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