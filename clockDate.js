function startDate() {
    var today = new Date();
    var month = today.getMonth();
    var day = today.getDay();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayName = weekDays[day];
    var monthName = months[month];
    document.getElementById('clockDate').innerHTML =
    dayName + " " + monthName + " " + day;
    document.getElementById('clockDate').style.width = "50%";
    document.getElementById('clockDate').style.height = "5%";
    document.getElementById('clockDate').style.border = "none";
    document.getElementById('clockDate').style.fontFamily = "DejaVu,sans-serif";
    document.getElementById('clockDate').style.textAlign = "center";
    document.getElementById('clockDate').style.fontSize = "50px";
    document.getElementById('clockDate').style.color = "#526a7a";
    document.getElementById('clockDate').style.margin = "auto";
    var t = setTimeout(startTime, 500);
}
