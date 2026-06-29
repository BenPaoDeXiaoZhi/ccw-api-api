import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/creation_attribute/detail";

export type KeypadConfig = {
  maxR: number;
  minR: number;
  r: number;
  slot: string;
  value: string;
  x: number;
  y: number;
};

export type CreationAttribute<KC> = {
  createdAt: number;
  creationOid: MongoDBId;
  endorsement: null;
  ext: {
    KEYPAD_CONFIG: KC;
  };
  recommendationCreation: unknown[];
  recommendationPost: unknown[];
  recommendationProjectTemplate: unknown[];
  specialThanks: unknown[];
  updatedAt: number;
};

export type Req = {
  creationOid: MongoDBId;
};

export type Res<KC> = CreationAttribute<KC>;

/**
 * 获取作品属性详情
 * @param {MongoDBId} creationOid 作品id
 * @returns {Promise<Res | null>} 作品属性
 */
export async function getCreationAttributeDetail(
  creationOid: MongoDBId,
): Promise<Res<KeypadConfig[]> | null> {
  const req: Req = { creationOid };
  const dat = await ccwAxios
    .post<ApiResponse<Res<string> | null>>(url, req)
    .then((res) => res.data.body);
  if (dat === null) {
    return null;
  }
  const {
    ext: { KEYPAD_CONFIG: kc },
  } = dat;
  const parsedKC = JSON.parse(kc) as KeypadConfig[];
  return {
    ...dat,
    ext: {
      KEYPAD_CONFIG: parsedKC,
    },
  };
}
