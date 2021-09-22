

export const formatTime = (timestamp?: number): string => {
  if (!timestamp) return '00:00 am'
  const date = new Date(timestamp * 1000)
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const h = hours < 10 ? '0' + hours : hours;
  const m = minutes < 10 ? '0' + minutes : minutes;
  return h + ':' + m + ampm;
}

export const formatSimpleTime = (timestamp?: number): string => {
  if (!timestamp) return '0 am'
  const date = new Date(timestamp * 1000)
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return hours + ' ' + ampm;
}
