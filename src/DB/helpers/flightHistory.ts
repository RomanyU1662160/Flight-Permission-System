import { flights } from '../mockFlightsData';

export const getFilterYears = (start: string, end: string) => {
  const years = [];
  for (let i = parseInt(start); i <= parseInt(end); i++) {
    years.push(i);
  }
  return years;
};

export const getFlightHistoryByYearAndFlightNumber = (
  callSign: string,
  year: string
) => {
  const result = flights.filter((f) => {
    return f.departure_date.includes(year) && f.callSign === callSign;
  });
  return result;
};
