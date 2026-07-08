import { testAuthReadApi, testAuthWriteApi } from "src/testUtils";
import { getLeaderboardRecords, submitLeaderboardRecord } from "./records";

test("submit leaderboard record should fail without token", async () => {
  await testAuthWriteApi(
    () =>
      submitLeaderboardRecord(
        "65a2314daa96bd09b5beae5a",
        0,
        "65a2314daa96bd09b5beae5a",
        "",
      ),
    {},
  );
});

test("get leaderboard records should return data", async () => {
  await testAuthReadApi(
    () => getLeaderboardRecords("65a2314daa96bd09b5beae5a"),
    {
      validateShape: (res) => {
        expect(typeof res).toBe("object");
        expect(res.oid).toBe("65a2314daa96bd09b5beae5a");
        expect(res.title).toBeDefined();
        expect(res.leaderboardRecordTotalNum).toBeDefined();
        expect(Array.isArray(res.leaderboardRecords)).toBe(true);
      },
    },
  );
});
