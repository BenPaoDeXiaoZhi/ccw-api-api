import { getCheckInRecords } from "./detail";
import { insertCheckInRecord } from "./insert";

test("get check in records should fail without channel", async () => {
  await expect(getCheckInRecords).rejects.toThrow(
    "ccw axios Request failed: token为空(4001082401)",
  );
});

test("insert check in record should fail without token", async () => {
  await expect(insertCheckInRecord).rejects.toThrow(
    "ccw axios Request failed: token为空(4001082401)",
  );
});
