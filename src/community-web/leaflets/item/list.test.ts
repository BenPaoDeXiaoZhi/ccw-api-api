import { getLeafletsItemList } from "./list";

test("get leaflets item list should return data", async () => {
  const res = await getLeafletsItemList(1);
  expect(Array.isArray(res)).toBe(true);
});
