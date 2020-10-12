import React from "react";
import SearchScreenPresenter from './SearchScreenPresenter'
import axios from 'axios';

class SearchScreen extends React.Component {
  state = {
    recommend_event_list: [],
  }

  componentDidMount = () => {
    axios.get('http://101.101.161.189/api/index.php/linkb_event/select_recommend_event_list', { headers: { 'apikey': 'starthub' } })
      .then((response) => {
        // console.log('recommend', response.data.event_list);
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
      <SearchScreenPresenter {...this.state} navigation={this.props.navigation}></SearchScreenPresenter>
    )
  }
}
export default SearchScreen;