import React from "react";
import MessengerScreenPresenter from './MessengerScreenPresenter'

var temporary_data = [{
  messenger_idx: 1,
  opponent: "스타트허브",
  lastMessage: "안녕하세요 스타트허브입니다. 다음주 목요일 미팅 괜찮으신가요?",
  lastMessageTime: "오전 10:00",
}]

class MessengerScreen extends React.Component {
  state = {
    messenger_list: [],
    save_messenger_list: [],

    searchState: false,
    searchString: "",

    image: false,
    textValue: "",

    refreshing: false
  }

  componentDidMount = () => {
    this.dataSetting()
  }

  dataSetting = () => {
    this.setState({
      messenger_list: temporary_data,
      save_messenger_list: temporary_data,
      searchState: false,
      searchString: "",

      image: false,
      textValue: "",
    })
  }

  input_searchString = (text) => {
    this.setState({
      searchString: text
    })
  }

  click_search = () => {
    this.setState({
      image: true,
      textValue: "",
    })

    var data = [];
    var word = this.state.searchString;

    if (this.state.searchState) {
      for (var i = 0; i < this.state.save_messenger_list.length; i++) {
        var result1 = this.state.save_messenger_list[i].opponent.indexOf(word)
        // var result2 = this.state.save_messenger_list[i].lastMessage.indexOf(word)
        if (result1 != -1) {
          data.push(this.state.save_messenger_list[i])
        }
      }
      console.log(data)
      this.setState({
        messenger_list: data,
        searchState: false
      })
    } else {
      this.setState({
        searchState: true
      })
    }
    this.setState({
      image: false,
      textValue: "검색 결과가 없습니다. "
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
      <MessengerScreenPresenter {...this.state} input_searchString={this.input_searchString} click_search={this.click_search} onRefresh={this.onRefresh} navigation={this.props.navigation}></MessengerScreenPresenter>
    );
  }
}

export default MessengerScreen;