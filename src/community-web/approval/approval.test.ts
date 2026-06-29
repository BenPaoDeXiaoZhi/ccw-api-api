import { getApprovalTags } from "./list";

test("test approval list", async () => {
  const tags = await getApprovalTags("63c2807d669fa967f17f5559");
  expect(tags.find((v) => v.approvalTagId == 235)!.approvalTagName).toEqual(
    "Gandi 开发者",
  );
});
