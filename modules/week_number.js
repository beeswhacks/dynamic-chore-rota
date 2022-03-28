// When did the cycle start? That's week 1
// seedDate should be the day before week 1 starts (e.g. Sunday 1st, if Monday 2nd is the first day of week 1)
var seedDate = new Date('2022-03-20');
var todayDate = new Date(Date.now());

// What week is it this week?
function weeksSinceSeedDate (todayDate, seedDate) {
    // JavaScript stores date objects as milliseconds, so will need number of milliseconds in a day
    const MILLISECONDS_IN_A_WEEK = 1000 * 60 * 60 * 24 * 7;

    let differenceInWeeks = Math.ceil((todayDate - seedDate) / MILLISECONDS_IN_A_WEEK);

    return differenceInWeeks;
};

var weekNumber = weeksSinceSeedDate(todayDate, seedDate);

module.exports = weekNumber;