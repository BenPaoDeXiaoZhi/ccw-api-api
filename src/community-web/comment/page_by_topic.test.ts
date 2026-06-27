import { SectionType } from "types/comment";
import { getCommentsByTopic } from "./page_by_topic";

test("get comments by topic should return data", async () => {
  const subjectOid = "6a3c73a3b6c84711978d92f2";
  const subjectType = "POST";
  const sectionType = "COMMENT";
  const res = await getCommentsByTopic(subjectOid, subjectType, sectionType);

  expect(Array.isArray(res.data)).toBe(true);
  res.data.forEach((comment) => {
    expect(comment.id).toBeDefined();
    expect(comment.content).toBeDefined();
    expect(["PUBLISHED", "FOLDED"]).toContain(comment.status);
  });
});
