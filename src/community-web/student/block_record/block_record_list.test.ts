import { getStudentBlockRecordList } from "./list";

test("get student block record list should reject without login", async () => {
  await expect(getStudentBlockRecordList()).rejects.toThrow();
});
