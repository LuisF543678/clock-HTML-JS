/**
 * Internet clock with data, better interface and new design
 */
const startingTime = function () {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    timeSystem = (hours < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hours = (hours == 0) ? 12 : hours;
    hours = (hours > 12) ? hours - 12 : hours;
    //Add a zero in front of the numbers <10 
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + timeSystem;

    var months = ['Enero', 'Fabrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var currentWeekDay = days[currentDate.getDay()];
    var currentDay = currentDate.getDate();
    var currentMonth = months[currentDate.getMonth()];
    var currentYear = currentDate.getFullYear();
    var date = currentWeekDay + ", " + currentDay + " " + currentMonth + " " + currentYear;
    document.getElementById("date").innerHTML = currentDate;

    const time = setTimeout(function () {
        startingTime()
    }, 500);
}
const checkTime = function (i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}