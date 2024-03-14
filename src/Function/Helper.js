export const convertTo12HourFormat = (time) =>{
    // Splitting the time into hours and minutes
    var splitTime = time.split(':');
    var hours = parseInt(splitTime[0], 10);
    var minutes = parseInt(splitTime[1], 10);

    // Determining AM or PM
    var period = hours >= 12 ? 'PM' : 'AM';

    // Converting hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Formatting minutes
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Constructing the final formatted time
    var formattedTime = hours + ':' + minutes + ' ' + period;

    return formattedTime;
}