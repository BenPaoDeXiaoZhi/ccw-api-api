import { updateGreatCreation } from "./update";

test("should fail without token when updating great creation", async () => {
  await expect(
    updateGreatCreation("69740f1a61b891733d5ee2c6"),
  ).rejects.toThrow();
});
