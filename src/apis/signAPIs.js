export const signFactory = ({ baseUrl }) => {
  const { origin } = window.location;

  // NOTE 구글 회원가입 & 로그인
  const getGoogleSignIn = () => `${baseUrl}/google?redirect_uri=${origin}/oauth2/redirect`;
  const getGithubSignIn = () => `${baseUrl}/github?redirect_uri=${origin}/oauth2/redirect`;

  return {
    getGoogleSignIn,
    getGithubSignIn,
  };
};
