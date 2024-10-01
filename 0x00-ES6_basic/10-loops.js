export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const [idx, value] of array.entries()) {
    newArray[idx] = appendString + value;
  }

  return newArray;
}
