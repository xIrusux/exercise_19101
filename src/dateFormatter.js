// format date in milliseconds to a date string 'DD/MM/YYYY'

const formatToDateString = (dateTimeMillis, calculateYesterday) => {
  let yesterdayDateInstance = {};
  if (calculateYesterday === true) {
    yesterdayDateInstance = new Date(dateTimeMillis);
    yesterdayDateInstance.setDate(yesterdayDateInstance.getDate() - 1);
    return yesterdayDateInstance;
  }
  const dateInstance = new Date(dateTimeMillis);

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
  const yesterdaySystemDateString = formatToDateString(
    systemDateTimeMillis,
    true
  );
  const compareableDateToFormatTimeMillis = new Date(dateToFormatTimeMillis);
  const systemDateString = formatToDateString(systemDateTimeMillis, false);
  const dateToFormatString = formatToDateString(dateToFormatTimeMillis, false);

  if (dateToFormatString === systemDateString) {
    return "TODAY";
  } else if (
    yesterdaySystemDateString.toDateString() ===
    compareableDateToFormatTimeMillis.toDateString()
  ) {
    return "YESTERDAY";
  } else {
    return dateToFormatString;
  }
};
export { formatToDateString, compareDates };
