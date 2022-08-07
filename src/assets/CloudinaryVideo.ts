import IURLConfig from "../config/interfaces/Config/IURLConfig.js";
import {CloudinaryTransformable} from "./CloudinaryTransformable.js";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig.js";
import {videoEditType} from "@cloudinary/transformation-builder-sdk/actions/videoEdit";
import {VideoTransformation} from "@cloudinary/transformation-builder-sdk/transformation/VideoTransformation";
import {ITranscodeAction} from "@cloudinary/transformation-builder-sdk/actions/transcode";


/**
 * @desc Cloudinary video asset, with video-related transformations
 * @summary SDK
 * @memberOf SDK
 */
class CloudinaryVideo extends CloudinaryTransformable {
  constructor(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig) {
    /* istanbul ignore next */
    super(publicID, cloudConfig, urlConfig, new VideoTransformation());
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Transcode} action
   * @return {this}
   */
  transcode(action: ITranscodeAction): this {
    this.transformation.transcode(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.VideoEdit} action
   * @return {this}
   */
  videoEdit(action: videoEditType): this {
    this.transformation.videoEdit(action);
    return this;
  }
}


export {CloudinaryVideo};
