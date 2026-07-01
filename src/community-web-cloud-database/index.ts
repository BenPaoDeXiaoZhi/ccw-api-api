import {
  saveProjectCloudVariable,
  saveUserCloudVariable,
} from "./cloud_variable/save";
import { getCloudVariableDetailV2 } from "./cloud_variable/detail/v2";

export const communityWebCloudDatabase = {
  saveProjectCloudVariable,
  saveUserCloudVariable,
  getCloudVariableDetailV2,
};
