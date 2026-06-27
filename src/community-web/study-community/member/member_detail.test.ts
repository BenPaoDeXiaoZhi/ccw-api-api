import { getStudyCommunityMemberDetail } from "./detail";

test("get study community member detail should reject without login", async () => {
  await expect(getStudyCommunityMemberDetail()).rejects.toThrow();
});
