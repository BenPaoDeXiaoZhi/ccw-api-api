import { queryMallProducts } from "./query";
import { testAuthReadApi, expectKeys } from "src/testUtils";

test("query mall product page should fail without token", async () => {
  await testAuthReadApi(
    () =>
      queryMallProducts(7, {
        page: 1,
        perPage: 30,
        sortType: "DESC",
      }),
    {
      validateShape: (res) => {
        expectKeys(res, [
          "data",
          "offset",
          "page",
          "perPage",
          "totalNum",
          "totalPages",
        ]);
      },
    },
  );
});
