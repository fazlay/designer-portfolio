import { format, parseISO } from 'date-fns';

export const formatDate = (
  date: Date | string | number,
  FormatType: string =  'dd-MM-yyyy'
) => {
  // @ts-ignore
  const parsedDateTime = parseISO(date);
  return format(parsedDateTime, FormatType);
};