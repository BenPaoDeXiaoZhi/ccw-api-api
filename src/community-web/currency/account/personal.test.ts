import { getPersonalCurrencyAccount } from "./personal";

test("get personal currency account should reject without login", async () => {
  await expect(getPersonalCurrencyAccount()).rejects.toThrow();
});
