import { testAuthWriteApi } from "src/testUtils";
import { sendEvent } from "./event";

const ACTION_ID = "test-action-id";

test("send event should reject with invalid actionId", async () => {
  await testAuthWriteApi(() => sendEvent(ACTION_ID), {});
});
