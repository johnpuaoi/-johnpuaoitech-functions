// Use for firebase timestamps, pass in time bool to get time back in result
/** This function is for use with firebase timestamps, pass in the timestamp and then if time is desired pass the truthy returnTime parameter in options object */
export const formatDate = function (
  timestamp: number,
  options: { returnTime?: boolean; returnAsJSDate?: boolean } = {
    returnTime: false,
    returnAsJSDate: false,
  }
): string | Date {
  // Get date from timestamp
  const date = new Date(timestamp * 1000);

  // Get Month
  const month = date.getMonth() + 1;

  // Get Day
  const day = date.getDate();

  // Get year
  const year = date.getFullYear();

  // Get hours
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();

  // Get Minutes
  const minutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  if (options.returnTime) {
    if (options.returnAsJSDate) {
      return date;
    } else {
      return `${month}/${day}/${year} ${hours}:${minutes}`;
    }
  } else {
    if (options.returnAsJSDate) {
      return date;
    } else {
      return `${month}/${day}/${year}`;
    }
  }
};

export const formatAsDate = function (timestamp: number): Date {
  const date = new Date(timestamp * 1000);
  return date;
};

export const isEmptyObject = function (obj: object): Boolean {
  if (Object.entries(obj).length >= 1) {
    return false;
  } else {
    return true;
  }
};

export const copyTextToClipboard = async (textToCopy: string) => {
  await navigator.clipboard.writeText(textToCopy);
};
