import { getSearchHotWords } from "./hot_words";

test("get search hot words", async () => {
  const hotWords = await getSearchHotWords(10);
  expect(Array.isArray(hotWords)).toBe(true);
  expect(hotWords).toHaveLength(10);
});
