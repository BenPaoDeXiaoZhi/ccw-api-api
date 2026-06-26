import { createShortUrl } from "./create";

test("create short url", async () => {
  expect(
    await createShortUrl(
      "https://www.ccw.site/detail/6386e11cfc1ed14684de07f8?inviteCode=yZdXmD3PvwVPA30W",
    ),
  ).toEqual("https://ccw.site/s/1Wr61k");
});
