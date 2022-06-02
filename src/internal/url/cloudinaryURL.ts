import {isUrl} from "./urlUtils/isUrl.js";
import {isFileName} from "./urlUtils/isFileName.js";
import {publicIDContainsVersion} from "./urlUtils/publicIDContainsVersion.js";
import IURLConfig from "../../config/interfaces/Config/IURLConfig.js";

/**
 * Create the URL prefix for Cloudinary resources.
 * Available use cases
 * https://${cloudName}.{domain}/
 * @private
 *
 * @param {string} cloudName
 */
function getUrlPrefix(cloudName: string, urlConfig: IURLConfig): string {
  const domain = urlConfig.domain;
  if (domain) {
    return `https://${domain}`;
  } else {
    return `https://${cloudName}.media.cloudinary.net`;
  }
}

/**
 *
 * @param {string} publicID
 * @param {number} version
 * @param {boolean} forceVersion
 */
function getUrlVersion(publicID: string, version: number | string, forceVersion:boolean): string {
  const shouldForceVersion = forceVersion !== false;

  if (version) {
    return `v${version}`;
  }

  // In all these conditions we never force a version
  if (publicIDContainsVersion(publicID) || isUrl(publicID) || isFileName(publicID)) {
    return '';
  }

  return shouldForceVersion ? 'v1' : '';
}

export {getUrlVersion, getUrlPrefix};
