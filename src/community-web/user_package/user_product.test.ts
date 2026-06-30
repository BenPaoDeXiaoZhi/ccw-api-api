import { getUserProductsPage, ProductCategory } from "./user_product";

test("should fail without token for avatar frame products", async () => {
  await expect(
    getUserProductsPage(ProductCategory.AVATAR_FRAME, {
      page: 1,
      perPage: 8,
      sortType: "DESC",
      sortField: "",
    }),
  ).rejects.toThrow();
});
