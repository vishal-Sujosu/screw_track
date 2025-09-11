import axios from 'axios';
import * as Qs from 'qs';

const requestQueue = [];
let isRefreshing = false;

const axiosAPI = axios.create({
	baseURL: '',
	withCredentials: true
});

const checkTokenExpired = async (err) => {
	const resData = err?.response?.data;

	if (!resData) return false;

	if (typeof resData === 'string') {
		return resData === 'Token Expired';
	}

	if (resData instanceof Blob) {
		const text = await resData.text();
		return text === 'Token Expired';
	}

	if (typeof resData === 'object') {
		return resData.message === 'Token Expired';
	}

	return false;
};

  axiosAPI.interceptors.response.use(
    (res) => res,
    async (err) => {
      const originalRequest = err.config;

      if (originalRequest._retry) {
        return Promise.reject(err);
      }

      const isExpired = await checkTokenExpired(err);

      if (isExpired) {
        originalRequest._retry = true;

        if (!isRefreshing) {
          isRefreshing = true;

          try {
            await refreshToken();

            requestQueue.forEach(({ resolve, reject, config }) => {
              config._retry = true;
              axiosAPI(config).then(resolve).catch(reject);
            });
            requestQueue.length = 0;

            return axiosAPI(originalRequest);
          } catch (refreshError) {
            requestQueue.forEach(({ reject }) => reject(refreshError));
            requestQueue.length = 0;
            return Promise.reject(refreshError);
          } finally {
            isRefreshing = false;
          }
        } else {
          return new Promise((resolve, reject) => {
            requestQueue.push({ resolve, reject, config: originalRequest });
          });
        }
      }

      return Promise.reject(err);
    }
  );

const refreshToken = async () => {
	//return await getRefreshToken();
};

const resolveQueryString = (params) => {
	return Qs.stringify(params, { indices: false });
};

export const getRequest = (url, params) => {
	return axiosAPI({
		method: 'get',
		url: url,
		params: params ? params : {},
		paramsSerializer: (queryParams) => resolveQueryString(queryParams)
	});
};

export const postRequest = (url, body, params, headers) => {
	return axiosAPI({
		method: 'post',
		url: url,
		params: params ? params : {},
		paramsSerializer: (queryParams) => resolveQueryString(queryParams),
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
		paramsSerializer: (queryParams) => resolveQueryString(queryParams)
	});
};
