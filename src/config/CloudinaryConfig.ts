import CloudConfig from "./CloudConfig.js";
import URLConfig from "./URLConfig.js";
import ICloudConfig from "./interfaces/Config/ICloudConfig.js";
import IURLConfig from "./interfaces/Config/IURLConfig.js";
import ICloudinaryAssetConfigurations from "./interfaces/Config/ICloudinaryAssetConfigurations.js";

class CloudinaryConfig {
  public cloud: CloudConfig;
  public url: URLConfig;

  constructor(configurations: ICloudinaryAssetConfigurations = {}) {
    this.cloud = new CloudConfig(configurations.cloud);
    this.url = new URLConfig(configurations.url || {});
  }

  /**
   * @description Setter for the cloudConfig
   * @param {ICloudConfig} cld
   */
  setCloudConfig(cld: ICloudConfig): this {
    this.cloud = new CloudConfig(cld);
    return this;
  }

  /**
   * @description Setter for the urlConfig
   * @param {IURLConfig} url
   */
  setURLConfig(url: IURLConfig): this {
    this.url = new URLConfig(url);
    return this;
  }

  extend(configurations: ICloudinaryAssetConfigurations): CloudinaryConfig {
    this.cloud = this.cloud.extend(configurations.cloud || {});
    this.url = this.url.extend(configurations.url || {});

    return this;
  }
}

export default CloudinaryConfig;
