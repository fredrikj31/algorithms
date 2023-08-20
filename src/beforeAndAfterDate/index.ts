interface BeforeAndAfterDateProps {
  dates: Date[];
  date: Date;
}

export const beforeAndAfterDate = ({
  dates,
  date,
}: BeforeAndAfterDateProps) => {
  const datesInUnix = dates.map((date) => date.getTime());
  const dateInUnix = date.getTime();

  if (!datesInUnix.includes(dateInUnix)) {
    datesInUnix.push(dateInUnix);
  }

  const sortedDatesUnix = datesInUnix.sort();
  const specifiedDateIndex = sortedDatesUnix.indexOf(dateInUnix); // We can ensure that the date is there, because we add it, if it's not present

  const beforeDate = datesInUnix[specifiedDateIndex - 1] || undefined;
  const afterDate = datesInUnix[specifiedDateIndex - 1] || undefined;
};
