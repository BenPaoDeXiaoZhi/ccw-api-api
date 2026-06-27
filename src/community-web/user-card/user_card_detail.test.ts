import { getUserCardDetail } from "./detail";

const USER_OID = "63c2807d669fa967f17f5559";

test("get user card detail", async () => {
  const card = await getUserCardDetail(USER_OID);
  expect(card.user.oid).toBe(USER_OID);
});
