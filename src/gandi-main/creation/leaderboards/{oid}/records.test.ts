import { getLeaderboardRecords, submitLeaderboardRecord } from "./records";

test("submit leaderboard record should fail without token", async () => {
  await expect(
    submitLeaderboardRecord(
      "65a2314daa96bd09b5beae5a",
      0,
      "65a2314daa96bd09b5beae5a",
      "",
    ),
  ).rejects.toThrow();
});

test("get leaderboard records should return data", async () => {
  const res = await getLeaderboardRecords("65a2314daa96bd09b5beae5a");
  expect(res.oid).toBe("65a2314daa96bd09b5beae5a");
  expect(res.title).toBeDefined();
  expect(res.leaderboardRecordTotalNum).toBeDefined();
  expect(Array.isArray(res.leaderboardRecords)).toBe(true);
});
