import { loginByPassword } from "./login-by-password";
import { logout } from "./logout";
import { logoutBySession } from "./logout_by_session";
import { hasRealToken } from "src/testUtils";

test("expect wrong password to be error", async () => {
  await expect(
    loginByPassword("abc", "foo", {
      device: "test",
      browser: "test",
    }),
  ).rejects.toThrow("ccw axios Request failed: 账号或密码错误(4001092401)");
});

test("expect logout to be error when no token", async () => {
  if (hasRealToken()) {
    return;
  }
  await expect(logout()).rejects.toThrow(
    "ccw axios Request failed: token不能为空(4001092X01)",
  );
});

test("expect logout-by-session to be error when not logged in", async () => {
  if (hasRealToken()) {
    return;
  }
  await expect(logoutBySession(1145)).rejects.toThrow(
    "ccw axios Request failed: 用户未登录(4001092401)",
  );
});
