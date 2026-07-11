import { submitCreation } from "./submit";
import { test, testAuthWriteApi } from "src/testUtils";

test("submit creation should fail without token", async () => {
  await testAuthWriteApi(
    () =>
      submitCreation({
        tags: [],
        title: "test",
        isOpenSource: false,
        isContribute: false,
        type: "ORIGINAL",
        publishedFeedSwitch: false,
        keyboardLayout: "CUSTOM",
        hashTags: [],
        featuredCoverLink: "https://m.ccw.site/a",
        sourceOpenLevel: "PRIVATE",
        requireLogin: false,
        operatingInstruction: "",
        description: "",
        releaseDescription: "",
        videoLink: null,
        releaseTags: ["Alpha"],
        customVersion: "",
        repostedSource: "",
        projectLink: "https://m.ccw.site/a",
        remixCreationOid: null,
        oid: "63c2807d669fa967f17f5559",
        hasCloudVariables: false,
        extensions: [],
        projectSize: 0,
        audioSize: 0,
        costumeSize: 0,
        coverLink: "https://m.ccw.site/a",
      }),
    {
      rejectMessage: "token为空",
    },
  );
});
