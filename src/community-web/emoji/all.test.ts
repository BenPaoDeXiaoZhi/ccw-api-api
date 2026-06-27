import { getAllEmojis } from "./all";

test("get all emojis should return data", async () => {
  const res = await getAllEmojis();
  expect(Array.isArray(res)).toBe(true);
  if (res.length > 0) {
    expect(res[0].id).toBeDefined();
    expect(res[0].name).toBeDefined();
    expect(res[0].imageUrl).toBeDefined();
    expect(res[0].category).toBeDefined();
  }
});
