import { getStudentSessions } from "./list_sessions";

test("get student sessions should reject without login", async () => {
  await expect(getStudentSessions()).rejects.toThrow();
});
