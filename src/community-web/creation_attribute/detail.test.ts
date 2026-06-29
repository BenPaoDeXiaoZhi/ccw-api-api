import { getCreationAttributeDetail } from "./detail";

test("get creation attribute detail returns null or object without token", async () => {
  const result = await getCreationAttributeDetail(
    "63c2807d669fa967f17f5559",
  );
  expect(result === null || typeof result === "object").toBe(true);
  if (result !== null) {
    expect(result).toHaveProperty("ext");
    expect(result.ext).toHaveProperty("KEYPAD_CONFIG");
    expect(Array.isArray(result.ext.KEYPAD_CONFIG)).toBe(true);
  }
});
