import { createSplitRule } from "./create";

test("create split rule should fail without token", async () => {
  await expect(createSplitRule("63c2807d669fa967f17f5559", [])).rejects.toThrow(
    "token为空",
  );
});
