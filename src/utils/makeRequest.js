import axios from 'axios';
import { getSiteDomain } from '../utils/common';

export default class makeRequest {
  constructor(obj) {
    return axios(obj);
  }

  static appendDomainToUrl(url) {
    let isRelativeUrl;
    const endpointData = [];

    const domain = getSiteDomain();

    if (url && typeof url === 'string') {
      isRelativeUrl = url.indexOf('http') === -1 && url.indexOf('.com') === -1;
    }
    if (isRelativeUrl) {
      if (url[0] === '/') {
        endpointData.push(domain);
      } else {
        endpointData.push(domain);
        endpointData.push('/');
      }
    }
    endpointData.push(url);
    return endpointData.join('');
  }

  static get() {
    const params = Object.assign([], arguments);
    params[0] = makeRequest.appendDomainToUrl(params[0]);
    return axios.get.apply(null, params);
  }

  static post() {
    const params = Object.assign([], arguments);
    params[0] = makeRequest.appendDomainToUrl(params[0]);
    return axios.post.apply(null, params);
  }
}
