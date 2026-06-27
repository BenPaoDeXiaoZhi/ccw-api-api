# @ccw-api/api

CCW（创作社区）前后端接口 SDK，整合 `sso.ccw.site` 与 `community-web.ccw.site`
两大服务的常用 API，提供完整的 TypeScript 类型与开箱即用的分页封装。

- 包格式：**ESM + CJS + .d.ts 三产物**同时产出
- 类型：所有请求 / 响应字段**强类型**，后端 key 固定约束（如 `MongoDBId`、`CNameOssUrl`、`UUID`）
- 分页：统一返回 `PagesRes<T>`（含 `totalNum` / `totalPages` / `sortField` 等元信息）

---

## 安装

```bash
npm install @ccw-api/api
# 或
pnpm add @ccw-api/api
# 或
yarn add @ccw-api/api
```

> 唯一运行时依赖：`@ccw-api/axios`（内置鉴权 header 注入的 axios 封装）。
> `@ccw-api/api` 已将常用的 token 设置方法 **`setToken` 重新导出**，无需再单独依赖 axios 包。

---

## 快速开始

### 1. 初始化 Token（前置条件）

```ts
import { setToken } from "@ccw-api/api";

// 直接传入后端下发的 session token
setToken("abcdefgfoo");
```

所有 `@ccw-api/api` 的方法都会复用同一个 axios 单例，**调用 API 时无需再传入鉴权参数**。

### 2. 调用方式

```ts
import { sso, communityWeb } from "@ccw-api/api"; // ✅ 推荐：具名导入
// 或
import api from "@ccw-api/api"; // ✅ default 导入：api.sso / api.communityWeb
```

---

## 模块一：SSO（sso.ccw.site）

账号认证相关，共 3 个 API：

```ts
const { loginByPassword, logout, logoutBySession } = sso;

// 账号密码登录
await loginByPassword("student_number", "xxxxx", {
  device: "WEB",
  browser: "Chrome",
});

// 登出当前 session
await logout();

// 强制某个 session 下线用于登陆设备管理
await logoutBySession("64...session_oid");
```

---

## 模块二：Community-Web（community-web.ccw.site）

覆盖作品 / 学生 / 星球 / 评论 / 通知 / 任务 / 表情 / 签到 / 云资产 / 学科专区 等业务领域，共 **68 个 API**。
下面是常用场景示例。

### 学生与作品

```ts
// 拉取学生档案
const profile = await communityWeb.getStudentProfile(
  "63c2807d669fa967f17f5559",
);
//   ^? StudentOverview（包含头像、简介、统计字段等）

// 我的创作分
const score = await communityWeb.getCreatorScore();
console.log(score.rank); // "ORDINARY" | "HACKER" | "ADVANCED"

// 分页拉取某学生的作品列表（含 totalNum / totalPages）
const creations = await communityWeb.getCreationsByStudent(
  "63c2807d669fa967f17f5559",
  { page: 1, perPage: 12, sortField: "createdAt", sortType: "DESC" },
);
// creations: PagesRes<CreationSimple>
console.log(creations.totalNum, creations.data[0].title);
```

### 星球（HashTag）与作品关联

```ts
// 查询某作品加入了哪些星球
const planets = await communityWeb.getPlanetsOfCreation(
  "69929185f8d6142487fd4b2e",
);
// planets: HashTagCreationRelation[]
// planets[0].rank  →  "ORDINARY"（星球审核等级，与创作分 CreatorScore.rank 概念不同）

// 查询我加入某星球的作品分页（排除一个星球 + 过滤状态）
const mine = await communityWeb.getMyHashTagCreations(
  "蔚蓝档案",
  ["PUBLISHED"],
  { page: 1, perPage: 8, sortField: "lastPassedAt", sortType: "DESC" },
);
```

### 通知（细化了 15 种 contentCategory）

```ts
import type {
  NotificationContent,
  PostCommentContent,
  FollowedContent,
} from "@ccw-api/api";

const page = await communityWeb.getNotificationPage("COMMENT_TO_ME", {
  page: 1,
  perPage: 20,
});
// page.data[].content  类型是 NotificationContent（判别联合）
// 用 contentCategory 做类型收窄：

for (const notif of page.data) {
  switch (notif.contentCategory) {
    case "POST_COMMENT": {
      const c = notif.content as PostCommentContent;
      console.log("评论者:", c.sender, "文章:", c.subject_outline);
      break;
    }
    case "FOLLOWED": {
      const c = notif.content as FollowedContent;
      console.log("新粉丝:", c.sender, c.sender_id);
      break;
    }
    case "CREATION_SHARE":
    case "SESSION_CREATED":
    case "COMMUNITY_ACTIVITY":
    case "POST_VISIBILITY_CHANGED":
    // ……共 15 种，可按 IDE 补全逐项处理
  }
}

// 拉取所有分组的未读统计
const stats = await communityWeb.getNotificationStats();
// stats.creationInteraction  stats.commentToMe  stats.followMe ……
```

### 任务、表情、金币、签到

```ts
// 我的任务列表
const tasks = await communityWeb.getMyTasks();

// 领取某个任务奖励
await communityWeb.acceptAward("61273ccf1730f4308e853f6a");

// 个人金币余额（充值 / 赠送 / 提现 三栏分离）
const coin = await communityWeb.getPersonalCurrencyAccount();
// coin: { internalCurrencyBalance, topUpCurrencyBalance, withdrawCurrencyBalance }

// 全部表情包 + 分页 + 分类
const [allEmoji, emojiPage, categories] = await Promise.all([
  communityWeb.getAllEmojis(),
  communityWeb.getEmojiPage("ENABLED", { page: 1, perPage: 50 }),
  communityWeb.getEmojiCategoryList(),
]);

// 签到
await communityWeb.insertCheckInRecord(); // 今日打卡
const history = await communityWeb.getCheckInRecords();
```

### 黑名单、封禁、禁言查询

```ts
const STUDENT = "63c2807d669fa967f17f5559";

// 轻量：是否拉黑（只返回 NOT_BLOCKED / BLOCKING）
const s = await communityWeb.getStudentBlockStatus(STUDENT);

// 详细：完整的 BlockActionRecord（拉黑动作记录，oid / createdAt / fromEntityId）
const detail = await communityWeb.getStudentBlockRecordDetail(STUDENT);

// 封禁详情（带泛型，locked=false 时其他字段全为 null）
const locked = await communityWeb.getLockedUserDetail<true>(
  "642c0e8a59230841adf62406",
);

// 禁言详情（studentNumber 是 244373873 这种数字字符串，null 表示未禁言）
const muted = await communityWeb.getMutedUserDetail("244373873");
```

### 通用工具型 API

```ts
// 生成短链
await communityWeb.createShortUrl("https://ccw.site/detail/xxx");

// 生成邀请码（api/v1/short_code/encode）
await communityWeb.encodeShortCode("hello world", 1, 6);

// 服务器时间
await communityWeb.getTime();

// 埋点事件上报
await communityWeb.sendEvent("creation_detail_view_6880873d2211fa69e41c9d19");

// 广告横幅
await communityWeb.getLeafletsItemList(1001);

// 学科专区（分页 / 按频道）
await communityWeb.getSubjectAreaPage({ page: 1, perPage: 20 });
await communityWeb.getSubjectAreaPageByChannel("PRIMARY");
```

---

## 类型系统

### 原语类型（`types/api.d.ts`）

可直接从包顶层作为 `type` 导入：

```ts
import type {
  MongoDBId, // 24 位 hex 字符串（ObjectId）
  CNameOssUrl, // https://m.ccw.site/... 或 https://m.xiguacity.cn/... OSS URL
  UUID, // `${string}-${string}-${string}-${string}-${string}` 类型体操
  ApiResponse, // { code, msg, body: T } 后端统一响应壳（SDK 内部已拆）
} from "@ccw-api/api";
```

### 领域命名空间

每个 `types/*.d.ts` 作为一个命名空间重新导出，**避免同名类型冲突**（典型如 `Student` vs `StudentOverview` vs `Account.Types.Student`）：

```ts
import type {
  Api, // 原语类型（MongoDBId / CNameOssUrl / UUID / ApiResponse ...）
  UserData, // Student / StudentOverview / CreatorScore / UserCard ...
  Creation, // Creation / HashTag / HashTagCreationRank / CreationRelease ...
  Comment, // Comment / CommentStatus ...
  Notification, // Notification / NotificationSenderInfo / NotificationGroup ...
  NotificationContent, // 15 种通知 content 判别联合
  Pages, // PageArgs / PagesRes
  Session, // StudentSession / SessionArea
  Account, // AccountTypes
  Approval, // ApprovalTag
} from "@ccw-api/api";

type Score = UserData.CreatorScore["rank"]; // "ORDINARY" | "HACKER" | "ADVANCED"
type PlanetRank = Creation.HashTagCreationRank; // "ORDINARY"
```

---

## 分页约定

所有分页 API 都遵循同一套形状（详见 `types/pages.d.ts` + `src/queryPages.ts`）：

```ts
import type { PageArgs, PagesRes } from "@ccw-api/api";

// 入参 Partial<PageArgs<SortField>>，默认 { page:1, perPage:20, sortType:"DESC" }
// 出参 PagesRes<T> 完整结构：
const p: PagesRes<Creation.Creation> = {
  data: [], // 当前页数据
  page: 1,
  perPage: 20,
  offset: 0,
  totalNum: 1234, // 总条数 —— 之前版本被截断，目前 SDK 已完整透出
  totalPages: 62, // 总页数
  sortField: "createdAt",
  sortType: "DESC",
};
```

---

## 开发 & 发布

```bash
# 三产物构建（node / esm / .d.ts）
npm run build

# 跑测试（Jest 30 + ts-jest，67 suites / 72 tests）
npm test
npm run test:dev       # watch 模式

# 文档（TypeDoc，生成到 doc/ 或默认输出目录）
npm run doc
npm run doc:dev
```

`npm publish` 会自动触发 `prepublishOnly` → **build + test** 全跑一遍，失败会阻断发布。

---

## 目录与规范

所有 API 文件严格遵循 `AGENT.md` 规范：

- **按域名分组**：`src/sso` / `src/community-web`，内部子目录对应 URL 路径
- **单文件单接口**：文件名 `kebab-case`，对应 endpoint 最后一段
- **7 段式模板**（每个 API 文件内部固定顺序）：
  1. `import`
  2. `export const url = "https://..."`（调试 & 测试直接引用）
  3. `export type Req = { ... }`
  4. `export type Res = { ... }`（响应体内部，不含 `ApiResponse` 外层）
  5. 辅助类型
  6. JSDoc（`@param` / `@returns`）
  7. `export async function xxx(): Promise<Res>`

新增 API 时，**最后记得在 `src/community-web/index.ts` 里 `import + 对象字面量聚合导出`**，否则外部访问不到。
