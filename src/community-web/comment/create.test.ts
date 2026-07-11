import { createComment } from "./create";
import { getPostDetail } from "../post/detail";
import { test, beforeAll, testAuthWriteApi } from "src/testUtils";

let samplePost: Awaited<ReturnType<typeof getPostDetail>>;

beforeAll(async () => {
  samplePost = await getPostDetail("0173b23d-139d-4c48-ad98-0aa17b5d3b60");
}, 30000);

test("create comment", async () => {
  await testAuthWriteApi(
    () =>
      createComment(
        "test",
        {
          outline: "a",
          subjectOid: samplePost.oid,
          subjectType: "FOO" as unknown as 'POST',
        },
        "COMMENT",
      ),
    {
      rejectMessage: "token为空",
    },
  );
});
