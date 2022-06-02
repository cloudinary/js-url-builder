import IURLConfig from "../../src/config/interfaces/Config/IURLConfig";
import {CloudinaryImage} from "../../src/assets/CloudinaryImage";
import {createNewImage} from "../TestUtils/createCloudinaryImage";
import URLConfig from "../../src/config/URLConfig";
import { Resize } from "@cloudinary/transformation-builder-sdk/actions";
import ICloudinaryAssetConfigurations from "../../src/config/interfaces/Config/ICloudinaryAssetConfigurations";


/**
 * @description Create CloudinaryURL based on a URL Configuration, and return the URL
 * @param urlConfig
 */
function createURLFromConfig(urlConfig: IURLConfig) {
  return new CloudinaryImage('sample', {
    cloudName: 'demo'
  }, urlConfig).toURL();
}


describe('It tests a combination of Cloudinary URL and Configuration', () => {
  it('Generates a URL', () => {
    const url = createNewImage('my_image')
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/my_image');
  });

  it('Throw error when config is invalid', () => {
    expect(() => {
      new CloudinaryImage('my_image').toURL(); // missing cloudName should throw error
    }).toThrow();
  });

  it('Generates a URL with transforamtions', () => {
    const url = createNewImage()
      .resize(Resize.fill(100, 100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/c_fill,h_100,w_100/sample');
  });

  it('Shows a use-case for global configuration', () => {
    //
    /**
     * We can implement this "wrapper", or instruct our customers how to implement it.
     */
    class MyGlobalCloudinary {
      public cloudinaryConfig: ICloudinaryAssetConfigurations;

      // Constructor accepts a cloudinary configuration
      constructor(cloudinaryConfig: ICloudinaryAssetConfigurations) {
        this.cloudinaryConfig = cloudinaryConfig;
      }

      // Utility function that returns a new instance with configuration set
      image(publicID: string) {
        return new CloudinaryImage(
          publicID,
          this.cloudinaryConfig.cloud,
          this.cloudinaryConfig.url
        );
      }
    }

    /**
     * Define the configuration and your "global" instance
     */
    const myInstance = new MyGlobalCloudinary({
      cloud: {
        cloudName: 'MY_CLOUD_NAME'
      },
      url: {
        analytics: false
      }
    });

    /**
     * Use the "global" instance
     */
    const img = myInstance.image('sample');
    img.resize(Resize.fill(100, 100));

    expect(img.toURL()).toBe('https://MY_CLOUD_NAME.media.cloudinary.net/c_fill,h_100,w_100/sample');
  });

  it('Generates a URL with version in the public ID', () => {
    const img = createNewImage('v1234/foo/sample', {cloudName: 'demo'}, {forceVersion: true});

    expect(img.toURL()).toContain('https://demo.media.cloudinary.net/v1234/foo/sample');
  });

  it('Generates a URL with V1', () => {
    const img = createNewImage('foo/sample', {cloudName: 'demo'}, {forceVersion: true});

    expect(img.toURL()).toContain('https://demo.media.cloudinary.net/v1/foo/sample');
  });

  it('Generates a URL with domain', () => {
    const img = createNewImage('sample', {cloudName: 'demo'}, {domain: 'my-domain.com'});

    expect(img.toURL()).toContain('https://my-domain.com/sample');
  });

  it('Generates a URL without V1', () => {
    const img = createNewImage('foo/sample', {cloudName: 'demo'}, {forceVersion: false});

    expect(img.toURL()).toContain('https://demo.media.cloudinary.net/foo/sample');
  });

  it('Sets attributes using setters', () => {
    const conf = new URLConfig({});

    conf
      .setForceVersion(true)
      .setLongUrlSignature(true)
      .setSignUrl(true);

    expect(conf.forceVersion).toBe(true);
    expect(conf.longUrlSignature).toBe(true);
    expect(conf.signUrl).toBe(true);
  });
});
