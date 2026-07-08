import { getPostDetail } from "./detail";
import { testAuthReadApi, expectKeys } from "src/testUtils";

test("get post detail", async () => {
  await testAuthReadApi(
    () => getPostDetail("0173b23d-139d-4c48-ad98-0aa17b5d3b60"),
    {
      validateShape: (res) => {
        expectKeys(res, [
          "oid",
          "title",
          "content",
          "slug",
          "author",
          "authorOid",
          "commentCount",
          "pageView",
          "createdAt",
          "updatedAt",
          "status",
          "visibility",
          "tags",
          "tagRefs",
          "excerpt",
          "featureImage",
          "publishedAt",
          "rank",
        ]);
        expect(res.title.includes("【公告通知】")).toBeTruthy();
      },
    },
  );
});

test("error when post detail not found", async () => {
  await expect(async () => await getPostDetail("foo")).rejects.toThrow(
    "ccw axios Request failed: 没有找到文章(40010738404)",
  );
});
