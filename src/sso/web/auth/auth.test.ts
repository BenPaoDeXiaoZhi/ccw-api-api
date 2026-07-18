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
    (e_) => {
      const e = e_ as Error;
      return e.message.includes("密码错误");
    },
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
    (e_) => {
      const e = e_ as Error;
      return e.message.includes("token不能为空");
    },
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
    (e_) => {
      const e = e_ as Error;
      return e.message.includes("用户未登录");
    },
    "expected promise to reject matching",
  );
});
