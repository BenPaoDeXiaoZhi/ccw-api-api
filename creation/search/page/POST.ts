
/**
 * @name 
 * @description 
 */
export type Req = {
  "page": number,
  "perPage": number,
  "tag": string
}
export type Res = {
  "body": {
    "perPage": number,
    "data": [
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string
        ],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string
          ]
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "coverGifLink": string,
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "videoLink": string,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string,
          string,
          string,
          string
        ],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string,
            string,
            string,
            string
          ]
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string
        ],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string
          ]
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string,
          string,
          string,
          string,
          string
        ],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string,
            string,
            string,
            string,
            string
          ]
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": []
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "approvedContent": string,
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string,
          "approvedType": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "requireLogin": boolean,
          "SUBMIT_HASH_TAGS": []
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "requireLogin": boolean,
          "SUBMIT_HASH_TAGS": [
            string,
            string,
            string
          ]
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "approvedContent": string,
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string,
          "approvedType": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string
        ],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string
          ]
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "coverGifLink": string,
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "videoLink": string,
          "submittedAt": number,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "requireLogin": boolean,
          "SUBMIT_HASH_TAGS": []
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string,
          string
        ],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string,
            string,
            string
          ]
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "coverGifLink": string,
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "videoLink": string,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string
        ],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string,
            string
          ]
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "coverGifLink": string,
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "videoLink": string,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "requireLogin": boolean,
          "SUBMIT_HASH_TAGS": []
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "approvedContent": string,
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string,
          "approvedType": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string
        ],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "requireLogin": boolean,
          "homeworkReviewContent": string,
          "SUBMIT_HASH_TAGS": [
            string
          ]
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "coverGifLink": string,
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "videoLink": string,
          "submittedAt": number,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "requireLogin": boolean,
          "SUBMIT_HASH_TAGS": []
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "coverGifLink": string,
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "videoLink": string,
          "submittedAt": number,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string
        ],
        "screenMode": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "approvedContent": string,
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string,
          "approvedType": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string,
          string
        ],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string,
            string,
            string
          ]
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "coverGifLink": string,
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "videoLink": string,
          "submittedAt": number,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string
        ],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string
          ]
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "requireLogin": boolean,
          "SUBMIT_HASH_TAGS": []
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": []
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string
          ]
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "coverGifLink": string,
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "videoLink": string,
          "submittedAt": number,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string,
          string
        ],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string,
            string,
            string
          ]
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "approvedContent": string,
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string,
          "approvedType": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "requireLogin": boolean,
          "LOCK_CONFIG": {
            "lockStart": number,
            "lockEnd": number
          },
          "SUBMIT_HASH_TAGS": []
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "profile": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": []
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "profile": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": []
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string
        ],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string
          ]
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "requireLogin": boolean,
          "SUBMIT_HASH_TAGS": []
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string
        ],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string
          ]
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": []
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [
            string
          ],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string
        ],
        "rank": string,
        "viewCount": number,
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "SUBMIT_HASH_TAGS": [
            string
          ]
        },
        "isOpenSource": boolean,
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      },
      {
        "artifactType": string,
        "student": {
          "name": string,
          "bio": string,
          "avatar": string,
          "oid": string
        },
        "description": string,
        "likeCount": number,
        "latestCoverLink": string,
        "oid": string,
        "lastPassedAt": number,
        "title": string,
        "type": string,
        "forEveryone": boolean,
        "operatedAt": number,
        "createdAt": number,
        "sourceOpenLevel": string,
        "hashTags": [
          string,
          string
        ],
        "rank": string,
        "viewCount": number,
        "teamMemberRespList": [
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          },
          {
            "createdAt": number,
            "role": string,
            "userOid": string,
            "authority": string,
            "name": string,
            "avatar": string,
            "priority": number,
            "creationOid": string
          }
        ],
        "remixedCount": number,
        "updatedAt": number,
        "ext": {
          "keyboardLayout": string,
          "LOCK_CONFIG": {
            "lockStart": number,
            "lockEnd": number
          },
          "SUBMIT_HASH_TAGS": [
            string,
            string
          ]
        },
        "isOpenSource": boolean,
        "teamworkStatus": {
          "currentTeamMemberList": [
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            },
            {
              "createdAt": number,
              "role": string,
              "userOid": string,
              "authority": string,
              "name": string,
              "avatar": string,
              "priority": number,
              "creationOid": string
            }
          ],
          "online": boolean
        },
        "isTeamwork": boolean,
        "creationRelease": {
          "projectLink": string,
          "description": string,
          "oid": string,
          "coverLink": string,
          "version": string,
          "tags": [],
          "createdAt": number,
          "extensions": [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
          ],
          "hasCloudVariables": boolean,
          "keyboardLayout": string,
          "operatingInstruction": string,
          "checked": boolean,
          "submittedAt": number,
          "customVersion": string,
          "status": string,
          "updatedAt": number
        },
        "visibleScope": string,
        "commentCount": number,
        "tags": [
          string,
          string,
          string
        ],
        "screenMode": string,
        "featuredCoverLink": string,
        "studentOid": string,
        "latestProjectLink": string,
        "currentReleaseOid": string,
        "favoriteCount": number,
        "status": string
      }
    ],
    "offset": number,
    "sortType": string,
    "totalNum": number,
    "sortField": string,
    "page": number
  },
  "code": string,
  "msg": null,
  "status": number
}
  