import { bindStudentPhone } from "./bind-phone";
import { testAuthWriteApi } from "src/testUtils";

test("bind student phone", async () => {
  await testAuthWriteApi(
    () => bindStudentPhone("12345679999", "000000", "86"),
    {
      rejectMessage: "token为空",
    },
  );
});
