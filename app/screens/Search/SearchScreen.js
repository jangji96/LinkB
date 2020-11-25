import React from "react";
import SearchScreenPresenter from './SearchScreenPresenter'
import APIManager from '../module/APIManager'

const recommend_event_url = 'http://101.101.161.189/api/index.php/linkb_event/select_recommend_event_list'
const event_url = 'http://101.101.161.189/api/index.php/linkb_event/select_event_list'

let am;

class SearchScreen extends React.Component {
  state = {
    event_list: [],
    title_text: "💜당신에게 꼭 맞는 추천행사💜",
    searchString: "",

    refreshing: false
  }

  componentDidMount = () => {
    this.dataSetting()
  }

  dataSetting = () => {
    am = new APIManager();

    am.url = recommend_event_url
    am.get(data => { this.setState({ event_list: data.event_list, title_text: "💜당신에게 꼭 맞는 추천행사💜", searchString: "" }) })
  }

  input_searchString = (text) => {
    this.setState({
      searchString: text
    })
  }

  search = () => {
    am.url = event_url
    am.get(data => { this.setState({ event_list: data.event_list }) })
    this.setState({
      title_text: this.state.searchString + "에 대한 검색결과입니다. "
    })
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    })
    this.dataSetting()
    this.setState({
      refreshing: false
    })

  }

  render() {
    return (
      <SearchScreenPresenter {...this.state} navigation={this.props.navigation} input_searchString={this.input_searchString} search={this.search} onRefresh={this.onRefresh}></SearchScreenPresenter>
    )
  }
}

export default SearchScreen;