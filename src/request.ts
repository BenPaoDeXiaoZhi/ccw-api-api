type Response<Res = any> = {
  data: Res;
};

interface RequestUtils {
  get<Res = any>(url: string | URL): Promise<Response<Res>>;
  post<Res>(url: string | URL, args?: any): Promise<Response<Res>>;
}

export let request: RequestUtils = {
  post<Res = any>(url: string | URL, args: any = null): Promise<Response<Res>> {
    return requestUtils.post<Res>(url, args);
  },
  get<Res = any>(url: string | URL): Promise<Response<Res>> {
    return requestUtils.get<Res>(url);
  },
};

let requestUtils: RequestUtils = {
  async post(url, args = null) {
    throw new Error("requestUtils for @ccw-api/api is not initialized");
  },
  async get(url) {
    throw new Error("requestUtils for @ccw-api/api is not initialized");
  },
};

export function setRequestUtils(reqUtils: RequestUtils) {
  requestUtils = reqUtils;
}
