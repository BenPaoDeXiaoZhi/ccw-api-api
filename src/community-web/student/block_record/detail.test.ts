import { getStudentBlockRecordDetail } from "./detail";

test("get student block record detail should fail without token", async () => {
  await expect(
    getStudentBlockRecordDetail("63c2807d669fa967f17f5559"),
  ).rejects.toThrow("token为空");
});
