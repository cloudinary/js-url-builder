import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {Resize} from "../../../src/actions/resize";
import {Rotate} from "../../../src/actions/rotate";


describe('Tests for URL configuration', () => {
  it('should disallow url_suffix with / or .', () => {
    const image = createNewImage('test');

    image.setSuffix('hello/world');
    expect(image.toURL.bind(image)).toThrow();

    image.setSuffix('hello.world');
    expect(image.toURL.bind(image)).toThrow();
  });

  it('should accept public_id with special characters', () => {
    const image = createNewImage('public%id');
    expect(image.toURL()).toEqual('https://demo.media.cloudinary.net/public%25id');
  });

  it('should not fail on falsy public_id', () => {
    const url = createNewImage(null)
      .toURL();
    expect(url).toEqual('');
  });

  it('Should support an external signature', () => {
    const image = createNewImage('sample');
    const signature = "some-signature";

    image.setSignature(signature);
    //image.signature(signature)
    image.resize(Resize.crop().width(100));
    const url = image.toURL();

    expect(url).toEqual(`https://demo.media.cloudinary.net/s--${signature}--/c_crop,w_100/sample`);
  });
});
