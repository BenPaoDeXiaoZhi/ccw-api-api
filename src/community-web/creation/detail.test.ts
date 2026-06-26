import { getCreationDetail } from "./detail";
import { getExcellentCreations } from "./excellent/list";

let sampleCreationOid: string;

beforeAll(async () => {
  const creations = await getExcellentCreations(1);
  if (creations.length > 0) {
    sampleCreationOid = creations[0].oid;
  }
}, 30000);

test("get creation detail should return data", async () => {
  if (!sampleCreationOid) {
    return;
  }
  const res = await getCreationDetail(sampleCreationOid, "");
  expect(res.oid).toBe(sampleCreationOid);
  expect(res.title).toBeDefined();
  expect(res.student).toBeDefined();
});
