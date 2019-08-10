const axios = require('axios');


export const getData=(url,callback)=>{
	axios.get(url)
    .then(function (response) {
        callback(response.data)
    })
    .catch(function (error) {
           callback("Request Failed")
    });
} 