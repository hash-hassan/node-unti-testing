export const convert24HourTo12HourTime = (twentyFourHourTime) => {
    if (twentyFourHourTime == null || twentyFourHourTime == undefined) {
        throw 'Parameter is null or undefined!'
    }
    if(twentyFourHourTime.trim() ===''){
        throw 'Parameter cannot be an empty string.'
    }
    let timeSections = twentyFourHourTime.trim().split(':');
    let hourPortion = timeSections[0]
    let meridian = ''
    let hour = ''
    let minute = timeSections[1]
    if (hourPortion > 12) {
        meridian = 'PM'
        hour = hourPortion % 12
        hour = (hour < 10 && !hour.toString().startsWith('0') ) ? '0' + hour : hour
    } else {
        meridian = 'AM'
        hour = hourPortion
    }
    return `${hour}:${minute} ${meridian}`
}

export const convert12HourTo24HourTime = (twelveHourTime) => {
    if (twelveHourTime == null || twelveHourTime == undefined) {
        throw 'Parameter is null or undefined!'
    }
    if(twelveHourTime.trim() ===''){
        throw 'Parameter cannot be an empty string.'
    }
    let timeMarks = twelveHourTime.trim().split(' ')
    let timeSections = timeMarks[0].trim().split(':');
    let hourPortion = timeSections[0]
    let meridian = timeMarks.length > 1 ? timeMarks[1] : null
    let hour = ''
    let minute = timeSections[1]
    if (meridian !== null && meridian.toUpperCase() === 'PM') {
        hour = 12+(hourPortion % 12)
        hour =(hour < 10 && !hour.toString().startsWith('0') ) ? '0' + hour : hour
    } else {
        hour = (hourPortion < 10 && !hourPortion.startsWith('0')) ? '0'+hourPortion : hourPortion
    }
    return `${hour}:${minute}`
}
