import {
  TOI_LIVE_DOMAIN,
  TOI_DEV_DOMAIN,
  GOOGLE_WEBCACHE_DOMAIN,
} from '../constants';

export function debounce(func, wait, immediate) {
  let timeout;
  return function debouncer() {
    const context = this;
    const args = arguments;
    const later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
export const insertAtIndexInArray = (myArray, index, item) => {
  if (myArray instanceof Array) {
    myArray.splice(index, 0, item);
    return myArray;
  }
  return myArray;
};

export function getSiteDomain() {
  const isDev = process.argv.includes('--dev');
  return isDev ? TOI_DEV_DOMAIN : TOI_LIVE_DOMAIN;
}

export function getNavigationPath(path, depth) {
  const navigationPath = path
    .split('/')
    .slice(0, depth + 1)
    .join('/');

  return navigationPath;
}
export function sanitizeQueryParams(paramsObj) {
  const sanitizedParamsObj = {};

  // loop through params keys, if value is array, pick its last value as param's value
  Object.keys(paramsObj).forEach(paramKey => {
    const paramValue = paramsObj[paramKey];
    if (Array.isArray(paramValue)) {
      sanitizedParamsObj[paramKey] = paramValue[paramValue.length - 1];
    } else {
      sanitizedParamsObj[paramKey] = paramValue;
    }
  });

  return sanitizedParamsObj;
}

export function disableAppInit() {
  return (
    window.location.hostname === GOOGLE_WEBCACHE_DOMAIN ||
    window.document.domain === GOOGLE_WEBCACHE_DOMAIN
  );
}
