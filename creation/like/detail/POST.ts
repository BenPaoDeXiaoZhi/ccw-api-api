
/**
 * @name 
 * @description 
 */
export type Req = {
  "creationOid": string
}
export type Res = {
  "body": {
    "action": string,
    "createdAt": number,
    "creationOid": string,
    "oid": string,
    "receiverOid": string,
    "senderOid": string
  },
  "code": string,
  "msg": null,
  "status": number
}
  