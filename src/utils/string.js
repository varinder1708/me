function camelCase(str) {
  return str
    .replace(/(?:^|\s)\w/g, match => match.toUpperCase())
    .replace(/(\s|-|_)/g, '');
}

function startsWith(haystack, needle) {
  return haystack.indexOf(needle) === 0;
}

export default {
  camelCase,
  startsWith,
};
