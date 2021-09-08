// Use for firebase timestamps, pass in time bool to get time back in result
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
