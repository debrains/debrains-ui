import axios from 'axios';

export const signFactory = ({ baseUrl }) => {
  // NOTE 구글 회원가입 & 로그인
  const getGoogleSignin = async () => {
    return axios
      .get(`${baseUrl}/google`)
      .then((res) => res.data)
      .catch((e) => e);
  };

  return {
    getGoogleSignin,
  };
};
