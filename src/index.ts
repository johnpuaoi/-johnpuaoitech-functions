// Use for firebase timestamps, pass in time bool to get time back in result
/** This function is for use with firebase timestamps, pass in the timestamp and then if time is desired pass the truthy returnTime parameter. */
export const formatDate = function (
  timestamp: number,
  returnTime?: boolean
): string {
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

  if (returnTime) {
    return `${month}/${day}/${year} ${hours}:${minutes}`;
  } else {
    return `${month}/${day}/${year}`;
  }
};

export const isEmptyObject = function (obj: object): Boolean {
  if (Object.entries(obj).length >= 1) {
    return false;
  } else {
    return true;
  }
};
