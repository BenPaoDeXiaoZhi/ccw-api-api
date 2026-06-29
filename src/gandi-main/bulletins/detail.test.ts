import { getBulletinsPage } from "./page";
import { getBulletinDetail } from "./detail";

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
  expect(res.id).toBe(sampleBulletinId);
  expect(res.title).toBeDefined();
});
