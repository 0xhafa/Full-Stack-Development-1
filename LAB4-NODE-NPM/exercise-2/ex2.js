let moment = require("moment");

let getCurrentDate = () => {
    let wrapped = moment(new Date()).format('dddd, MMMM Do YYYY : h:mm:ss a');
    console.log(wrapped);
}

getCurrentDate();