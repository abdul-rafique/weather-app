/**
 *
 * @param {Time} time
 * @returns {Time} time with AM/PM added
 * @example addAMPM("19:00:00") // returns "7:00 PM"
 */

export function addAMPM(time) {
  time = time.split(":");
  let hours = time[0];
  let minutes = time[1];
  let result = "";

  if (hours > 12) {
    hours = hours - 12;
    result += hours + ":" + minutes + " PM";
  } else {
    result += hours + ":" + minutes + " AM";
  }
  return result;
}

/**
 * @param {Date} date
 * @returns day of the week in string format (Sun, Mon, etc)
 * @example dateToDay("2020-01-01") => "Wed"
 * @example dateToDay("2020-01-01T00:00:00") => "wed"
 */

export function dateToDay(date) {
  let result = "";
  let day = new Date(date).getDay();

  switch (day) {
    case 0:
      result += "Sun";
      break;
    case 1:
      result += "Mon";
      break;
    case 2:
      result += "Tue";
      break;
    case 3:
      result += "Wed";
      break;
    case 4:
      result += "Thu";
      break;
    case 5:
      result += "Fri";
      break;
    case 6:
      result += "Sat";
      break;
  }

  return result;
}

export function customDateFormat(date) {
  date = date.split("-");

  let year = date[0];
  let month = date[1];
  let day = date[2];

  let monthName = "";
  let result = "";

  switch (month) {
    case "01":
      monthName += "Jan";
      break;
    case "02":
      monthName += "Feb";
      break;
    case "03":
      monthName += "Mar";
      break;
    case "04":
      monthName += "Apr";
      break;
    case "05":
      monthName += "May";
      break;
    case "06":
      monthName += "Jun";
      break;
    case "07":
      monthName += "Jul";
      break;
    case "08":
      monthName += "Aug";
      break;
    case "09":
      monthName += "Sep";
      break;
    case "10":
      monthName += "Oct";
      break;
    case "11":
      monthName += "Nov";
      break;
    case "12":
      monthName += "Dec";
      break;
  }

  result += day + " " + monthName + ", " + year;

  return result;
}

export function getCustomDateFormat(timezone) {
  let date = new Date();
  let localeDateStr = date.toLocaleString("en-US", { timeZone: timezone });
  let isoDateStr = new Date(localeDateStr).toISOString();
  let dateFormated = customDateFormat(isoDateStr.split("T")[0]);

  return dateFormated;
}
