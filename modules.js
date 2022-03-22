function datetime(){
    let dt = new Date();
    //current date
    const date = ("0" + dt.getDate()).slice(-2);

    //current month
    const getMonth=dt.getMonth()+parseInt(1)
    const month = ("0" + getMonth ).slice(-2)

    //current year
    const year = dt.getFullYear()

    //current hours
    const hours=dt.getHours()

    //current minutes
    const minutes =  dt.getMinutes()

    //current seconds
    const seconds = dt.getSeconds()

    var output = date + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" + seconds;
    return output;

}

module.exports = {datetime}