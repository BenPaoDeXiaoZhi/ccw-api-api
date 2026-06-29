import { getHistoricalTeamMemberPage } from "./page";

test("get historical team member page returns PagesRes without token", async () => {
  const result = await getHistoricalTeamMemberPage(
    "63c2807d669fa967f17f5559",
  );
  expect(result).toHaveProperty("data");
  expect(result).toHaveProperty("page");
  expect(result).toHaveProperty("perPage");
  expect(result).toHaveProperty("totalNum");
  expect(result).toHaveProperty("totalPages");
  expect(Array.isArray(result.data)).toBe(true);
  expect(typeof result.totalNum).toBe("number");
  expect(typeof result.totalPages).toBe("number");
});
