import { saveProjectCloudVariable, saveUserCloudVariable } from "./save";

test("save project cloud variable should return saved value", async () => {
  const testValue = "2025-07-05T17:40:53.057+0800";
  const res = await saveProjectCloudVariable(
    "68dddc63d28b025cb53fae25",
    "test",
    testValue,
  );
  expect(res).toBeDefined();
  expect(res.v).toBe(testValue);
});

test("save user cloud variable should ok", async () => {
  const res = await saveUserCloudVariable("68dddc63d28b025cb53fae25", 0, {
    key2: "0",
  });
  expect(res.key2).toEqual("0");
});
