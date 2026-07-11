import { encodeShortCode } from "./encode";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("test shortcode", async () => {
  const res = await encodeShortCode(
    "63c2807d669fa967f17f5559",
    "https://m.ccw.site/user_projects_assets/244373873/3fc7886d05aed9f369d2c0bb2d677fc0.jpeg",
    "孟夫子驾到",
    "6386e11cfc1ed14684de07f8",
  );
  assert.strictEqual(((res.code) as any).length, ("yZdXmD3PvwVPA30W".length), "expected length to be equal");
});
