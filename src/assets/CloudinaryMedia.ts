import {CloudinaryTransformable} from "./CloudinaryTransformable.js";
import {videoEditType} from "@cloudinary/transformation-builder-sdk/actions/videoEdit";
import {LayerAction} from "@cloudinary/transformation-builder-sdk/actions/layer/LayerAction";
import {Transformation} from "@cloudinary/transformation-builder-sdk/transformation/Transformation";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig.js";
import IURLConfig from "../config/interfaces/Config/IURLConfig.js";
import { cloneDeep } from '../internal/utils/cloneDeep.js';
import {ITranscodeAction} from "@cloudinary/transformation-builder-sdk/actions/transcode";


/**
 * @desc Cloudinary media asset, with all possible transformations
 * @summary SDK
 * @memberOf SDK
 */
class CloudinaryMedia extends CloudinaryTransformable {
  constructor(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig) {
    /* istanbul ignore next */
    super(publicID, cloudConfig, urlConfig, new Transformation());
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

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {this}
   */
  underlay(underlayAction: LayerAction): this {
    this.transformation.underlay(underlayAction);
    return this;
  }

  clone(): this {
    return cloneDeep(this);
  }
}

export {CloudinaryMedia};
