import axios from 'axios';

axios.defaults.baseURL = '/api/'

const axiosNext = async (newAxios, localStorage) => {
  if (localStorage) {
    const value = localStorage.getItem('authToken');
    if (value) {
      axios.defaults.headers.common = {
        Authorization: `bearer ${value}`,
      };
    } else {
      axios.defaults.headers.common = {
        Authorization: null,
      };
    }
  }
  let response = newAxios(axios)
  return response;
}

export default axiosNext;