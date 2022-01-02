import axios from 'common/axios';
import { AxiosResponse } from 'axios';

const processRequest = async <T>(axiosRequest: Promise<AxiosResponse<T>>): Promise<T> => {
  try {
    const response = await axiosRequest;

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const getQueryString = (params: CommonObj<string>): string => {
  if (!params || !Object.keys(params).length) return '';

  const esc = encodeURIComponent;

  let query = '?';

  query += Object.keys(params)
    .map((k) => `${esc(k)}=${esc(params[k])}`)
    .join('&');

  return query;
};

export const BASE_URL = process.env.PUBLIC_URL;

export const getUrl = (url: string): string => BASE_URL + url;
export const isDev = (): boolean => !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
export const getFileLoadUrl = (url: string): string => (isDev() ? `http://localhost:9004${getUrl(url)}` : getUrl(url));

const getDefaultRequestOptions = (modifier: CommonObj = {}): CommonObj => {
  const headerModifier = modifier.headers ? { ...modifier.headers } : {};

  return {
    ...modifier,
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      ...headerModifier,
    },
  };
};

const httpGet = <T>(url: string, headerModifier: CommonObj = {}, queryParams: CommonObj = {}): Promise<T> => {
  const headers = getDefaultRequestOptions(headerModifier);
  const axiosData = axios.get<T>(`${url}${getQueryString(queryParams)}`, headers);

  return processRequest<T>(axiosData);
};

const httpPost = <T, D>(url: string, data: D, headerModifier: CommonObj = {}): Promise<T> => {
  const request = axios.post<T>(url, data, getDefaultRequestOptions(headerModifier));

  return processRequest<T>(request);
};

const httpPut = <T, D>(url: string, data: D, headerModifier: CommonObj = {}): Promise<T> => {
  const request = axios.put<T>(url, data, getDefaultRequestOptions(headerModifier));

  return processRequest<T>(request);
};

const httpPatch = <T, D>(url: string, data: D, headerModifier: CommonObj = {}): Promise<T> => {
  const request = axios.patch<T>(url, data, getDefaultRequestOptions(headerModifier));

  return processRequest<T>(request);
};

const httpDelete = (url: string, headerModifier: CommonObj = {}) => {
  const request = axios.delete(url, getDefaultRequestOptions(headerModifier));

  return processRequest(request);
};

export default {
  get: httpGet,
  post: httpPost,
  patch: httpPatch,
  put: httpPut,
  delete: httpDelete,
};
