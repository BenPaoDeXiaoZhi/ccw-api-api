import { createShortUrl } from "./create";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("create short url", async () => {
  assert.deepStrictEqual(await createShortUrl(
      "https://www.ccw.site/detail/6386e11cfc1ed14684de07f8?inviteCode=yZdXmD3PvwVPA30W",
    ), ("https://ccw.site/s/1Wr61k"), "expected values to be deeply equal");
});
