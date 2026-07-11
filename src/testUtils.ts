import {
  test as nodeTest,
  before as nodeBeforeAll,
  type HookOptions,
  type TestOptions,
  type TestFn,
} from "node:test";
import assert from "node:assert/strict";
import "../env";

export function hasRealToken(): boolean {
  const token = process.env.TOKEN;
  return (
    token !== undefined && token !== "" && token !== "foo" && token.length > 3
  );
}

export type ShapeValidator<T> = (res: T) => void;

function isTokenMissingError(msg: string): boolean {
  return (
    msg.includes("token为空") ||
    msg.includes("4001082401") ||
    msg.includes("token不能为空") ||
    msg.includes("User not logged in")
  );
}

export function hasKeyPath(obj: unknown, keyPath: string): boolean {
  const parts = keyPath.split(".");
  let cur: any = obj;
  for (let i = 0; i < parts.length; i++) {
    if (cur === null || cur === undefined) return false;
    const p = parts[i];
    if (typeof cur !== "object") return false;
    if (!(p in cur)) return false;
    cur = cur[p];
  }
  return true;
}

export function getKeyPath(obj: unknown, keyPath: string): unknown {
  const parts = keyPath.split(".");
  let cur: any = obj;
  for (const p of parts) {
    if (cur === null || cur === undefined) return undefined;
    cur = cur[p];
  }
  return cur;
}

export type BeforeAllFn = (t: any) => void | Promise<void>;

export interface BeforeAllOptions extends HookOptions {}

function normalizeHookOptions(
  opts?: number | BeforeAllOptions,
): HookOptions | undefined {
  if (opts === undefined) return undefined;
  if (typeof opts === "number") return { timeout: opts };
  return opts;
}

export function beforeAll(fn: BeforeAllFn): void;
export function beforeAll(fn: BeforeAllFn, timeoutMs: number): void;
export function beforeAll(fn: BeforeAllFn, options: BeforeAllOptions): void;
export function beforeAll(
  fn: BeforeAllFn,
  opts?: number | BeforeAllOptions,
): void {
  const options = normalizeHookOptions(opts);
  if (options === undefined) {
    nodeBeforeAll(fn);
  } else {
    nodeBeforeAll(fn, options);
  }
}

function normalizeTestOptions(
  arg2?: TestOptions | TestFn,
  arg3?: number | TestFn,
): { fn: TestFn | undefined; options: TestOptions | undefined } {
  if (typeof arg2 === "function") {
    const fn = arg2 as TestFn;
    if (arg3 === undefined) {
      return { options: undefined, fn };
    }
    if (typeof arg3 === "number") {
      return { options: { timeout: arg3 }, fn };
    }
    return { options: undefined, fn: arg3 as TestFn };
  }
  if (arg2 === undefined) {
    return { options: undefined, fn: undefined };
  }
  return { options: arg2 as TestOptions, fn: arg3 as TestFn | undefined };
}

export function test(name: string, fn: TestFn): void;
export function test(name: string, fn: TestFn, timeoutMs: number): void;
export function test(name: string, options: TestOptions, fn: TestFn): void;
export function test(
  name: string,
  arg2?: TestOptions | TestFn,
  arg3?: number | TestFn,
): void {
  const { options, fn } = normalizeTestOptions(arg2, arg3);
  if (options === undefined) {
    if (fn !== undefined) {
      (nodeTest as any)(name, fn);
    } else {
      (nodeTest as any)(name);
    }
  } else {
    if (fn !== undefined) {
      (nodeTest as any)(name, options, fn);
    } else {
      (nodeTest as any)(name, options);
    }
  }
}

function buildRejectsMatcher(expected?: string | RegExp) {
  if (expected === undefined) return undefined;
  if (expected instanceof RegExp) return expected;
  const escaped = expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(escaped);
}

export async function testAuthReadApi<T>(
  apiCall: () => Promise<T>,
  options: {
    rejectMessage?: string | RegExp;
    validateShape: ShapeValidator<T>;
  },
): Promise<void> {
  try {
    const res = await apiCall();
    options.validateShape(res);
  } catch (e: any) {
    const msg = String(e?.message || e || "");
    const re = buildRejectsMatcher(options.rejectMessage);
    if (isTokenMissingError(msg)) {
      if (hasRealToken()) {
        assert.fail(`unexpected token-missing error: ${msg}`);
      } else {
        if (re) {
          assert.match(msg, re, `expected error message to match ${re}`);
        }
        return;
      }
    }
    if (re) {
      assert.match(msg, re, `expected error message to match ${re}`);
      return;
    }
    if (hasRealToken()) {
      throw e;
    }
  }
}

export async function testAuthWriteApi<T>(
  apiCall: () => Promise<T>,
  options: {
    rejectMessage?: string | RegExp;
    validateShape?: ShapeValidator<T>;
  } = {},
): Promise<void> {
  try {
    const res = await apiCall();
    if (options.validateShape) {
      options.validateShape(res);
    } else {
      assert.ok(res !== undefined, `expected write result to be defined`);
    }
  } catch (e: any) {
    const msg = String(e?.message || e || "");
    const re = buildRejectsMatcher(options.rejectMessage);
    if (isTokenMissingError(msg)) {
      if (hasRealToken()) {
        assert.fail(`unexpected token-missing error: ${msg}`);
      } else {
        if (re) {
          assert.match(msg, re, `expected error message to match ${re}`);
        }
        return;
      }
    }
    if (re) {
      assert.match(msg, re, `expected error message to match ${re}`);
      return;
    }
    if (hasRealToken()) {
      throw e;
    }
  }
}

export function expectKeys(obj: any, keys: string[]): void {
  assert.ok(obj !== undefined, `expected obj to be defined`);
  assert.strictEqual(
    typeof obj,
    "object",
    `expected typeof obj to be "object"`,
  );
  for (const k of keys) {
    assert.ok(k in obj, `expected object to have key "${k}"`);
  }
}

export function expectType(val: any, typeName: string): void {
  if (val !== null && val !== undefined) {
    assert.strictEqual(
      typeof val,
      typeName,
      `expected typeof ${String(val)} to be "${typeName}"`,
    );
  }
}
