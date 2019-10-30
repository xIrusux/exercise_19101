// format date in milliseconds to a date string 'DD/MM/YYYY'

const formatToDateString = dateTimeMillis => {
  const dateInstance = new Date(dateTimeMillis);
  // dateInstance.setDate(dateInstance.getDate() - 1);

  const year = dateInstance.getFullYear();
  const month = (dateInstance.getMonth() + 1).toString();
  const day = dateInstance.getDate().toString();

  const twoDigitMonth = month.length > 1 ? month : "0" + month;
  const twoDigitDay = day.length > 1 ? day : "0" + day;

  const dateString = twoDigitDay + "/" + twoDigitMonth + "/" + year;

  return dateString;
};

// compare the two dateStrings and return "TODAY" if they match
// if the first argument does not match the second, return the first argumet in format 'DD/MM/YYYY'

const compareDates = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  let systemDateString = formatToDateString(systemDateTimeMillis);
  let dateToFormatString = formatToDateString(dateToFormatTimeMillis);

  if (dateToFormatString === systemDateString) {
    return "TODAY";
  } else {
    return dateToFormatString;
  }
};
export { formatToDateString, compareDates };
