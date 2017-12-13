function startTime() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var month = today.getMonth();
    var day = today.getDay();
    var date = today.getDate();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayName = weekDays[day];
    var monthName = months[month];
    min = checkTime(min);
    document.getElementById('jsClock').innerHTML =
     hour + ":" + min + "<br>" + dayName + " " + monthName + " " + date;
    document.getElementById('jsClock').style.width = "100%";
    document.getElementById('jsClock').style.height = "13%";
    document.getElementById('jsClock').style.border = "none";
    document.getElementById('jsClock').style.fontFamily = "DejaVu,sans-serif";
    document.getElementById('jsClock').style.textAlign = "center";
    document.getElementById('jsClock').style.fontSize = "60px";
    document.getElementById('jsClock').style.color = "#526a7a";
    document.getElementById('jsClock').style.margin = "auto";
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
