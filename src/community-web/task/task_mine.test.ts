import { getMyTasks } from "./mine";
import { testAuthReadApi } from "src/testUtils";

test("get my tasks", async () => {
  await testAuthReadApi(() => getMyTasks(), {
    rejectMessage: "token为空",
    validateShape: (res) => {
      expect(Array.isArray(res)).toBe(true);
    },
  });
});
