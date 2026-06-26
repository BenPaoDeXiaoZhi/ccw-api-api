
/**
 * @name 
 * @description 
 */
export type Req = {
  "remixCreationOids": [
    string
  ]
}
export type Res = {
  "body": {
    "perPage": number,
    "data": [],
    "sortType": string,
    "totalNum": number,
    "sortField": string,
    "totalPages": number,
    "page": number
  },
  "code": string,
  "msg": null,
  "status": number
}
  