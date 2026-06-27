import { getUserLabelList } from "./list";

test("get user label list", async () => {
  const result = await getUserLabelList();
  expect(Array.isArray(result.userLabels)).toBe(true);
});
