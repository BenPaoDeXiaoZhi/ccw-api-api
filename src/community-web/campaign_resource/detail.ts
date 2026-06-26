import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";

export const url = "https://community-web.ccw.site/campaign_resource/detail";

export type CampaignKeywords = "tags" | "mmo";
export type Res<K extends string> = {
  createdAt: number;
  hiddenNavbar: false;
  id: number;
  keyword: K;
  resourceIds: string[];
  resourceType: "SUBJECT_AREA";
  updatedAt: number;
};

/**
 * 不知道这个接口有什么用,请查看https://www.ccw.site/pages/tags自行寻找用法
 * @param {K} keyword 活动关键词
 * @returns {Promise<Res<K>>}
 */
export async function getCampaignResources<K extends CampaignKeywords>(
  keyword: K,
): Promise<Res<K>> {
  return await ccwAxios
    .post<ApiResponse<Res<K>>>(url, { keyword })
    .then((res) => res.data.body);
}
