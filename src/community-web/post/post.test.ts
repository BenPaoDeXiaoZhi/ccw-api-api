import { getPostDetail } from "./detail";

test("get post detail", async () => {
  const detail = await getPostDetail("0173b23d-139d-4c48-ad98-0aa17b5d3b60");
  await expect(detail.title.includes("【公告通知】")).toBeTruthy();
});

test("error when post detail not found", async () => {
  await expect(async () => await getPostDetail("foo")).rejects.toThrow(
    "ccw axios Request failed: 没有找到文章(40010738404)",
  );
});
