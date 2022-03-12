exports.getdate = function () {
    let today = new Date();
   
    let options = {
        month: "long",
        weekday: "long",
        day: "numeric"
    }
    return today.toLocaleDateString("en-us", options);   
}

exports.getday = function () {
    let today = new Date();
   
    let options = {
        weekday: "long"
    }
    return  today.toLocaleDateString("en-us", options); 
}







