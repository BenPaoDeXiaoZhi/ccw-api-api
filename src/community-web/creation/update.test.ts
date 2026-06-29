import { updateCreation } from "./update";

test("update creation should fail without token", async () => {
  await expect(
    updateCreation(
      "63c2807d669fa967f17f5559",
      "https://m.ccw.site/a",
      "LANDSCAPE",
      "https://m.ccw.site/a",
    ),
  ).rejects.toThrow("token为空");
});
