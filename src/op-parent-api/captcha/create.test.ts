import { createCaptcha } from "./create";

test("create BLOCK_PUZZLE captcha returns bgImg, jigsawImg and token without token", async () => {
  const res = await createCaptcha("BLOCK_PUZZLE");
  expect(res).toHaveProperty("data");
  expect(res.data).toHaveProperty("bgImg");
  expect(res.data).toHaveProperty("jigsawImg");
  expect(res).toHaveProperty("token");
  expect(typeof res.token).toBe("string");
  expect(typeof res.data.bgImg).toBe("string");
  expect(typeof res.data.jigsawImg).toBe("string");
  expect(res.data.bgImg.startsWith("data:image/png;base64,")).toBeTruthy();
  expect(res.data.jigsawImg.startsWith("data:image/png;base64,")).toBeTruthy();
}, 30000);
