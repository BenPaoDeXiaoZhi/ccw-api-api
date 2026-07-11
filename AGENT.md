# API 编写规范

## 目录结构

API 文件应按照后端服务域名进行分组，文件路径与 API URL 路径保持一致。

```
src/
├── sso/                          # sso.ccw.site 服务
│   └── index.ts                  # 导出该服务的所有 API
├── community-web/                # community-web.ccw.site 服务
│   └── index.ts
├── gandi-main/                   # gandi-main.ccw.site 服务
│   └── index.ts
├── bfs-web/                      # bfs-web.ccw.site 服务
│   └── index.ts
├── community-web-cloud-database/ # community-web-cloud-database.ccw.site 服务
│   └── index.ts
├── op-parent-api/                # op-parent-api.xiguacity.cn 服务
│   └── index.ts
├── index.ts                      # 根导出
└── types/                        # 公共类型定义
```

## 文件命名规范

- 使用 `kebab-case`（短横线分隔）命名文件
- 文件名应为 API endpoint名称，如 `login-by-password.ts`、`create-short-url.ts`
- 测试文件命名为 `${功能}.test.ts`，放置在同一目录下

## 代码结构规范

每个 API 文件应遵循以下顺序：

```typescript
// 1. 导入依赖
import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";

// 2. 导出 URL（用于调试和测试）
export const url = "https://domain.ccw.site/path/to/api";

// 3. 请求类型定义 优先寻找已在types中定义的类型,oid studentId等key的类型固定为MongoDBId
export type Req = {
  field1: string;
  field2: number;
};

// 4. 响应类型定义
export type Res<T = any> = {
  data: T;
};

// 5. 辅助类型或接口（如需要）
export type ExtraInfo = {
  detail: string;
};

// 6. JSDoc 注释
/**
 * API 功能描述
 * @param {string} param1 参数1说明
 * @param {number} param2 参数2说明
 * @returns {Promise<Res>} 返回值说明
 */

// 7. 导出函数
export async function apiFunctionName(
  param1: string,
  param2: number,
): Promise<Res> {
  const req: Req = { field1: param1, field2: param2 };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
```

## 类型定义规范

### 通用类型

项目提供以下公共类型，应优先使用：

- `ApiResponse<T>` - 统一响应格式
- `MongoDBId` - MongoDB ObjectID 类型
- `CachedOssUrl` - OSS 缓存 URL 类型
- `HexSecTimeStamp` - 十六进制秒级时间戳

### 请求类型

- 使用 `Req` 命名请求参数类型
- 定义所有必填字段和可选字段
- 使用字面量类型限制枚举值，如 `clientCode: "STUDY_COMMUNITY"`

### 响应类型

- 使用 `Res` 命名响应类型
- 支持泛型参数以适应不同响应结构，如 `Res<Extra = string>`
- 直接定义响应体结构，无需嵌套 `body`（由 `ApiResponse` 包装）

## 函数编写规范

### 参数处理

- 函数参数应清晰命名，避免使用缩写
- 将复杂对象参数拆分为多个简单参数，提高可读性
- 提供合理的默认值，如 `reqExtra: ReqExtra = { device: "Node", browser: "Node.js" }`

### 请求封装

- 使用 `ccwAxios` 发送请求，不要直接使用 `axios`
- 将请求体封装为 `Req` 类型变量后再发送
- 使用 `satisfies Req` 确保请求体类型正确

### 响应处理

- 使用 `ApiResponse<T>` 包装响应类型
- 通过 `.then((res) => res.data.body)` 直接返回响应体
- 对于需要特殊处理的响应数据（如 JSON 解析），在函数内部完成

## 导入规范

### 统一导入方式

```typescript
// 正确 - 使用命名导入
import { ccwAxios } from "@ccw-api/axios";

// 错误 - 默认导入方式不一致
import ccwAxios from "@ccw-api/axios";
```

### 类型导入

```typescript
// 正确 - 使用项目路径别名
import { ApiResponse, MongoDBId } from "types/api";
import { queryPage } from "src/queryPages";

// 错误 - 相对路径不一致或太长
import { ApiResponse } from "../../../types";
```

## 注释规范

### JSDoc 注释

所有导出函数必须添加 JSDoc 注释：

```typescript
/**
 * 通过密码登录
 * @param {string} loginKey 用户名
 * @param {string} password 密码
 * @param {ReqExtra} reqExtra 设备和浏览器信息（可选）
 * @returns {Promise<Res<Extra>>} 登录结果
 */
export async function loginByPassword(
  loginKey: string,
  password: string,
  reqExtra?: ReqExtra,
): Promise<Res<Extra>> {
  // ...
}
```

### 类型注释

对于复杂类型，添加适当的注释说明：
如果该属性可能为url,请立即询问开发者

```typescript
export type ApprovalStatus<Tid extends number, Tn extends string> = {
  /**
   * 有时会包含tag的名称，如"Gandi开发者"
   */
  iconLink: CachedOssUrl;
  /**
   * 浮于iconLink之上的icon
   */
  mediumImage: CachedOssUrl;
};
```

## 测试规范

### 测试框架

- 使用 Node.js 内置 `node:test` + `tsx`（TypeScript execute）运行测试
- 断言使用 Node.js 内置 `node:assert/strict`
- 测试运行命令：`npm test`（`node --import tsx --import ./env.ts --test "src/**/*.test.ts"`）

### 测试文件位置

测试文件与 API 文件放在同一目录下，命名为 `${功能}.test.ts`。

### 测试导入规范

从 `src/testUtils` 统一导入测试工具：

```typescript
import {
  test,        // node:test 的 test 函数别名
  beforeAll,   // node:test 的 before 函数别名
  testAuthReadApi,   // 读操作鉴权测试辅助
  testAuthWriteApi,  // 写操作鉴权测试辅助
  expectKeys,        // 对象 key 断言
  expectType,        // 类型断言
  hasKeyPath,        // 嵌套 key 路径检测
  getKeyPath,        // 获取嵌套属性值
  hasRealToken,      // 是否存在真实 token
} from "src/testUtils";
import assert from "node:assert/strict";
```

### 测试辅助函数 `testAuthReadApi` / `testAuthWriteApi`

**核心逻辑（先尝试运行 API，再判断错误原因）**：

1. 始终先调用 `apiCall()` 发送真实请求
2. 请求成功 → 执行 `validateShape` 验证返回值形状
3. 请求失败 → 提取错误消息，按以下分支处理：
   - **是 token 缺失错误**（`token为空` / `token不能为空` / `4001082401` / `User not logged in`）：
     - 有真实 token（`hasRealToken() === true`）→ 断言失败（不该出现鉴权错误）
     - 无真实 token → 如指定了 `rejectMessage` 则匹配错误消息，否则视为预期通过
   - **不是 token 缺失错误**：
     - 如指定了 `rejectMessage` → 用正则匹配错误消息，匹配通过，不匹配断言失败
     - 未指定 `rejectMessage` 且有真实 token → 重新抛出错误（非预期失败）
     - 未指定 `rejectMessage` 且无真实 token → 视为预期内异常，测试通过

```typescript
// 读操作示例：需要鉴权 + 返回值形状校验
test("get student profile", async () => {
  await testAuthReadApi(
    () => getStudentProfile("63c2807d669fa967f17f5559"),
    {
      rejectMessage: "token为空", // 可选：无 token 时期望的错误消息
      validateShape: (res) => {
        expectKeys(res, ["oid", "nickname", "avatar"]);
        expectType(res.oid, "string");
      },
    },
  );
});

// 写操作示例：需要鉴权 + 返回值非空校验
test("insert check in record", async () => {
  await testAuthWriteApi(() => insertCheckInRecord(), {});
});

// 写操作示例：需要鉴权 + 自定义形状校验
test("save user cloud variable", async () => {
  await testAuthWriteApi(
    () => saveUserCloudVariable("bizId", "secKey", { foo: "bar" }),
    {
      validateShape: (res) => {
        assert.strictEqual(res.foo, "bar");
      },
    },
  );
});
```

### 测试内容

测试应覆盖：

- 正常流程返回值验证
- 异常情况错误信息验证
- 参数边界情况

**重要**：

- 如果 API 不需要 token 也能使用，测试应验证返回值的形状/类型，而不是期望抛出 token 相关异常
- 仅当 API 确实需要鉴权时，才使用 "should fail without token" 类测试
- Logout API 测试在有真实 token 时应跳过，避免失效服务端 session

```typescript
import { getApprovalTags } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("test approval list", async () => {
  const tags = await getApprovalTags("63c2807d669fa967f17f5559");
  const tag = tags.find((v) => v.approvalTagId === 235);
  assert.ok(tag !== undefined);
  assert.strictEqual(tag.approvalTagName, "Gandi 开发者");
});
```

## 导出规范

### 服务入口导出

每个服务目录（如 `sso/`、`community-web/`）应有 `index.ts`，统一导出该服务的所有 API：

```typescript
import { loginByPassword } from "./web/auth/login-by-password";
import { logout } from "./web/auth/logout";

export const sso = {
  loginByPassword,
  logout,
};
```

### 根导出

`src/index.ts` 导出所有服务：

```typescript
import { sso } from "./sso";
import { communityWeb } from "./community-web";
import { gandiMain } from "./gandi-main";
import { bfsWeb } from "./bfs-web";
import { communityWebCloudDatabase } from "./community-web-cloud-database";
import { opParentApi } from "./op-parent-api";
export type * from "./types";

export { sso, communityWeb, gandiMain, bfsWeb, communityWebCloudDatabase, opParentApi };

export default {
  sso,
  communityWeb,
  gandiMain,
  bfsWeb,
  communityWebCloudDatabase,
  opParentApi,
};
```

## 错误处理

- 使用 `@ccw-api/axios` 的拦截器自动处理错误
- 测试时验证错误信息是否符合预期
- 不要在 API 函数中捕获错误，让调用方处理

## 最佳实践

1. **URL 一致性**：`url` 常量应与实际 API 地址完全一致
2. **类型安全**：使用 TypeScript 泛型提供灵活的类型支持
3. **函数命名**：使用 `camelCase`，前缀描述操作（如 `get`, `create`, `login`）
4. **单一职责**：每个文件只包含一个 API 函数
5. **可测试性**：导出 `url` 常量便于测试和调试

### 分页请求

```typescript
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";

// 其他一般请求配置

export async function getDonatedRecordRanking(
  args: any, // 其他参数
  pageArgs_: Partial<PageArgs> = {},
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { ... }; // 构造请求
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
```
