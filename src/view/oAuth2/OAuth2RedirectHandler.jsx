import dayjs from 'dayjs';

import React from 'react';
import { ACCESS_TOKEN } from 'consts/consts';
import { Navigate, useLocation } from 'react-router-dom';

export default function OAuth2RedirectHandler() {
  const location = useLocation();

  const getUrlParameter = (type) => {
    const params = new URLSearchParams(location.search);
    const results = params.get(type);
    return results === null ? '' : results;
  };

  const token = getUrlParameter(ACCESS_TOKEN);
  const tokenObj = {
    accessToken: token,
    expireAT: dayjs().add(1, 'hour').format(),
  };

  if (token) {
    localStorage.setItem(ACCESS_TOKEN, JSON.stringify(tokenObj));
  }

  return <Navigate to={{ pathname: '/' }} />;
}
