import { testAuthReadApi, testAuthWriteApi, expectKeys } from "src/testUtils";
import { getCheckInRecords } from "./detail";
import { insertCheckInRecord } from "./insert";

test("get check in records should fail without channel", async () => {
  await testAuthReadApi(() => getCheckInRecords(), {
    rejectMessage: "ccw axios Request failed: token为空(4001082401)",
    validateShape: (res) => {
      expectKeys(res, ["checkInRecordResps", "checkInTimes", "todayIndex"]);
      expect(Array.isArray(res.checkInRecordResps)).toBe(true);
      expect(typeof res.checkInTimes).toBe("number");
      expect(typeof res.todayIndex).toBe("number");
    },
  });
});

test("insert check in record should fail without token", async () => {
  await testAuthWriteApi(() => insertCheckInRecord(), {
    rejectMessage: "ccw axios Request failed: token为空(4001082401)",
  });
});
