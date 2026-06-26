import { loginByPassword } from "./web/auth/login-by-password";
import { logout } from "./web/auth/logout";
import { logoutBySession } from "./web/auth/logout_by_session";

export const sso = {
  loginByPassword,
  logout,
  logoutBySession,
};
