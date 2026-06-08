import { loginByPassword } from "./login-by-password";
import { logout } from "./logout";
test("expect password to be error", async () => {
  await expect(() =>
    loginByPassword("abc", "foo", {
      device: "test",
      browser: "test",
    }),
  ).rejects.toThrow("ccw axios Request failed: 账号或密码错误(4001092401)");
});

test("expect logout to be error when no token", async () => {
  await expect(logout).rejects.toThrow(
    "ccw axios Request failed: token不能为空(4001092X01)",
  );
});
