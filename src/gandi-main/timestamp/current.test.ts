import { getCurrentTimestamp } from "./current";

test("get current timestamp should return a number", async () => {
  const ts = await getCurrentTimestamp();
  expect(typeof ts).toBe("number");
  expect(ts).toBeGreaterThan(0);
});
