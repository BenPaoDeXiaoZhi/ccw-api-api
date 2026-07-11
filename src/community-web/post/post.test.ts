import { getPostDetail } from "./detail";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("get post detail", async () => {
  await testAuthReadApi(
    async () => await getPostDetail("bfb5460b-19a8-4266-9e34-20c4287b4e11"),
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
        assert.ok(
          Boolean(res.title.includes("在")),
          "expected value to be truthy",
        );
      },
    },
  );
});

test("error when post detail not found", async () => {
  await assert.rejects(
    getPostDetail("foo"),
    {
      message: "ccw axios Request failed: 没有找到文章(40010738404)",
    },
    "expected promise to reject matching",
  );
});
