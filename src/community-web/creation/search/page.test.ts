import { searchCreationsByTag } from "./page";

test("search creations by tag should return data", async () => {
  const res = await searchCreationsByTag("史莱姆之森");
  expect(Array.isArray(res)).toBe(true);
});