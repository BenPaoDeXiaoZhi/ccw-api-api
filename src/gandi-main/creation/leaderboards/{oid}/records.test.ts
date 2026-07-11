import { getLeaderboardRecords, submitLeaderboardRecord } from "./records";
import { test, testAuthReadApi, testAuthWriteApi } from "src/testUtils";
import assert from "node:assert/strict";

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
        assert.strictEqual(typeof res, ("object"), "expected values to be strictly equal");
        assert.strictEqual(res.oid, ("65a2314daa96bd09b5beae5a"), "expected values to be strictly equal");
        assert.ok(((res.title) !== undefined), "expected value to be defined");
        assert.ok(((res.leaderboardRecordTotalNum) !== undefined), "expected value to be defined");
        assert.strictEqual(Array.isArray(res.leaderboardRecords), (true), "expected values to be strictly equal");
      },
    },
  );
});
