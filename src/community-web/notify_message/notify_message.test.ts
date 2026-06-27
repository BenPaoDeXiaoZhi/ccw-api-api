import { getNotifyDeleteReasons } from "./show";

test("get notify delete reasons", async () => {
  const result = await getNotifyDeleteReasons();
  expect(Array.isArray(result)).toBe(true);
});
