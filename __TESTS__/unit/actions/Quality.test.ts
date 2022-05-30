import {createNewImage} from "../../TestUtils/createCloudinaryImage";

describe('Tests for Transformation Action -- quality alias', () => {
  it('Creates a cloudinaryURL with quality alias', () => {
    const url = createNewImage('sample')
      .quality('auto')
      .toURL();
    expect(url).toBe('https://demo.media.cloudinary.net/q_auto/sample');
  });
});
