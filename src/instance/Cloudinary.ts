import {CloudinaryImage} from "../assets/CloudinaryImage.js";
import {CloudinaryVideo} from "../assets/CloudinaryVideo.js";
import ICloudinaryAssetConfigurations from "../config/interfaces/Config/ICloudinaryAssetConfigurations.js";

/**
 * @description Cloudinary instance
 * NOTE: (internal) raw and media where not added as aliases since they
 * increased the bundle size
 */
class Cloudinary {
  private cloudinaryConfig: ICloudinaryAssetConfigurations;

  constructor(cloudinaryConfig?: ICloudinaryAssetConfigurations) {
    if (cloudinaryConfig) {
      this.cloudinaryConfig = cloudinaryConfig;
    }
  }

  image(publicID?: string): CloudinaryImage {
    return new CloudinaryImage(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
  }

  video(publicID?: string): CloudinaryVideo {
    return new CloudinaryVideo(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
  }

  setConfig(cloudinaryConfig: ICloudinaryAssetConfigurations):this {
    this.cloudinaryConfig = cloudinaryConfig;
    return this;
  }

  getConfig() {
    return this.cloudinaryConfig;
  }

  extendConfig():void {
    // Future implementation
  }
}



export {Cloudinary};
