import { CNameOssUrl, MongoDBId } from "./api";

export enum ProductCategory {
  Merchandise = 7,
  AvatarFrame = 5,
  EMOJI = 10,
}
export type ProductSource = "CCW_OFFICIAL";
export type ProductType = 1 | 2 | 3;

export type Product = {
  createdAt: number;
  description: string;
  elements: unknown[];
  functionDescribe: string;
  id: number;
  name: string;
  note: string;
  offlineAt: null | number;
  oid: MongoDBId;
  onlineAt: number;
  originPointPrice: number;
  originPrice: number;
  periodValidityDay: null | number;
  periodValidityTime: null | number;
  picUrl: null | CNameOssUrl | string;
  pointPrice: number;
  price: number;
  priority: number;
  productCategory: ProductCategory;
  purchaseLimitationNum: number;
  source: ProductSource;
  status: number;
  stockNum: number;
  type: ProductType;
  updatedAt: number;
  virtualValue: null | CNameOssUrl | string;
};
