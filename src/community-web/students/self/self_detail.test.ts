import { getStudentSelfDetail } from "./detail";

test("get student self detail should reject without login", async () => {
  await expect(
    getStudentSelfDetail(true, true, ["name", "avatar"]),
  ).rejects.toThrow();
});
