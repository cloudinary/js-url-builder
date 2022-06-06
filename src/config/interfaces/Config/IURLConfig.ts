/**
 * @name ICloudinaryAssetConfigurations
 * @summary config
 * @description Defines the configuration needed for URL-related options when creating Cloudinary URL
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|URL Parameters}
 * @prop {boolean} [signUrl]
 * @prop {boolean} [longUrlSignature]
 * @prop {boolean} [forceVersion]
 * @prop {boolean} [analytics]
 * @example
 * import Cloudinary from '@cloudinary/url-builder';
 * // The Cloudinary Instance accepts a URLConfig under the `url` key
 * const cld = new Cloudinary({
 *  // the cloudConfig
 *  cloud: {
 *       cloudName: 'demo'
 *   },
 *   // the urlConfig
 *   url: {
 *       forceVersion: true
 *   }
 * });
 */
interface IURLConfig {
  /**
   * Whether or not to include the SDK version signature in the URL
   */
  analytics?: boolean;

  /**
   * Whether or not to sign the URL
   */
  signUrl?: boolean;

  /**
   * Whether or not to use a long signature
   */
  longUrlSignature?: boolean;

  /**
   * Whether or not to force a version
   */
  forceVersion?: boolean;

  /**
   * Whether or not to use domain
   */
  domain?: string;
}

export default IURLConfig;
