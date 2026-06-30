import { loginByPhone } from "./by-phone";

test("expect wrong sms code to throw error", async () => {
  await expect(
    loginByPhone("12345671145", "000000", {
      device: "Node.js Test",
      browser: "Jest",
    }),
  ).rejects.toThrow();
}, 30000);
