import { CachedOssUrl } from "./api";

export interface ApprovalTag<Tid = number, Tn = string> {
  bizId: null;
  bizType: null;
  description: string;
  /**
   * 有时会包含tag的名称，如"Gandi开发者"
   */
  iconLink: CachedOssUrl;
  id: Tid;
  /**
   * 浮于iconLink之上的icon
   */
  mediumImage: CachedOssUrl;
  name: Tn;
  prerequisite: string;
  tag: null;
}
