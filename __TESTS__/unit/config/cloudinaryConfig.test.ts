import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import CloudConfig from "../../../src/config/CloudConfig";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {createNewFile} from "../../TestUtils/createCloudinaryFile";

describe('Tests for CloudinaryConfiguration', () => {
  it('Creates a CloudinaryConfig with defaults', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName:'foo'
      }
    });

    expect(conf.cloud).toEqual({
      cloudName:'foo'
    });
  });

  it('Will populate cloud configuration', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName: 'cloud_name',
        apiKey: 'api_key',
        apiSecret: 'api_secret'
      }
    });

    expect(conf.cloud.cloudName).toBe('cloud_name');
    expect(conf.cloud.apiKey).toBe('api_key');
    expect(conf.cloud.apiSecret).toBe('api_secret');
  });

  it('Will populate URL configuration', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName: 'foo'
      },
      url: {
        forceVersion: true,
        signUrl: true,
        longUrlSignature: true,
      }
    });

    expect(conf.url.forceVersion).toBe(true);
    expect(conf.url.signUrl).toBe(true);
    expect(conf.url.longUrlSignature).toBe(true);
  });

  it('Will log errors when invalid properties are passed as configuration', () => {
    const error = console.warn;
    // mute the errors for the test
    console.warn = () => {};
    const mockedFunction = jest.spyOn(console, 'warn');

    const config = {
      cloud:{
        'fakeKey': true,
        cloudName:'foo'
      },
      url: {
        'fakeKey': true,
      }
    };

    // @ts-ignore
    new CloudinaryConfig(config);

    // ensure expected result
    expect(mockedFunction).toHaveBeenCalledTimes(2);

    // Restore the globals
    mockedFunction.mockRestore();
    console.warn = error;
  });

  it('Will log errors when called directly with invalid types', () => {
    const error = console.warn;
    // mute the errors for the test
    console.warn = () => {};
    const mockedFunction = jest.spyOn(console, 'warn');


    // Configs expect objects as input, but we allow invalid types without throwing
    expect(() => {
      new CloudConfig('foo' as unknown);
    }).toThrow();

    expect(() => {
      new CloudConfig([] as unknown);
    }).toThrow();

    // Expect no warnings at all
    expect(mockedFunction).toHaveBeenCalledTimes(0);

    // Restore the globals
    mockedFunction.mockRestore();
    console.warn = error;
  });

  it('Can extend the configuration', () => {
    const conf = new CloudinaryConfig({
      cloud:{
        cloudName:'foo',
        apiSecret: 'abc'
      }
    });

    expect(conf.cloud.apiSecret).toBe('abc');

    const newConf = conf.extend({
      cloud: {
        apiKey: 'xyz',
        cloudName:'foo'
      }
    });

    expect(newConf.cloud.apiKey).toBe('xyz');
  });

  it('Should set secure to true by default', () => {
    const url = createNewImage('sample')
      .toURL();

    expect(url).toContain('https://');
  });

  it('should allow overriding cloudName in config', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName: 'foo'
      }
    });

    conf.cloud.cloudName = 'demo';

    expect(conf.cloud).toEqual({
      cloudName: 'demo'
    });
  });
});
