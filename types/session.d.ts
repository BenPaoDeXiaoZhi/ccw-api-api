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
