import { testAuthReadApi } from "src/testUtils";
import { getStudentBlockStatus } from "./status";

const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get student block status should reject without login", async () => {
  await testAuthReadApi(() => getStudentBlockStatus(STUDENT_OID), {
    rejectMessage: "token为空",
    validateShape: (res) => {
      expect(typeof res).toBe("object");
      expect(res).toBeDefined();
    },
  });
});
