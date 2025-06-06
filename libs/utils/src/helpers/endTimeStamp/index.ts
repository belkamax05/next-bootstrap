import toUTCTimestamp from '../toUTCTimestamp';

const endTimeStamp = (theDate: string) => {
  const endDate = theDate.split('/');
  const endDay = parseInt(endDate[0], 10);
  const endMonth = parseInt(endDate[1], 10);
  const endYear = parseInt(endDate[2], 10);

  return toUTCTimestamp(endYear, endMonth, endDay, 23, 59, 59);
};

export default endTimeStamp;
