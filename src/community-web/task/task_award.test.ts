import { acceptAward } from "./award";

const TASK_OID = "61273ccf1730f4308e853f6a";

test("award task should reject without login", async () => {
  await expect(acceptAward(TASK_OID)).rejects.toThrow("token为空");
});
