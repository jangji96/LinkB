import React from "react";
import EventRegistrationScreenPresenter from "./EventRegistrationScreenPresenter";


class EventRegistrationScreen extends React.Component {
    state = {
        modalVisible: false,
        event_list: [],
        allCheckColor: '#d1cfcf',
        isAllCheck:false,

        checkColor1:'#d1cfcf',
        isCheck1:false,

        checkColor2:'#d1cfcf',
        isCheck2:false
    }

    _setModalVisible = () => {
        this.setState({
            modalVisible: false
        })
    }
    _setTerm = () => {
        console.log('뀨?',this.state.modalVisible);
        this.setState({
            modalVisible: true
        })
    }
    _apply = () =>{
        this.setState({
            modalVisible: false,
            checkColor1: '#d1cfcf',
            isCheck1:false,
            checkColor2: '#d1cfcf',
            isCheck2:false,
            allCheckColor:'#d1cfcf',
            isAllCheck:false,
        })
        console.log('뀨222?',this.state.modalVisible);
    }
    _allCheck = () => {
        if(!this.state.isAllCheck){
            this.setState({
                allCheckColor: '#311957',
                isAllCheck:true,
                checkColor1: '#311957',
                isCheck1:true,
                checkColor2: '#311957',
                isCheck2:true,
            })
        }else{
            this.setState({
                allCheckColor: '#d1cfcf',
                isAllCheck:false,
                checkColor1: '#d1cfcf',
                isCheck1:false,
                checkColor2: '#d1cfcf',
                isCheck2:false,
            })

        }
    }
    _isCheck1 = () => {
        if(!this.state.isCheck1){
            if(this.state.isCheck2){
                this.setState({
                    checkColor1: '#311957',
                    isCheck1:true,
                    allCheckColor:'#311957',
                    isAllCheck:true,
                })
            }
            else{
                this.setState({
                    checkColor1: '#311957',
                    isCheck1:true
                })
            }
        }else{
            this.setState({
                checkColor1: '#d1cfcf',
                isCheck1:false,
                allCheckColor:'#d1cfcf',
                isAllCheck:false,
            })

        }
    }
    _isCheck2 = () => {
        if(!this.state.isCheck2){
            if(this.state.isCheck1){
                this.setState({
                    checkColor2: '#311957',
                    isCheck2:true,
                    allCheckColor:'#311957',
                    isAllCheck:true,
                })
            }
            else{
                this.setState({
                    checkColor2: '#311957',
                    isCheck2:true
                })
            }
        }else{
            this.setState({
                checkColor2: '#d1cfcf',
                isCheck2:false,
                allCheckColor:'#d1cfcf',
                isAllCheck:false,
            })

        }
    }
    componentDidMount = () => {

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
            <EventRegistrationScreenPresenter
                {...this.state}
                setModalVisible={this._setModalVisible}
                setTerm={this._setTerm}
                apply={this._apply}
                
                allCheck={this._allCheck}                
                isCheck1={this._isCheck1}                
                isCheck2={this._isCheck2}
                navigation={this.props.navigation}></EventRegistrationScreenPresenter>
        );
    }
}

export default EventRegistrationScreen;