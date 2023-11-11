interface BeforeAndAfterDateProps {
  dates: Date[];
  date: Date;
}

interface BeforeAndAfterDateReturns {
  beforeDate: Date | null;
  afterDate: Date | null;
}

export const beforeAndAfterDate = ({
  dates,
  date,
}: BeforeAndAfterDateProps): BeforeAndAfterDateReturns => {
  const datesInUnix = dates.map((date) => date.getTime());
  const dateInUnix = date.getTime();

  if (!datesInUnix.includes(dateInUnix)) {
    datesInUnix.push(dateInUnix);
  }

  const sortedDatesUnix = datesInUnix.sort();
  const specifiedDateIndex = sortedDatesUnix.indexOf(dateInUnix); // We can ensure that the date is there, because we add it, if it's not present

  const beforeDateUnix = datesInUnix[specifiedDateIndex - 1];
  const afterDateUnix = datesInUnix[specifiedDateIndex + 1];

  const beforeDate = beforeDateUnix ? new Date(beforeDateUnix) : null;
  const afterDate = afterDateUnix ? new Date(afterDateUnix) : null;

  return {
    beforeDate,
    afterDate,
  };
};
