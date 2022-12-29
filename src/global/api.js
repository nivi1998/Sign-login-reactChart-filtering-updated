import axios from 'axios';

/**
 * Common API method
 * @param {string} method GET | POST | DELETE | PATCH
 * @param {string} baseURL http://api.example.com
 * @param {string} url /user/id
 * @param {object} params Query parameters
 * @param {object} headers API headers are appended to common headers
 * @param {object} body API body / Empty by default
 */

export default async (method, url, params = {}, headers = {}, body = {}) => {
  try {
    const commonHeaders = {
      //     email: localStorage.getItem('EMAIL_ID'),
      //     userId: localStorage.getItem('USER_ID'),
      // 'Access-Control-Allow-Origin': '*',
      //Authorization: auth_token,
      //     userTokenUniqueId: localStorage.getItem('USER_TOKEN_ID'),
      //     deviceId: localStorage.getItem('DEVICEID'),
      //     deviceName: localStorage.getItem('DEVICENAME'),
      //     deviceModel: localStorage.getItem('DEVICEMODEL'),
      //     os: localStorage.getItem('OS'),
      //     osVersion: localStorage.getItem('OSVERSION'),
      //     browserVersion: localStorage.getItem('BROWSERVERSION'),
      //     id: localStorage.getItem('USER_ID'),
    };

    //console.log('commonHeaders------------->>', commonHeaders);

    const response = await axios({
      method,
      // baseURL,
      url,
      params: { ...params },
      headers: { ...commonHeaders, ...headers },
      data: body,
    });
    //console.log('Response', response?.data?.data);

    return {
      status: response.status,
      message: response.data.message,
      data: response.data,
    };
  } catch (error) {
    //console.log('error:::::', error?.toJSON()?.status);
    return {
      data: error,
      err: error.response,
      message: error.response !== undefined ? error.response.statusText : '',
      status: error.response !== undefined ? error.response.status : 'failed',
    };
  }
};
