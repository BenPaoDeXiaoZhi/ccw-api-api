import { getCommentsByTopic } from "./page_by_topic";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get comments by topic should return data", async () => {
  const subjectOid = "6a3c73a3b6c84711978d92f2";
  const subjectType = "POST";
  const sectionType = "COMMENT";
  const res = await getCommentsByTopic(subjectOid, subjectType, sectionType);

  assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
  res.data.forEach((comment) => {
    assert.ok(((comment.id) !== undefined), "expected value to be defined");
    assert.ok(((comment.content) !== undefined), "expected value to be defined");
    assert.ok(((["PUBLISHED", "FOLDED"]) as any).includes((comment.status)), "expected to contain");
  });
});
