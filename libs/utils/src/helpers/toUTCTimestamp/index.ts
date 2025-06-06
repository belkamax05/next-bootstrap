interface calcDate {
  (
    year: number,
    month: number,
    day: number,
    hour?: number,
    minute?: number,
    second?: number,
  ): number;
}

const toUTCTimestamp: calcDate = (year, month, day, hour, minute, second) => {
  const datum = new Date(Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0));
  return datum.getTime() / 1000;
};

export default toUTCTimestamp;
