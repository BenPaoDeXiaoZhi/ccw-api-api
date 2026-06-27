import { healthCheck } from "./check";

test("health check should return data", async () => {
  const res = await healthCheck();
  expect(Array.isArray(res)).toBe(true);
  if (res.length > 0) {
    expect(res[0].name).toBeDefined();
    expect(res[0].status).toBeDefined();
    expect(res[0].traceId).toBeDefined();
  }
});
