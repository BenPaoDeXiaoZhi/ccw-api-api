import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId, CNameOssUrl } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";

export const url =
  "https://community-web.ccw.site/subject_area/page_by_channel";

export type SubjectAreaModuleComponent = {
  data: {
    bgColor?: string;
    bgImage?: CNameOssUrl;
    col?: number;
    creationOids?: MongoDBId[];
    display?: string;
    hover?: boolean;
    origin: string;
    overflow?: string;
    row?: string;
    targetLink?: string;
    targetType?: string;
  };
  type: string;
};

export type SubjectAreaModule = {
  components: SubjectAreaModuleComponent[];
  filled: boolean;
  gutter: number;
  subtitle: string;
  subtitleColor: string;
  title: string;
  titleColor: string;
  type: string;
};

export type SubjectAreaGroup = {
  bgAtmosphere: null | string;
  bgColor: string;
  bgImage: CNameOssUrl;
  id: number;
  lottieJsonUrl: null | CNameOssUrl;
  modules: SubjectAreaModule[];
  moreLink: null | string;
  moreLinkText: null | string;
  subjectAreaId: number;
  subtitle: string;
  subtitleColor: string;
  title: string;
  titleColor: string;
  verticalPadding: number;
};

export type SubjectAreaScene = "CUSTOM_PAGE";
export type SubjectAreaChannel = "tags" | "mmo" | "adventure";

export type SubjectAreaItem = {
  creationOids: MongoDBId[];
  enabled: boolean;
  iconLink: null | CNameOssUrl;
  id: number;
  location: null | string;
  platform: string;
  priority: number;
  subjectAreaGroup: SubjectAreaGroup;
  subtitle: null | string;
  targetLink: null | string;
  title: string;
  visibleFor: string[];
};

export type Req = {
  channel: SubjectAreaChannel;
  scene: SubjectAreaScene;
};

export type Res = PagesRes<SubjectAreaItem>;

/**
 * 按频道分页获取分区列表(用于上方nav bar的"热门分类" "联机" "联名挑战赛")
 * @param {SubjectAreaChannel} channel 频道
 * @param {Partial<PageArgs<"campaignResourceId" | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 学科区分页数据
 */
export async function getSubjectAreaPageByChannel<T extends string>(
  channel: SubjectAreaChannel,
  pageArgs_: Partial<PageArgs<"campaignResourceId" | T>> = {
    sortField: "campaignResourceId",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { channel, scene: "CUSTOM_PAGE" };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
