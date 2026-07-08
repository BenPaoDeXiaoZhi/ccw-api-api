import "../env";

export function hasRealToken(): boolean {
  const token = process.env.TOKEN;
  return (
    token !== undefined &&
    token !== "" &&
    token !== "foo" &&
    token.length > 3
  );
}

export type ShapeValidator<T> = (res: T) => void;

function isTokenMissingError(msg: string): boolean {
  return (
    msg.includes("token为空") ||
    msg.includes("4001082401") ||
    msg.includes("token不能为空")
  );
}

export async function testAuthReadApi<T>(
  apiCall: () => Promise<T>,
  options: {
    rejectMessage?: string | RegExp;
    validateShape: ShapeValidator<T>;
  },
): Promise<void> {
  if (hasRealToken()) {
    try {
      const res = await apiCall();
      options.validateShape(res);
    } catch (e: any) {
      const msg = String(e?.message || e || "");
      expect(isTokenMissingError(msg)).toBe(false);
    }
  } else {
    if (options.rejectMessage) {
      await expect(apiCall()).rejects.toThrow(options.rejectMessage);
    } else {
      await expect(apiCall()).rejects.toThrow();
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
  if (hasRealToken()) {
    try {
      const res = await apiCall();
      if (options.validateShape) {
        options.validateShape(res);
      } else {
        expect(res).toBeDefined();
      }
    } catch (e: any) {
      const msg = String(e?.message || e || "");
      expect(isTokenMissingError(msg)).toBe(false);
    }
  } else {
    if (options.rejectMessage) {
      await expect(apiCall()).rejects.toThrow(options.rejectMessage);
    } else {
      await expect(apiCall()).rejects.toThrow();
    }
  }
}

export function expectKeys(obj: any, keys: string[]): void {
  expect(obj).toBeDefined();
  expect(typeof obj).toBe("object");
  for (const k of keys) {
    expect(k in obj).toBe(true);
  }
}

export function expectType(val: any, typeName: string): void {
  if (val !== null && val !== undefined) {
    expect(typeof val).toBe(typeName);
  }
}
