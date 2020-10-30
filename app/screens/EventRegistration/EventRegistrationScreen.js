import React from "react";
import EventRegistrationScreenPresenter from "./EventRegistrationScreenPresenter";


class EventRegistrationScreen extends React.Component {
    state = {
        event_list: [],
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
            <EventRegistrationScreenPresenter {...this.state} navigation={this.props.navigation}></EventRegistrationScreenPresenter>
        );
    }
}

export default EventRegistrationScreen;