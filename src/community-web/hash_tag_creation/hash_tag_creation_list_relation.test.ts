import { getPlanetsOfCreation } from "./list_relation";

test("get hash tag creation relation list should reject without login", async () => {
  await expect(
    getPlanetsOfCreation("6880873d2211fa69e41c9d19"),
  ).rejects.toThrow("token为空");
});
