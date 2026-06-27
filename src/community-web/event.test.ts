import { sendEvent } from "./event";

const ACTION_ID = "test-action-id";

test("send event should reject with invalid actionId", async () => {
  await expect(sendEvent(ACTION_ID)).rejects.toThrow();
});
