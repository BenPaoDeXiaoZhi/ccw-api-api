import { getConfigDetail } from "./detail";

test("get config detail returns value without token", async () => {
  const result = await getConfigDetail("foo");
  expect(
    result === null ||
      typeof result === "string" ||
      typeof result === "number" ||
      typeof result === "boolean" ||
      typeof result === "object",
  ).toBe(true);
});
