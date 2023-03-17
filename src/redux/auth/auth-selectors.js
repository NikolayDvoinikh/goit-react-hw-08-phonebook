export const selectUser = ({ auth }) => auth.user;
export const selectIsUserLogin = ({ auth }) => auth.isLogin;
export const selectAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
