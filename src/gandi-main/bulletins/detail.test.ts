import { getBulletinsPage } from "./page";
import { getBulletinDetail } from "./detail";
import { test, beforeAll } from "src/testUtils";
import assert from "node:assert/strict";

let sampleBulletinId: number;

beforeAll(async () => {
  const bulletins = await getBulletinsPage();
  if (bulletins.data.length > 0) {
    sampleBulletinId = bulletins.data[0].id;
  }
}, 30000);

test("get bulletin detail should return data", async () => {
  if (!sampleBulletinId) {
    return;
  }
  const res = await getBulletinDetail(sampleBulletinId);
  assert.strictEqual(res.id, (sampleBulletinId), "expected values to be strictly equal");
  assert.ok(((res.title) !== undefined), "expected value to be defined");
});
