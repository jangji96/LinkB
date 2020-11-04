import axios from 'axios';

export function get_data(url, headers_data, params_data, set_fun) {
    axios.get(url, { headers: headers_data, params: params_data })
        .then((response) => {
            set_fun(response.data)
        })
        .catch(function (error) {
            console.log("axios get error : " + error);
        });
}

export function post_data(url, headers_data, data, set_fun) {
    var config = {
        method: 'post',
        url: url,
        headers: headers_data,
        data: data
    }
    axios.then((response) => {
        set_fun(response.data)
    }).catch(function (error) {
        console.log("axios post error : " + error);
    })
}