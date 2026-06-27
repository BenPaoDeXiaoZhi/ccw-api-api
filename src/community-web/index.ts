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
import { getPlanetsOfCreation } from "./hash_tag_creation/list_relation";
import { getMyHashTagCreations } from "./hash_tag_creation/mine";
import { getHashTagDetail } from "./hash_tag/detail";
import { getManagedHashTags } from "./hash_tag/managed/list";
import { getHashTagFavoriteDetail } from "./hash_tag_favorite/detail";
import { getDonatedRecordRanking } from "./creation_donated_record/ranking_list";
import { getCreationFavoriteDetail } from "./creation_favorite/detail";
import { getCreationRecommendPositionList } from "./creation_recommend_position/list";
import { getCreationScreenshotPage } from "./creation_screenshot/page";
import { viewCreationStats } from "./creation_stats/view";
import { getNotifyDeleteReasons } from "./notify_message/show";
import { getPostDetail } from "./post/detail";
import { getSearchHotWords } from "./search/hot_words";
import { getStudentBlockRecordDetail } from "./student/block_record/detail";
import { getStudentBlockRecordList } from "./student/block_record/list";
import { getStudentBlockStatus } from "./student/block_record/status";
import { getCreatorScore } from "./students/creator_score";
import { getStudentLastActiveAt } from "./students/last_active_at";
import { getStudentsList } from "./students/list";
import { getStudentSessions } from "./students/list_sessions";
import { getStudentProfile } from "./students/profile";
import { getReputationScoreLog } from "./students/reputation_score_log/page";
import { getStudentSelfDetail } from "./students/self/detail";
import { getStudentStats } from "./students/stats";
import { updateStudent } from "./students/update";
import { getStudyCommunityMemberDetail } from "./study-community/member/detail";
import { getSpreadFeedUnreadCount } from "./study-community/spread_feed/unread/count";
import { getSubjectAreaPage } from "./subject_area/page";
import { getSubjectAreaPageByChannel } from "./subject_area/page_by_channel";
import { acceptAward } from "./task/award";
import { getMyTasks } from "./task/mine";
import { getUserCardDetail } from "./user-card/detail";
import { getUserLabelList } from "./user_label/list";
import { getPersonalCurrencyAccount } from "./currency/account/personal";
import { getAllEmojis } from "./emoji/all";
import { getEmojiCategoryList } from "./emoji/category/list";
import { getEmojiPage } from "./emoji/page";
import { sendEvent } from "./event";
import { healthCheck } from "./health/check";
import { getLeafletsItemList } from "./leaflets/item/list";
import { getLockedUserDetail } from "./locked_user/detail";
import { getMutedUserDetail } from "./muted_user/detail";
import { getNotificationPage } from "./notification/page";
import { getNotificationStats } from "./notification/stats/v2";

export const communityWeb = {
  acceptAward,
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
  getCreationRecommendPositionList,
  getCreationScreenshotPage,
  getCreationStudentDetail,
  getCreationTags,
  getCreatorScore,
  getDonatedRecordRanking,
  getExcellentCreations,
  getEmojiCategoryList,
  getEmojiPage,
  getAllEmojis,
  getHashTagDetail,
  getHashTagFavoriteDetail,
  getManagedHashTags,
  getHealthCheck: healthCheck,
  getLeafletsItemList,
  getLikeDetail,
  getLoadingTips,
  getLockedUserDetail,
  getMutedUserDetail,
  getMyHashTagCreations,
  getMyTasks,
  getNotifyDeleteReasons,
  getNotificationPage,
  getNotificationStats,
  getPersonalCurrencyAccount,
  getPlanetsOfCreation,
  getPostDetail,
  getPotentialCreations,
  getRecommendCreations,
  getRemixedCreationPage,
  getReputationScoreLogPage: getReputationScoreLog,
  getSearchHotWords,
  getSpreadFeedUnreadCount,
  getStudentBlockRecordDetail,
  getStudentBlockRecordList,
  getStudentBlockStatus,
  getStudentLastActiveAt,
  getStudentProfile,
  getStudentSelfDetail,
  getStudentSessions,
  getStudentsList,
  getStudentStats,
  getStudyCommunityMemberDetail,
  getSubjectAreaPage,
  getSubjectAreaPageByChannel,
  getTime,
  getUserAssetStorageSize,
  getUserCardDetail,
  getUserLabelList,
  getCreationsByStudent,
  insertCheckInRecord,
  searchCloudAssets,
  searchCreationsByTag,
  sendEvent,
  updateStudent,
  viewCreationStats,
};
