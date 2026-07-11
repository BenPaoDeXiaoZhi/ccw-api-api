import { decompressShortUrl } from "./decompress";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("decompress short url should fail without token", async () => {assert.deepStrictEqual(await (decompressShortUrl("1Wr61k")), ("https://www.ccw.site/detail/6386e11cfc1ed14684de07f8?inviteCode=yZdXmD3PvwVPA30W"), "expected values to be deeply equal");
});
