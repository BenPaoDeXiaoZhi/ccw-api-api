import { testAuthReadApi } from "src/testUtils";
import { getStudentBlockRecordDetail } from "./detail";

test("get student block record detail should fail without token", async () => {
  await testAuthReadApi(
    () => getStudentBlockRecordDetail("63c2807d669fa967f17f5559"),
    {
      rejectMessage: "token为空",
      validateShape: (res) => {
        expect(typeof res).toBe("object");
        expect(res).toBeDefined();
      },
    },
  );
});
