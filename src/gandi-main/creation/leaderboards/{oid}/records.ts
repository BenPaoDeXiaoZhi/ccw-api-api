import { request } from "src/request";
import { ApiResponse, CNameOssUrl, MongoDBId } from "src/types/api";
import { SortType } from "src/types/pages";

export const url = "https://gandi-main.ccw.site/creation/leaderboards";

export type SubmitReq = {
  ext: string;
  oid: MongoDBId;
  score: number;
};

export type SubmitRes = boolean;

export type LeaderboardUser = {
  avatar: null | CNameOssUrl;
  id: MongoDBId;
  locked: null | boolean;
  nickname: null | string;
};

export type LeaderboardRecord = {
  createdAt: number;
  ext: string;
  leaderboardOid: MongoDBId;
  oid: MongoDBId;
  ranking: number;
  score: number;
  updatedAt: number;
  user: LeaderboardUser;
  userId: MongoDBId;
};

export type ScoreFormat = "DECIMAL_WITH_SEPARATOR" | string;
export type ScoreStorageRule = "BEST" | string;
export type StatsCycle = "ALL_DAYS" | string;

export type LeaderboardRecordsRes = {
  coverLink: null | CNameOssUrl;
  createdAt: number;
  creationId: MongoDBId;
  curUserLeaderboardRecord: null | LeaderboardRecord;
  displayLines: number;
  leaderboardRecordTotalNum: number;
  leaderboardRecords: LeaderboardRecord[];
  oid: MongoDBId;
  scoreFormat: ScoreFormat;
  scoreStorageRule: ScoreStorageRule;
  scoreUnit: string;
  showPersonalRanking: boolean;
  sortType: SortType;
  statsCycle: StatsCycle;
  title: string;
  updatedAt: number;
};

/**
 * 向作品排行榜提交一条分数记录
 * @param {MongoDBId} leaderboardOid 排行榜id
 * @param {number} score 分数
 * @param {MongoDBId} userOid 用户id
 * @param {string} ext 扩展信息（可选）
 * @returns {Promise<SubmitRes>} 是否提交成功
 */
export async function submitLeaderboardRecord(
  leaderboardOid: MongoDBId,
  score: number,
  userOid: MongoDBId,
  ext: string = "",
): Promise<SubmitRes> {
  const req: SubmitReq = { score, oid: userOid, ext };
  const requestUrl = `${url}/${leaderboardOid}/records`;
  return await request
    .post<ApiResponse<SubmitRes>>(requestUrl, req)
    .then((res) => res.data.body);
}

/**
 * 获取作品排行榜记录列表
 * @param {MongoDBId} leaderboardOid 排行榜id
 * @returns {Promise<LeaderboardRecordsRes>} 排行榜记录列表
 */
export async function getLeaderboardRecords(
  leaderboardOid: MongoDBId,
): Promise<LeaderboardRecordsRes> {
  const requestUrl = `${url}/${leaderboardOid}/records`;
  return await request
    .get<ApiResponse<LeaderboardRecordsRes>>(requestUrl)
    .then((res) => res.data.body);
}
