import axios from "axios";

const axiosAPI = axios.create({
  baseURL : "" 
});

export const getRequest = (url, params) => {
  return axiosAPI({
    method: 'get',
    url: url,
    params: params ? params : {},
    //paramsSerializer: (queryParams) => resolveQueryString(queryParams)
  });
};

export const postRequest = (url, body, params, headers) => {
  return axiosAPI({
    method: 'post',
    url: url,
    params: params ? params : {},
    //paramsSerializer: (queryParams) => resolveQueryString(queryParams),
    data: body,
    headers: headers ? headers : {}
  });
};

export const putRequest = (url, body) => {
  return axiosAPI({
    method: 'put',
    url: url,
    data: body
  });
};

export const deleteRequest = (url, params) => {
  return axiosAPI({
    method: 'delete',
    url: url,
    params: params ? params : {},
    //paramsSerializer: (queryParams) => resolveQueryString(queryParams)
  });
};