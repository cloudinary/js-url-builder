import { createNewImage } from "../../TestUtils/createCloudinaryImage";
import { Resize } from "@cloudinary/transformation-builder-sdk/actions";

describe('Tests for Transformation Action -- Resize', () => {
  it('Creates a cloudinaryURL with Resize', () => {
    const url = createNewImage('sample')
      .resize(Resize.scale(400))
      .toURL();
    expect(url).toBe('https://demo.media.cloudinary.net/c_scale,w_400/sample');
  });
});
