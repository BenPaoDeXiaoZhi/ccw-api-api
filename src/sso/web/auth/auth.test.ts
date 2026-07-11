import { loginByPassword } from "./login-by-password";
import { logout } from "./logout";
import { logoutBySession } from "./logout_by_session";
import { test, hasRealToken } from "src/testUtils";
import assert from "node:assert/strict";

test("expect wrong password to be error", async () => {
  await assert.rejects(
    async () => {
      const r = loginByPassword("abc", "foo", {
        device: "test",
        browser: "test",
      });
      return r;
    },
    /ccw axios Request failed: 账号或密码错误\(4001092401\)/,
    "expected promise to reject matching",
  );
});

test("expect logout to be error when no token", async () => {
  if (hasRealToken()) {
    return;
  }
  await assert.rejects(
    async () => {
      const r = logout();
      return r;
    },
    /ccw axios Request failed: token不能为空\(4001092X01\)/,
    "expected promise to reject matching",
  );
});

test("expect logout-by-session to be error when not logged in", async () => {
  if (hasRealToken()) {
    return;
  }
  await assert.rejects(
    async () => {
      const r = logoutBySession(1145);
      return r;
    },
    /ccw axios Request failed: 用户未登录\(4001092401\)/,
    "expected promise to reject matching",
  );
});
