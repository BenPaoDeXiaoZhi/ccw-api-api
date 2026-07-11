import { produceTeamMemberTicket } from "./produce_ticket";
import { test, testAuthWriteApi } from "src/testUtils";

test("produce team member ticket should fail without token", async () => {
  await testAuthWriteApi(
    () => produceTeamMemberTicket("63c2807d669fa967f17f5559"),
    {
      rejectMessage: "token为空",
    },
  );
});
