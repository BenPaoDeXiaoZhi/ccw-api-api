/**
 * 十六进制秒级时间戳
 * @example const date = new Date(Number.parseInt(t, 16) * 1000);
 */
export type HexSecTimeStamp = string;
/**
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
