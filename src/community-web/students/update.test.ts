import { updateStudent } from "./update";
import { testAuthWriteApi } from "src/testUtils";

test("update student", async () => {
  await testAuthWriteApi(
    () =>
      updateStudent("MALE", false, "测试用户", Date.now(), "", "", "", "", ""),
    {},
  );
});
