import { changeStudentPassword } from "./change";
import { testAuthWriteApi } from "src/testUtils";

test("change student password", async () => {
  await testAuthWriteApi(() => changeStudentPassword("newPass123", "000000"), {
    rejectMessage: "token为空",
  });
});
