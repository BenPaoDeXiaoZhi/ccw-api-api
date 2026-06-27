import { getCreationScreenshotPage } from "./page";

const CREATION_OID = "62bd863874c3155ff7a54308";

test("get creation screenshot page should return data", async () => {
  const res = await getCreationScreenshotPage(CREATION_OID, { perPage: 5 });
  expect(Array.isArray(res.data)).toBe(true);
  if (res.data.length > 0) {
    expect(res.data[0].creationScreenshot).toBeDefined();
    expect(res.data[0].commenter).toBeDefined();
    expect(res.data[0].topicId).toBeDefined();
  }
});
