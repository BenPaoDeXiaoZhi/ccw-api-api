import { loginByPassword } from "./web/auth/login-by-password";
import { logout } from "./web/auth/logout";
import { logoutBySession } from "./web/auth/logout_by_session";
import { createSmsCaptcha } from "./web/auth/assistant/captcha/v2/create";
import { loginByPhone } from "./web/auth/v3/login/by-phone";

export const sso = {
  loginByPassword,
  logout,
  logoutBySession,
  createSmsCaptcha,
  loginByPhone,
};
