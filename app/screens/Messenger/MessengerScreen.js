import React from "react";
import MessengerScreenPresenter from './MessengerScreenPresenter'

import axios from 'axios';


class MessengerScreen extends React.Component {
  state = {
    event_list: [],
  }

  componentDidMount = () => {
   
    
    // Event List 받아오기 
    // axios.get('http://101.101.161.189/api/index.php/linkb_event/select_event_list', { headers: { 'apikey': 'starthub' } })
    //   .then((response) => {
    //      console.log('이거임?3', response.data.event_list[0].event_image);
    //     this.setState({
    //       event_list: response.data.event_list
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  }

  render() {
    return (
      <MessengerScreenPresenter {...this.state} clicked={this.clicked} navigation={this.props.navigation}></MessengerScreenPresenter>
    );
  }
}

export default MessengerScreen;