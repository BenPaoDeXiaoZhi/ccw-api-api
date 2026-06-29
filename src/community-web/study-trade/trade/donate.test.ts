import { donateTrade } from "./donate";

test("donate trade should fail without token", async () => {
  await expect(
    donateTrade(1, "68ce4849811b737483bf7027", "CREATION"),
  ).rejects.toThrow();
});
