import { getSmartContractDetail } from "./detail";

test("should fail without token when getting smart contract detail", async () => {
  await expect(getSmartContractDetail(2022277721908162)).rejects.toThrow();
});