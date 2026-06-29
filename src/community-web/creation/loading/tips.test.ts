import { getLoadingTips } from "./tips";

test("get loading tips should return data", async () => {
  const res = await getLoadingTips();
  expect(res["小八"]).toBeDefined();
  expect(res["胖达"]).toBeDefined();
  expect(res["妮可"]).toBeDefined();
  expect(res["孙小弟"]).toBeDefined();
});
