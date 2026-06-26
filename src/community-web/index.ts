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
import { getRemixedCreationPage } from "./creation/page";
import { getCreationsByStudent } from "./creation/page_by_student";
import { getPotentialCreations } from "./creation/potential/list";
import { getRecommendCreations } from "./creation/recommend";
import { searchCreationsByTag } from "./creation/search/page";
import { getCreationStudentDetail } from "./creation/student/detail";
import { getCreationTags } from "./creation/tag/list";
import { createShortUrl } from "./short_url/create";
import { getDonatedRecordRanking } from "./creation_donated_record/ranking_list";
import { getCreationFavoriteDetail } from "./creation_favorite/detail";
import { getCreationRecommendPositionList } from "./creation_recommend_position/list";
import { getCreationScreenshotPage } from "./creation_screenshot/page";
import { viewCreationStats } from "./creation_stats/view";

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
  getCreationFavoriteDetail,
  getCreationIntroduction,
  getCreationPage: getRemixedCreationPage,
  getCreationRecommendPositionList,
  getCreationScreenshotPage,
  getCreationStudentDetail,
  getCreationTags,
  getCreationsByStudent,
  getDonatedRecordRanking,
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
  viewCreationStats,
};
