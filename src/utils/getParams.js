export const getCurrentPage = function(query) {
  if (typeof query !== 'object' || !parseInt(query.curpg, 10)) {
    return 1;
  }
  return parseInt(query.curpg, 10);
};
export const isApp = function(query) {
  if (typeof query !== 'object') {
    return false;
  }
  return query.frmapp === 'yes';
};
