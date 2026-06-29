import { getCreationActivityStatsList } from "./list";

test("get creation activity stats list returns array without token", async () => {
  const result = await getCreationActivityStatsList(
    "63c2807d669fa967f17f5559",
  );
  expect(Array.isArray(result)).toBe(true);
});
