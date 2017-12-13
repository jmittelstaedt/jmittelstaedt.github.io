function startTime() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    min = checkTime(min);
    document.getElementById('jsClock').innerHTML =
    hour + ":" + min;
    document.getElementById('clockTime').style.width = "50%";
    document.getElementById('clockTime').style.height = "5%";
    document.getElementById('clockTime').style.border = "none";
    document.getElementById('clockTime').style.fontFamily = "DejaVu,sans-serif";
    document.getElementById('clockTime').style.textAlign = "center";
    document.getElementById('clockTime').style.fontSize = "80px";
    document.getElementById('clockTime').style.color = "#526a7a";
    document.getElementById('clockTime').style.margin = "auto";
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
