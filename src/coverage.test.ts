import { sso, communityWeb } from "./index";
test("test export", () => {
  expect(sso).toBeDefined();
  expect(communityWeb).toBeDefined();
});
