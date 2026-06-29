import { getLikeDetail } from "./detail";
import { getExcellentCreations } from "../excellent/list";

let sampleCreationOid: string;

beforeAll(async () => {
  const creations = await getExcellentCreations(1);
  if (creations.length > 0) {
    sampleCreationOid = creations[0].oid;
  }
}, 30000);

test("get like detail should return data", async () => {
  if (!sampleCreationOid) {
    return;
  }
  const res = await getLikeDetail(sampleCreationOid);
  if (res) {
    expect(res.creationOid).toBe(sampleCreationOid);
    expect(res.action).toBeDefined();
  }
});
