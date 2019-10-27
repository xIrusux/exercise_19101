import { compareDates } from "../src/dateFormatter";

const December = 11; //js Date object month is indexed from 0
const January = 0;

it('when the system date and the date to format are the same day formats as "TODAY"', () => {
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime(); //Same day different time
  expect(compareDates(dateTimeToFormat, systemDateTime)).toBe("TODAY");
});

it("when the system date and the date to format do not match, return date to format in following format 'DD/MM/YYYY'", () => {
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2019, January, 15, 12, 50).getTime();
  expect(compareDates(dateTimeToFormat, systemDateTime)).toBe("15/01/2019");
});
