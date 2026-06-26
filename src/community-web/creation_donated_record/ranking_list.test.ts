import { getDonatedRecordRanking } from "./ranking_list";

const CREATION_OID = "62bd863874c3155ff7a54308";

test("get donated record ranking should return data", async () => {
  const res = await getDonatedRecordRanking(CREATION_OID, { perPage: 5 });
  expect(res.totalBucks).toBeDefined();
  expect(res.rankingList.data.length).toBeGreaterThan(0);
  res.rankingList.data.forEach((record) => {
    expect(record.bucks).toBeDefined();
    expect(record.donatorName).toBeDefined();
    expect(record.donatorOid).toBeDefined();
  });
});
