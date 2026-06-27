import { getSubjectAreaPage } from "./page";

test("get subject area page", async () => {
  const result = await getSubjectAreaPage("HOMEPAGE");
  expect(Array.isArray(result.data)).toBe(true);
});
