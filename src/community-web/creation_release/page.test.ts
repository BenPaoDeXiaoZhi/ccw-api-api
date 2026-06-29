import { getCreationReleasePage } from "./page";

test("get creation release page returns PagesRes without token", async () => {
  const result = await getCreationReleasePage("69929185f8d6142487fd4b2e");
  expect(result).toHaveProperty("data");
  expect(result).toHaveProperty("page");
  expect(result).toHaveProperty("perPage");
  expect(result).toHaveProperty("totalNum");
  expect(result).toHaveProperty("totalPages");
  expect(Array.isArray(result.data)).toBe(true);
  expect(typeof result.totalNum).toBe("number");
  expect(typeof result.totalPages).toBe("number");
});
