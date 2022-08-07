import {
  getUrlPrefix,
  getUrlVersion
} from "../internal/url/cloudinaryURL.js";
import {Transformation} from "@cloudinary/transformation-builder-sdk/transformation/Transformation";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig.js";
import IURLConfig from "../config/interfaces/Config/IURLConfig.js";
import IAuthTokenConfig from "../config/interfaces/Config/IAuthTokenConfig.js";
import URLConfig from "../config/URLConfig.js";
import {getSDKAnalyticsSignature} from "../sdkAnalytics/getSDKAnalyticsSignature.js";
import {ITrackedPropertiesThroughAnalytics} from "../sdkAnalytics/interfaces/ITrackedPropertiesThroughAnalytics.js";

/**
 * @description Cloudinary file without a transformation
 * @summary SDK
 * @memberOf SDK
 */
class CloudinaryFile {
  protected cloudName: string; // populated from the cloud config
  protected apiKey: string; // populated from  the cloud config
  protected apiSecret: string; // populated from the cloud config
  protected authToken: IAuthTokenConfig; // populated from the cloud config
  protected urlConfig: IURLConfig;

  private version: number | string;
  private publicID: string;
  private extension: string;
  private signature: string;

  constructor(publicID: string, cloudConfig: ICloudConfig = {}, urlConfig?: IURLConfig) {
    this.setPublicID(publicID);
    this.setCloudConfig(cloudConfig);
    this.setURLConfig(urlConfig);
  }

  /**
   * @description Sets the URL Config for this asset
   * @param urlConfig
   * @return {this}
   */
  setURLConfig(urlConfig: IURLConfig): this {
    this.urlConfig = new URLConfig(urlConfig);
    return this;
  }

  /**
   * @description Sets the Cloud Config for this asset
   * @param urlConfig
   * @return {this}
   */
  setCloudConfig(cloudConfig: ICloudConfig): this {
    this.cloudName = cloudConfig.cloudName;
    this.apiKey = cloudConfig.apiKey;
    this.apiSecret = cloudConfig.apiSecret;
    this.authToken = cloudConfig.authToken;
    return this;
  }

  /**
   * @description Sets the public ID of the asset.
   * @param {string} publicID The public ID of the asset.
   * @return {this}
   */
  setPublicID(publicID: string): this {
    // PublicID must be a string!
    this.publicID = publicID ? publicID.toString() : '';
    return this;
  }


  /**
   * @description Sets the signature of the asset.
   * @param {string} signature The signature.
   * @return {this}
   */
  setSignature(signature: string): this {
    this.signature = signature;
    return this;
  }

  /**
   * @description Sets the version of the asset.
   * @param {string} newVersion The version of the asset.
   * @return {this}
   */
  setVersion(newVersion: number | string): this {
    if (newVersion) {
      this.version = newVersion;
    }
    return this;
  }

  sign(): this {
    return this;
  }

  /**
   * @description Serializes to URL string
   * @param overwriteOptions
   */
  toURL(overwriteOptions: {trackedAnalytics?: Partial<ITrackedPropertiesThroughAnalytics>} = {}): string {
    return this.createCloudinaryURL(null, overwriteOptions.trackedAnalytics);
  }

  /**
   * @description Validate various options before attempting to create a URL
   * The function will throw in case a violation
   * @throws Validation errors
   */
  validateAssetForURLCreation(): void {
    if (typeof this.cloudName === 'undefined') {
      throw 'You must supply a cloudName when initializing the asset';
    }
  }

  getSignature(): string {
    if (this.signature) {
      return `s--${this.signature}--`;
    } else {
      return '';
    }
  }

  /**
   *
   * @description Creates a fully qualified CloudinaryURL
   * @return {string} CloudinaryURL
   * @throws Validation Errors
   */
  createCloudinaryURL(transformation?: Transformation | string, trackedAnalytics?: Partial<ITrackedPropertiesThroughAnalytics>): string {
    // In accordance with the existing implementation, if no publicID exists we should return nothing.
    if (!this.publicID) {
      return '';
    }

    // Throws if some options are mis-configured
    // See the function for more information on when it throws
    this.validateAssetForURLCreation();

    const prefix = getUrlPrefix(this.cloudName, this.urlConfig);
    const transformationString = transformation ? transformation.toString() : '';
    const version = getUrlVersion(this.publicID, this.version, this.urlConfig.forceVersion);

    const publicID = this.publicID
      // Serialize the publicID, but leave slashes alone.
      // we can't use serializeCloudinaryCharacters because that does both things (, and /)
      .replace(/,/g, '%2C');

    const url = [prefix, this.getSignature(), transformationString, version, publicID]
      .filter((a) => a)
      .join('/');

    if (typeof transformation === 'string') {
      return url;
    } else {
      const safeURL = encodeURI(url)
        .replace(/\?/g, '%3F')
        .replace(/=/g, '%3D');

      // urlConfig.analytics is true by default, has to be explicitly set to false to overwrite
      // Don't add analytics when publicId includes a '?' to not risk changing existing query params
      if (this.urlConfig.analytics !== false && !(publicID.includes('?'))) {
        return `${safeURL}?_a=${getSDKAnalyticsSignature(trackedAnalytics)}`;
      } else {
        return safeURL;
      }
    }
  }
}

export {CloudinaryFile};
