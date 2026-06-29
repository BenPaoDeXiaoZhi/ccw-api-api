import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web.ccw.site/creation_release/code_profiling/detail";

export type ProfilingCodes = Record<string, number>;

export type ProfilingExt = Record<string, number>;

export type ProfilingMath = {
  arithmetic: number;
  logic: number;
  math: number;
};

export type ProfilingMastery = {
  abstractionPoints: number;
  dataRepresentationPoints: number;
  flowControlPoints: number;
  logicPoints: number;
  parallelizationPoints: number;
  synchronizationPoints: number;
  userInteractivityPoints: number;
};

export type Profiling = {
  audioCount: number;
  audioSize: `${number}`;
  blockChangeCount: number;
  codes: ProfilingCodes;
  costumeCount: number;
  costumeSize: string;
  count: number;
  ext: ProfilingExt;
  firstComparedChangedBlockCount: number;
  firstComparedChangedSpriteCount: number;
  functionCount: number;
  hatBlockCount: number;
  listCount: number;
  mastery: ProfilingMastery;
  math: ProfilingMath;
  projectSize: `${number}`;
  spriteChangeCount: number;
  spriteCount: number;
  validBlockCount: number;
  varCount: number;
};

export type CodeProfilingDetail = {
  createdAt: number;
  creationOid: MongoDBId;
  creationReleaseOid: MongoDBId;
  id: number;
  profiling: Profiling;
  updatedAt: number;
};

export type Req = {
  creationOid: MongoDBId;
  creationReleaseOid: MongoDBId;
};

export type Res = CodeProfilingDetail;

/**
 * 获取作品工程统计详情
 * @param {MongoDBId} creationOid 作品id
 * @param {MongoDBId} creationReleaseOid 发布版本id
 * @returns {Promise<Res>} 代码分析详情
 */
export async function getCodeProfilingDetail(
  creationOid: MongoDBId,
  creationReleaseOid: MongoDBId,
): Promise<Res> {
  const req: Req = { creationOid, creationReleaseOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
