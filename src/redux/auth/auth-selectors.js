export const selectUser = ({ auth }) => auth.user;
export const selectIsUserLogin = ({ auth }) => auth.isLogin;
export const selectAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
export const isAuthLoading = ({ auth }) => auth.isLoading;
export const isError = ({ auth }) => auth.error;
export const resetMessage = ({ auth }) => auth.resetMessage;
