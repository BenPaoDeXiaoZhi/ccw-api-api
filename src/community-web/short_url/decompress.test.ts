import { decompressShortUrl } from "./decompress";

test("decompress short url should fail without token", async () => {
  await expect(decompressShortUrl("1Wr61k")).resolves.toEqual(
    "https://www.ccw.site/detail/6386e11cfc1ed14684de07f8?inviteCode=yZdXmD3PvwVPA30W",
  );
});
