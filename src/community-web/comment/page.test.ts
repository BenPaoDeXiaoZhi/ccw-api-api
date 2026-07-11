import { getCommentReplies } from "./page";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get comment replies should return data", async () => {
  const topicId = 819086;
  const parentId = 9611280;
  const statuses: ("PUBLISHED" | "FOLDED")[] = ["PUBLISHED", "FOLDED"];
  const res = await getCommentReplies(topicId, parentId, statuses);

  assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
  res.data.forEach((comment) => {
    assert.ok(((comment.id) !== undefined), "expected value to be defined");
    assert.strictEqual(comment.topicId, (topicId), "expected values to be strictly equal");
    assert.strictEqual(comment.parentId, (parentId), "expected values to be strictly equal");
    assert.ok(((comment.content) !== undefined), "expected value to be defined");
    assert.ok(((["PUBLISHED", "FOLDED"]) as any).includes((comment.status)), "expected to contain");
  });
});
