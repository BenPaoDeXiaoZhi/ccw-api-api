import { sendEvent } from "./event";
import { test, testAuthWriteApi } from "src/testUtils";

const ACTION_ID = "test-action-id";

test("send event should reject with invalid actionId", async () => {
  await testAuthWriteApi(() => sendEvent(ACTION_ID), {});
});
