import { getCommentReplies } from "./page";

test("get comment replies should return data", async () => {
  const topicId = 819086;
  const parentId = 9611280;
  const statuses: ("PUBLISHED" | "FOLDED")[] = ["PUBLISHED", "FOLDED"];
  const res = await getCommentReplies(topicId, parentId, statuses);

  expect(Array.isArray(res.data)).toBe(true);
  res.data.forEach((comment) => {
    expect(comment.id).toBeDefined();
    expect(comment.topicId).toBe(topicId);
    expect(comment.parentId).toBe(parentId);
    expect(comment.content).toBeDefined();
    expect(["PUBLISHED", "FOLDED"]).toContain(comment.status);
  });
});
