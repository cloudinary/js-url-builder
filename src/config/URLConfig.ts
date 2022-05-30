import IURLConfig from "./interfaces/Config/IURLConfig.js";
import Config from "./BaseConfig.js";
import {ALLOWED_URL_CONFIG} from "../internal/internalConstants.js";
import ICloudConfig from "./interfaces/Config/ICloudConfig.js";

class URLConfig extends Config implements IURLConfig {
  signUrl?: boolean;
  longUrlSignature?: boolean;
  useRootPath?: boolean;
  forceVersion?: boolean;
  domain?: string;

  /**
   * @param {IURLConfig} userURLConfig
   */
  constructor(userURLConfig: IURLConfig | any) {
    super();
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    Object.assign(this, urlConfig);
  }

  extend(userURLConfig: ICloudConfig | any): URLConfig {
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    return new URLConfig(Object.assign({}, this, urlConfig));
  }


  /**
   * @param value Sets whether or not to sign the URL
   */
  setSignUrl(value: boolean): this {
    this.signUrl = value;
    return this;
  }

  /**
   * @param value Sets whether or not to use a long signature
   */
  setLongUrlSignature(value: boolean): this {
    this.longUrlSignature = value;
    return this;
  }

  /**
   * @param value Sets whether or not to use a root path
   */
  setUseRootPath(value: boolean): this {
    this.useRootPath = value;
    return this;
  }


  /**
   * @param value Sets whether to force a version in the URL
   */
  setForceVersion(value: boolean): this {
    this.forceVersion = value;
    return this;
  }

  /**
   * @param value Sets whether to set domain in the URL
   */
  setDomain(value: string): this {
    this.domain = value;
    return this;
  }
}

export default URLConfig;
