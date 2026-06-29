import { updateStudent } from "./update";

test("update student should reject without login", async () => {
  await expect(
    updateStudent("MALE", false, "测试用户", Date.now(), "", "", "", "", ""),
  ).rejects.toThrow();
});
