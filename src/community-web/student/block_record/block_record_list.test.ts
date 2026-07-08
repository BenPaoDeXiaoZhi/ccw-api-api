import { testAuthReadApi } from "src/testUtils";
import { getStudentBlockRecordList } from "./list";

test("get student block record list should reject without login", async () => {
  await testAuthReadApi(() => getStudentBlockRecordList(), {
    validateShape: (res) => {
      expect(typeof res).toBe("object");
      expect(res).toHaveProperty("data");
      expect(Array.isArray(res.data)).toBe(true);
      expect(res).toHaveProperty("offset");
      expect(res).toHaveProperty("page");
      expect(res).toHaveProperty("perPage");
      expect(res).toHaveProperty("totalNum");
      expect(res).toHaveProperty("totalPages");
    },
  });
});
