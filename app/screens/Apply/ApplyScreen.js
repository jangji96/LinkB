import React from "react";
import ApplySceenPresenter from "./ApplyScreenPresenter";
import AsyncStorage from '@react-native-community/async-storage'

class ApplySceen extends React.Component {
  state = {
    event_list: [],
    email: "",
    name: "",
    phone_number1: "010",
    phone_number2: "",
    phone_number3: "",
    prequestion: "",

    term1: false,
    term2: false,

    color1: "#D5D5D5",
    color2: "#D5D5D5",
    modalVisible1: false,

    modalVisible2: false
  }

  componentDidMount = () => {
    AsyncStorage.getItem('token').then((result) => {
      const UserInfo = JSON.parse(result);
      this.setState({
        email: UserInfo.email,
      })
      console.log("getItem");
    }).catch(function (error) {
      console.log('get Error ' + error);
    });;
  }

  _inputEmail = (data) => {
    this.setState({
      email: data
    })
  }

  _inputName = (data) => {
    this.setState({
      name: data
    })
  }

  _inputPhoneNumber1 = (data) => {
    this.setState({
      phone_number1: data
    })
  }
  _inputPhoneNumber2 = (data) => {
    this.setState({
      phone_number2: data
    })
  }
  _inputPhoneNumber3 = (data) => {
    this.setState({
      phone_number3: data
    })
  }

  _inputPrequestion = (data) => {
    this.setState({
      prequestion: data
    })
  }

  _setModalVisible1 = () => {
    this.setState({
      modalVisible1: false
    })
  }

  _setModalVisible2 = () => {
    this.setState({
      modalVisible2: false
    })
  }

  _setTerm1 = () => {
    if (!this.state.term1) {
      this.setState({
        modalVisible1: true
      })
    } else {
      this.setState({
        term1: false,
        color1: "#D5D5D5",
      })
    }
  }

  _setTerm2 = () => {
    if (!this.state.term2) {
      this.setState({
        modalVisible2: true
      })
    } else {
      this.setState({
        term2: false,
        color2: "#D5D5D5",
      })
    }
  }

  _setTermColor1 = () => {
    this.setState({
      term1: true,
      color1: "#311957",
      modalVisible1: false
    })

  }

  _setTermColor2 = () => {
    this.setState({
      term2: true,
      color2: "#311957",
      modalVisible2: false
    })
  }


  render() {
    return (
      <ApplySceenPresenter
        {...this.state}
        navigation={this.props.navigation}
        inputEmail={this._inputEmail}
        inputName={this._inputName}
        inputPhoneNumber1={this._inputPhoneNumber1}
        inputPhoneNumber2={this._inputPhoneNumber2}
        inputPhoneNumber3={this._inputPhoneNumber3}
        inputPrequestion={this._inputPrequestion}
        setModalVisible1={this._setModalVisible1}
        setModalVisible2={this._setModalVisible2}
        setTerm1={this._setTerm1}
        setTerm2={this._setTerm2}
        setTermColor1={this._setTermColor1}
        setTermColor2={this._setTermColor2}
      ></ApplySceenPresenter>
    );
  }
}

export default ApplySceen;