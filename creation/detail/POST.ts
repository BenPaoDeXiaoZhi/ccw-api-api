
/**
 * @name 
 * @description 
 */
export type Req = {
  "oid": string,
  "accessKey": string
}
export type Res = {
  "body": {
    "artifactType": string,
    "commentCount": number,
    "createdAt": number,
    "creationRelease": {
      "checked": boolean,
      "coverGifLink": null,
      "coverLink": string,
      "createdAt": number,
      "customVersion": string,
      "description": null,
      "extensions": [
        string,
        string,
        string
      ],
      "hasCloudVariables": boolean,
      "keyboardLayout": string,
      "oid": string,
      "operatingInstruction": string,
      "profiling": null,
      "projectLink": string,
      "status": string,
      "submittedAt": number,
      "tags": [
        string
      ],
      "updatedAt": number,
      "version": string,
      "videoLink": null
    },
    "creationReleaseList": [
      {
        "checked": boolean,
        "coverGifLink": null,
        "coverLink": string,
        "createdAt": number,
        "customVersion": string,
        "description": null,
        "extensions": [
          string,
          string,
          string
        ],
        "hasCloudVariables": boolean,
        "keyboardLayout": string,
        "oid": string,
        "operatingInstruction": string,
        "profiling": null,
        "projectLink": string,
        "status": string,
        "submittedAt": number,
        "tags": [
          string
        ],
        "updatedAt": number,
        "version": string,
        "videoLink": null
      }
    ],
    "currentHashTag": null,
    "currentReleaseOid": string,
    "description": string,
    "eid": null,
    "ext": {
      "keyboardLayout": string,
      "requireLogin": boolean,
      "SUBMIT_HASH_TAGS": []
    },
    "favoriteCount": number,
    "featuredCoverLink": string,
    "firstPublishedRelease": {
      "checked": boolean,
      "coverGifLink": null,
      "coverLink": string,
      "createdAt": number,
      "customVersion": string,
      "description": null,
      "extensions": [
        string,
        string,
        string
      ],
      "hasCloudVariables": boolean,
      "keyboardLayout": string,
      "oid": string,
      "operatingInstruction": string,
      "profiling": null,
      "projectLink": string,
      "status": string,
      "submittedAt": number,
      "tags": [
        string
      ],
      "updatedAt": number,
      "version": string,
      "videoLink": null
    },
    "forEveryone": boolean,
    "hashTags": [],
    "isOpenSource": boolean,
    "isSelf": null,
    "isTeamwork": boolean,
    "keyboardLayout": string,
    "lastPassedAt": number,
    "latestCoverLink": string,
    "latestProjectLink": string,
    "likeCount": number,
    "oid": string,
    "operatedAt": number,
    "projectLastModifiedAt": null,
    "rank": string,
    "remixCreationOid": null,
    "remixedCount": number,
    "remixedCreation": null,
    "repostedSource": null,
    "requireLogin": boolean,
    "screenMode": string,
    "sourceOpenLevel": string,
    "stats": {
      "averageRating": number,
      "mostApprovedReviewIds": [],
      "reviewCount": number,
      "reviewTags": []
    },
    "status": string,
    "student": {
      "approvedContent": null,
      "approvedType": null,
      "avatar": string,
      "bio": string,
      "commentCount": null,
      "creationCount": null,
      "favoriteCount": null,
      "followerCount": null,
      "followingCount": null,
      "followingStatus": null,
      "isSelf": null,
      "likeCount": null,
      "name": string,
      "oid": string,
      "picUrl": null,
      "remixedCount": null,
      "viewCount": null,
      "virtualValue": null
    },
    "studentOid": string,
    "tags": [],
    "teamMemberRespList": [
      {
        "authority": string,
        "avatar": string,
        "createdAt": number,
        "creationOid": string,
        "name": string,
        "online": null,
        "priority": number,
        "profile": null,
        "role": string,
        "userOid": string
      }
    ],
    "teamworkStatus": {
      "currentTeamMemberList": [
        {
          "authority": string,
          "avatar": string,
          "createdAt": number,
          "creationOid": string,
          "name": string,
          "online": null,
          "priority": number,
          "profile": null,
          "role": string,
          "userOid": string
        }
      ],
      "online": boolean
    },
    "title": string,
    "type": string,
    "typicalProjectId": null,
    "updatedAt": number,
    "viewCount": number,
    "visibleScope": string
  },
  "code": string,
  "msg": null,
  "status": number
}
  