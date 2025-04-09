import jwtDecode from 'jwt-decode';

export const getTokenFromUrl = () => {
  const hash = window.location.href.split('#')[1];
  const query = new URLSearchParams(hash);
  return {
    idToken: query.get('id_token'),
    accessToken: query.get('access_token'),
  };
};

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (e) {
    return null;
  }
};
