import { getRemixedCreationPage } from "./page";
import { getExcellentCreations } from "./excellent/list";

let sampleCreationOid: string;

beforeAll(async () => {
  const creations = await getExcellentCreations(1);
  if (creations.length > 0) {
    sampleCreationOid = creations[0].oid;
  }
}, 30000);

test("get creation page should return data", async () => {
  if (!sampleCreationOid) {
    return;
  }
  const res = await getRemixedCreationPage([sampleCreationOid]);
  expect(Array.isArray(res.data)).toBe(true);
});
