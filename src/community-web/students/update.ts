import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import { StudentUpdateReq } from "src/types/userData";

export const url = "https://community-web.ccw.site/students/update";

export type Req = StudentUpdateReq;

export type Res = boolean;

export async function updateStudent(profile: StudentUpdateReq): Promise<Res> {
  const req: Req = profile;
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
