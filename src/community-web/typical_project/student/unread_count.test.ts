import { testAuthReadApi } from "src/testUtils";
import { getTypicalProjectUnreadCount } from "./unread_count";

test("get typical project unread count should fail without token", async () => {
  await testAuthReadApi(
    () => getTypicalProjectUnreadCount("63c2807d669fa967f17f5559"),
    {
      rejectMessage: "token为空",
      validateShape: (res) => {
        expect(typeof res).toBe("number");
      },
    },
  );
});
