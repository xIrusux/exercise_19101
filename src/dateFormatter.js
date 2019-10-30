// format date in milliseconds to a date string 'DD/MM/YYYY'

const formatToDateString = dateTimeMillis => {
  const dateInstance = new Date(dateTimeMillis);

  const year = dateInstance.getFullYear();
  const month = (dateInstance.getMonth() + 1).toString();
  const day = dateInstance.getDate().toString();

  const twoDigitMonth = month.length > 1 ? month : "0" + month;
  const twoDigitDay = day.length > 1 ? day : "0" + day;

  const dateString = twoDigitDay + "/" + twoDigitMonth + "/" + year;

  return dateString;
};

// create yesterday date of the systemdate

const calculateSystemYesterday = dateTimeMillis => {
  let yesterdayDateInstance = new Date(dateTimeMillis);
  yesterdayDateInstance.setDate(yesterdayDateInstance.getDate() - 1);
  return yesterdayDateInstance;
};

// compare the two dateStrings and return "TODAY" if they match
// return "YESTERDAY" if datetoFormat is the systemDate's yesterday
// if the first argument does not match the second, return the first argumet in format 'DD/MM/YYYY'

const compareDates = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  const yesterdaySystemDateString = calculateSystemYesterday(
    systemDateTimeMillis
  ).toDateString();
  const compareableDateToFormat = new Date(
    dateToFormatTimeMillis
  ).toDateString();
  const compareableSystemDateString = new Date(
    systemDateTimeMillis
  ).toDateString();

  const dateToFormatString = formatToDateString(dateToFormatTimeMillis);

  if (compareableDateToFormat === compareableSystemDateString) {
    return "TODAY";
  } else if (compareableDateToFormat === yesterdaySystemDateString) {
    return "YESTERDAY";
  } else {
    return dateToFormatString;
  }
};
export { formatToDateString, compareDates };
