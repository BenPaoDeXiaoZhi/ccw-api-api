import { getTime } from "../base/dateTime";

test("get time should return a number", async () => {
  const time = await getTime();
  expect(typeof time).toBe("number");
  expect(time).toBeGreaterThan(0);
});