import { getStudentBlockStatus } from "./status";

/**
 * 神秘ai想要把我加进黑名单吗()
 */
const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get student block status should reject without login", async () => {
  await expect(getStudentBlockStatus(STUDENT_OID)).rejects.toThrow("token为空");
});
