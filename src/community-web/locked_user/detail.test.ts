import { getLockedUserDetail } from "./detail";

const ACCOUNT_OID = "63c2807d669fa967f17f5559";

test("get locked user detail should return data", async () => {
  const res = await getLockedUserDetail(ACCOUNT_OID);
  expect(res.locked).toBeDefined();
});
