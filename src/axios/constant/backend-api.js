// SERVER URL
const IP_URL = import.meta.env.VITE_SERVER_URL;

// URIs
export const BACKEND_API = {
  // AUTHENTICATION API'S
  REGISTER: IP_URL + '/employee/register',
  LOGIN: IP_URL + '/employee/login',
  SET_PASSWORD: IP_URL + '/employee/set-pwd',
  LOGOUT: IP_URL + '/employee/logout',
};
