import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { Format } from "@cloudinary/transformation-builder-sdk/qualifiers";
import { Delivery } from "@cloudinary/transformation-builder-sdk/actions";

describe('Tests for Transformation Action -- Delivery', () => {
  it('Creates a cloudinaryURL with format alias', () => {
    const url = createNewImage('sample')
      .format('gif')
      .toURL();
    expect(url).toBe('https://demo.media.cloudinary.net/f_gif/sample');
  });

  it('Creates a cloudinaryURL with format using string', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.format(Format.auto()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_auto/sample');
  });
});
