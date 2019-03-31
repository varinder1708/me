export function getMilliSecondsTimestamp(timestamp) {
  let milliTimestamp = timestamp;
  const timestampLen = timestamp.toString().length;
  const zerosToAdd = 13 - timestampLen;

  if (zerosToAdd > 0) {
    for (let i = 0; i < zerosToAdd; ) {
      milliTimestamp *= 10;
      i += 1;
    }
  }

  return milliTimestamp;
}

export default {
  getMilliSecondsTimestamp,
};
