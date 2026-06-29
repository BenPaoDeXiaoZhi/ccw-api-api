import { CNameOssUrl, MongoDBId } from "./api";

export type TeamMemberAuthority = "ADMIN" | "MEMBER" | "OBSERVER";
export type TeamMember = {
  authority: TeamMemberAuthority;
  avatar: CNameOssUrl;
  creationOid: MongoDBId;
  name: string;
  /**
   * 成员贡献信息
   * @example profile = "开发,美工(偷懒)"
   */
  profile: string;
  role: "ALL";
  userOid: MongoDBId;
};
