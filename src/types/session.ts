import { AccountTypes } from "./account";
import { MongoDBId } from "./api";

export interface SessionArea {
  city: string;
  country: string;
  ip: string;
  province: string;
}

export interface StudentSession {
  area: SessionArea;
  browser: string;
  clientCode: "STUDY_COMMUNITY";
  createdAt: number;
  currentDevice: boolean;
  device: string;
  expireTime: number;
  extra: string;
  id: number;
  ip: string;
  lastAccessTime: number;
}

export interface LoginSession<Extra = string> {
  accountId: -1;
  accountObjectId: MongoDBId;
  accountType: AccountTypes;
  clientCode: "STUDY_COMMUNITY";
  createdAt: number;
  email: null;
  expireTime: number;
  extra: Extra;
  id: number;
  lastAccessTime: number;
  orgId: "";
  scene: null;
  status: "ENABLED";
  token: string;
  urlEncodedFullName: null;
}
