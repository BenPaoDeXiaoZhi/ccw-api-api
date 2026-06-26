import { encodeShortCode } from "./api/v1/short_code/encode";
import { getApprovalTags } from "./approval/list";
import { getTime } from "./base/dateTime";
import { getCampaignResources } from "./campaign_resource/detail";
import { getCheckInRecords } from "./check_in_record/detail";
import { insertCheckInRecord } from "./check_in_record/insert";
import { getUserAssetStorageSize } from "./cloud_asset/user/privacy";
import { searchCloudAssets } from "./cloud_asset/search";
import { getCommentReplies } from "./comment/page";
import { getCommentsByTopic } from "./comment/page_by_topic";
import { getConfigDetail } from "./config/detail";
import { getCreationDetail } from "./creation/detail";
import { getExcellentCreations } from "./creation/excellent/list";
import { getCreationIntroduction } from "./creation/introduction/detail";
import { getLikeDetail } from "./creation/like/detail";
import { getLoadingTips } from "./creation/loading/tips";
import { getCreationPage } from "./creation/page";
import { getCreationsByStudent } from "./creation/page_by_student";
import { getPotentialCreations } from "./creation/potential/list";
import { getRecommendCreations } from "./creation/recommend";
import { searchCreationsByTag } from "./creation/search/page";
import { getCreationStudentDetail } from "./creation/student/detail";
import { getCreationTags } from "./creation/tag/list";
import { createShortUrl } from "./short_url/create";

export const communityWeb = {
  encodeShortCode,
  createShortUrl,
  getApprovalTags,
  getCampaignResources,
  getCheckInRecords,
  getCommentReplies,
  getCommentsByTopic,
  getConfigDetail,
  getCreationDetail,
  getCreationIntroduction,
  getCreationPage,
  getCreationStudentDetail,
  getCreationTags,
  getCreationsByStudent,
  getExcellentCreations,
  getLikeDetail,
  getLoadingTips,
  getPotentialCreations,
  getRecommendCreations,
  getUserAssetStorageSize,
  insertCheckInRecord,
  searchCloudAssets,
  searchCreationsByTag,
  getTime,
};
