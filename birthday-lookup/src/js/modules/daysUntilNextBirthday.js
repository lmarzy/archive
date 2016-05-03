module.exports = function daysUntilNext(dob){
    
    var birthday = new Date(dob),
        today = new Date();

    birthday.setFullYear(today.getFullYear());

    if (today > birthday) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    return Math.round((birthday - today) / 8.64e7);
}