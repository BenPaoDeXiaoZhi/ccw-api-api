import { queryMallProducts } from "./query";

test("query mall product page should fail without token", async () => {
  await expect(
    queryMallProducts(7, {
      page: 1,
      perPage: 30,
      sortType: "DESC",
    }),
  ).rejects.toThrow();
});
