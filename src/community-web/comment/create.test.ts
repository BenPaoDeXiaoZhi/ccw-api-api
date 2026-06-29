import { createComment } from "./create";
import { getPostDetail } from "../post/detail";

let samplePost: Awaited<ReturnType<typeof getPostDetail>>;

beforeAll(async () => {
  samplePost = await getPostDetail("0173b23d-139d-4c48-ad98-0aa17b5d3b60");
}, 30000);

test("create comment should fail without token", async () => {
  await expect(
    createComment(
      "test",
      {
        outline: "a",
        subjectOid: samplePost.oid,
        subjectType: "POST",
      },
      "COMMENT",
    ),
  ).rejects.toThrow("token为空");
});
