import {name} from "@cloudinary/transformation-builder-sdk/actions/namedTransformation";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";

describe('Tests for Transformation Action -- NamedTransformation', () => {
  it('Creates a cloudinaryURL with name that has an underscore', () => {
    const url = createNewImage('sample')
      .namedTransformation(name('_foobar'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/t__foobar/sample');
  });
});
