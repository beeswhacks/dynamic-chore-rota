var todayDate = new Date(Date.now());
var dayOfWeek = todayDate.getDay();

if (dayOfWeek == 0) {
    daysLeft = 0;
} else {
    daysLeft = 7 - dayOfWeek;
}

module.exports.DAYS_LEFT = daysLeft;