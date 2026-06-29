import { getCodeProfilingDetail } from "./detail";

test("get code profiling detail returns null or object without token", async () => {
  const result = await getCodeProfilingDetail(
    "63c2807d669fa967f17f5559",
    "63c2807d669fa967f17f5559",
  );
  expect(result === null || typeof result === "object").toBe(true);
});
