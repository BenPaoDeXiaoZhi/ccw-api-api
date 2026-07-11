import { getRecommendHashTags } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get recommend hash tags should fail without token", async () => {assert.strictEqual(((await (getRecommendHashTags())) as any).length, (1), "expected length to be equal");
});
