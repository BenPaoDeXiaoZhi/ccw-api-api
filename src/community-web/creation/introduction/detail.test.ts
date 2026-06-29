import { getCreationIntroduction } from "./detail";
import { getExcellentCreations } from "../excellent/list";

let sampleStudentOid: string;

beforeAll(async () => {
  const creations = await getExcellentCreations(1);
  if (creations.length > 0) {
    sampleStudentOid = creations[0].studentOid;
  }
}, 30000);

test("get creation introduction should return data", async () => {
  if (!sampleStudentOid) {
    return;
  }
  const res = await getCreationIntroduction(sampleStudentOid);
  expect(res.oid).toBeDefined();
  expect(res.title).toBeDefined();
});
