import { getUserExtensions } from "./users/{oid}/extensions";
import { donateExtension } from "./extensions/{eid}/donate";

export const bfsWeb = {
  donateExtension,
  getUserExtensions,
};
