import { getStudentFollowingPage } from "./page";

test("get student following page should fail without token", async () => {
  const data = await getStudentFollowingPage("63c2807d669fa967f17f5559");
  expect(Array.isArray(data.data)).toBeTruthy();
  expect(data.data[0]).toBeDefined();
});
