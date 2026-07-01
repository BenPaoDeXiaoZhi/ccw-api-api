/**
 * 十六进制秒级时间戳
 * @example const date = new Date(Number.parseInt(t, 16) * 1000);
 */
export type HexSecTimeStamp = string;

/**
 * MongoDB ObjectID
 * @example
 * const t = id.subString(0,8);
 * const date = new Date(Number.parseInt(t, 16) * 1000);
 */
export type MongoDBId = `${HexSecTimeStamp}${string}`;

export type ApiResponse<T> = {
  body: T;
  code: string;
  msg: string;
  status: number;
};

export type CCWdomain = "xiguacity.cn" | "ccw.site";
export type CNameOssUrl = `https://m.${CCWdomain}/${string}`;
export type LatestCNameOssUrl = `https://m.${CCWdomain}/${string}?t=${number}`;
export type OriginOssUrl =
  `https://zhishi.oss-cn-beijing.aliyuncs.com/${string}`;

/**
 * UUID 类型体操：匹配 8-4-4-4-12 的五段式结构
 * @example "6839840e-aa50-47d4-8028-ae932bddfee7"
 */
export type UUID = `${string}-${string}-${string}-${string}-${string}`;
