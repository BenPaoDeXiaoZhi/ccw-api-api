import { produceTeamMemberTicket } from "./produce_ticket";

test("produce team member ticket should fail without token", async () => {
  await expect(
    produceTeamMemberTicket("63c2807d669fa967f17f5559"),
  ).rejects.toThrow("token为空");
});
