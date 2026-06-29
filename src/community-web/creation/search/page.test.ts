import { searchCreationsByTag } from "./page";

test("search creations by tag should return data", async () => {
  const res = await searchCreationsByTag({ tag: "史莱姆之森" });
  expect(Array.isArray(res.data)).toBe(true);
});
