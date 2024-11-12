import moment from 'moment-timezone';

export const convertToLocalTime = (
  time: string,
  sourceTimeZone: string,
  targetTimeZone: string
): string => {
  const currentDate = moment().format('YYYY-MM-DD');
  const fullDateTimeString = `${currentDate} ${time}`;
  return moment.tz(fullDateTimeString, sourceTimeZone).tz(targetTimeZone).format('hh:mm A');
};

export const epochToLocalTime = (epoch: number): string => {
  if (!epoch) {
    return '';
  }
  const date = new Date(Number(epoch) * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// format date i.e, October 5 2024
export const formatDate = (dateString: string): string => {
  if (!dateString) return 'Not Added';
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// format date from "2024-10-11T00:00:00.000Z" to 10/11/2024 local
export const formatISOtoLocalDateNumeric = (dateString: string): string => {
  if (!dateString) return '--';
  return new Date(dateString).toLocaleDateString();
};

// format date time from 2024-10-11T00:00:00.000Z to 10/11/2024, 5:00:00 AM local
export const formatISOtoLocalDateTimeNumeric = (dateTimeString: string): string => {
  if (!dateTimeString) return '--';
  return new Date(dateTimeString).toLocaleString();
};

// format date time to UTC
export const formatDateTimeNumericToUTC = (dateTimeString: string): string => {
  if (!dateTimeString) return '--';
  const localDate = new Date(dateTimeString);
  const utcTimestamp = Date.UTC(
    localDate.getFullYear(),
    localDate.getMonth(),
    localDate.getDate(),
    localDate.getHours(),
    localDate.getMinutes(),
    localDate.getSeconds(),
    localDate.getMilliseconds()
  );
  return new Date(utcTimestamp).toISOString();
};

// Convert local date/time formats back to ISO strings for submission
export const convertLocalToUTC = (value: string, type: string): string => {
  if (!value) return '';
  if (type === 'localDate' || type === 'localDateTime') {
    return formatDateTimeNumericToUTC(value);
  }
  return value;
};

// Convert Date/DateTime fields into local formats for initialValues
export const formatLocalDateTime = (value: string, type: string): string => {
  if (!value) return '';
  if (type === 'YYYY-MM') return value;
  if (type === 'localDate') return convertDateToHyphenFormat(formatISOtoLocalDateNumeric(value));
  if (type === 'localDateTime') return formatISOtoLocalDateTimeNumeric(value);
  return value;
};

// Checks if the end date is after start date
export const isEndDateAfterStartDate = (startDate: string, endDate: string): boolean => {
  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return end > start;
  }
  return true;
};

// Converts 10/16/2024 to 10-16-2024
export const convertDateToHyphenFormat = (date: string): string => {
  if (!date) return '';
  return date.replace(/\//g, '-');
};

// Utility function to apply the date mask format like MM/DD/YYYY
export const applyDateMask = (value: string, separator: string): string => {
  const digitsOnly = value.replace(/\D/g, ''); // Remove any non-digit characters
  const part1 = digitsOnly.substring(0, 2); // MM
  const part2 = digitsOnly.substring(2, 4); // DD
  const part3 = digitsOnly.substring(4, 8); // YYYY

  return [part1, part2, part3].filter(Boolean).join(separator);
};

// Utility function to validate MM/DD/YYYY
export const validateDateInput = (value: string, separator: string): boolean => {
  const [month, day, year] = value.split(separator);

  // Validate MM (Month)
  if (month && (Number(month) < 1 || Number(month) > 12)) {
    return false;
  }

  // Validate DD (Day)
  if (day && (Number(day) < 1 || Number(day) > 31)) {
    return false;
  }

  // Validate YYYY (Year) if provided
  if (year && year.length === 4 && (Number(year) < 1000 || Number(year) > 9999)) {
    return false;
  }

  return true;
};
// formatISOtoMMDDYYYY
export const formatISOtoMMDDYYYY = (isoString: string): string => {
  const date = new Date(isoString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  return `${month}-${day}-${year}`;
};

// Format date to YYYY-MM-DD if needed
export const formatDateForInput = (date: string): string => {
  if (!date) return '';
  const formattedDate = new Date(date);
  return formattedDate.toISOString().split('T')[0]; // YYYY-MM-DD format
};
