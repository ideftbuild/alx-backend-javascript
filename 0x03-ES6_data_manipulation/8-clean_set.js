export default function cleanSet(set, startString) {
  if (!set || !(set instanceof Set) || !startString || typeof startString !== 'string') {
    return '';
  }

  const result = [];
  set.forEach((str) => {
    if (str.startsWith(startString) && str !== startString) {
      result.push(str.slice(startString.length));
    }
  });
  return result.join('-');
}
