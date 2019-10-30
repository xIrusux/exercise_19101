import { formatToDateString, compareDates } from "../src/dateFormatter";

const December = 11; //js Date object month is indexed from 0
const January = 0;

describe("when the system date and the date to format match", () => {
  it("return 'TODAY'", () => {
    const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
    const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime(); //Same day different time
    expect(compareDates(dateTimeToFormat, systemDateTime)).toBe("TODAY");
  });
});

describe("when the system date and the date to format do not match", () => {
  it("return date to format in following format 'DD/MM/YYYY'", () => {
    const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
    const dateTimeToFormat = new Date(2019, December, 10, 12, 50).getTime();
    expect(compareDates(dateTimeToFormat, systemDateTime)).toBe("10/12/2019");
  });

  it("return day in correct format 'DD' when day is < 10", () => {
    const dateTimeToFormat = new Date(2019, January, 5, 12, 50).getTime();
    expect(formatToDateString(dateTimeToFormat).slice(0, 2)).toBe("05");
  });

  it("return month in correct format 'MM' when month is < 10", () => {
    const dateTimeToFormat = new Date(2019, January, 5, 12, 50).getTime();
    expect(formatToDateString(dateTimeToFormat).slice(3, 5)).toBe("01");
  });
});

describe("when the date to format is the system dates yesterday", () => {
  it("return 'YESTERDAY'", () => {
    const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
    const dateTimeToFormat = new Date(2018, December, 14, 12, 50).getTime(); //Same day different time
    expect(compareDates(dateTimeToFormat, systemDateTime)).toBe("YESTERDAY");
  });
});
