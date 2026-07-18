import { getCheckInRecords } from "./detail";
import { insertCheckInRecord } from "./insert";
import {
  test,
  testAuthReadApi,
  testAuthWriteApi,
  expectKeys,
} from "src/testUtils";
import assert from "node:assert/strict";

test("get check in records should fail without channel", async () => {
  await testAuthReadApi(() => getCheckInRecords(), {
    rejectMessage: "token为空(4001082401)",
    validateShape: (res) => {
      expectKeys(res, ["checkInRecordResps", "checkInTimes", "todayIndex"]);
      assert.strictEqual(
        Array.isArray(res.checkInRecordResps),
        true,
        "expected values to be strictly equal",
      );
      assert.strictEqual(
        typeof res.checkInTimes,
        "number",
        "expected values to be strictly equal",
      );
      assert.strictEqual(
        typeof res.todayIndex,
        "number",
        "expected values to be strictly equal",
      );
    },
  });
});

test("insert check in record should fail without token", async () => {
  await testAuthWriteApi(() => insertCheckInRecord(), {
    rejectMessage: "failed: token为空(4001082401)",
  });
});
