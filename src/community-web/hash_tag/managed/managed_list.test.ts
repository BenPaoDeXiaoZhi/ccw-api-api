import { getManagedHashTags } from "./list";

const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get managed hash tags should return data", async () => {
  const res = await getManagedHashTags(STUDENT_OID);
  expect(typeof res.totalPages).toBe("number");
  expect(typeof res.totalNum).toBe("number");
  expect(Array.isArray(res.data)).toBe(true);
  expect(res.page).toBeGreaterThanOrEqual(1);
  expect(res.perPage).toBeGreaterThanOrEqual(1);
});
