import { getExcellentCreations } from "./excellent/list";
import { getPotentialCreations } from "./potential/list";
import { getRecommendCreations } from "./recommend";
import { searchCreationsByTag } from "./search/page";
import { getCreationTags } from "./tag/list";
import { getLoadingTips } from "./loading/tips";
import { getCreationDetail } from "./detail";
import { getCreationIntroduction } from "./introduction/detail";
import { getLikeDetail } from "./like/detail";
import { getCreationPage } from "./page";
import { getCreationsByStudent } from "./page_by_student";
import { getCreationStudentDetail } from "./student/detail";

let sampleCreationOid: string;
let sampleStudentOid: string;

beforeAll(async () => {
  const creations = await getExcellentCreations(1);
  if (creations.length > 0) {
    sampleCreationOid = creations[0].oid;
    sampleStudentOid = creations[0].studentOid;
  }
}, 30000);

test("get excellent creations should return data", async () => {
  const res = await getExcellentCreations(10);
  expect(Array.isArray(res)).toBe(true);
  res.forEach((c) => {
    expect(c.oid).toBeDefined();
    expect(c.title).toBeDefined();
  });
});

test("get potential creations should return data", async () => {
  const res = await getPotentialCreations(10);
  expect(Array.isArray(res)).toBe(true);
  res.forEach((c) => {
    expect(c.oid).toBeDefined();
    expect(c.title).toBeDefined();
  });
});

test("get recommend creations should return data", async () => {
  const res = await getRecommendCreations(10);
  expect(Array.isArray(res)).toBe(true);
  res.forEach((c) => {
    expect(c.oid).toBeDefined();
    expect(c.title).toBeDefined();
  });
});

test("search creations by tag should return data", async () => {
  const res = await searchCreationsByTag("史莱姆之森");
  expect(Array.isArray(res)).toBe(true);
});

test("get creation tags should return data", async () => {
  const res = await getCreationTags();
  expect(Array.isArray(res)).toBe(true);
  res.forEach((tag) => {
    expect(tag.id).toBeDefined();
    expect(tag.title).toBeDefined();
    expect(tag.code).toBeDefined();
  });
});

test("get loading tips should return data", async () => {
  const res = await getLoadingTips();
  expect(res["小八"]).toBeDefined();
  expect(res["胖达"]).toBeDefined();
  expect(res["妮可"]).toBeDefined();
  expect(res["孙小弟"]).toBeDefined();
});

test("get creation detail should return data", async () => {
  if (!sampleCreationOid) {
    return;
  }
  const res = await getCreationDetail(sampleCreationOid, "");
  expect(res.oid).toBe(sampleCreationOid);
  expect(res.title).toBeDefined();
  expect(res.student).toBeDefined();
});

test("get creation introduction should return data", async () => {
  if (!sampleStudentOid) {
    return;
  }
  const res = await getCreationIntroduction(sampleStudentOid);
  expect(res.oid).toBeDefined();
  expect(res.title).toBeDefined();
});

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

test("get creation page should return data", async () => {
  if (!sampleCreationOid) {
    return;
  }
  const res = await getCreationPage([sampleCreationOid]);
  expect(Array.isArray(res)).toBe(true);
});

test("get creations by student should return data", async () => {
  if (!sampleStudentOid) {
    return;
  }
  const res = await getCreationsByStudent([sampleStudentOid]);
  expect(Array.isArray(res)).toBe(true);
  res.forEach((c) => {
    expect(c.oid).toBeDefined();
    expect(c.studentOid).toBeDefined();
  });
});

test("get creation student detail should return data", async () => {
  if (!sampleStudentOid) {
    return;
  }
  const res = await getCreationStudentDetail(sampleStudentOid);
  expect(res.oid).toBe(sampleStudentOid);
  expect(res.name).toBeDefined();
});
