import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { Extract } from "@cloudinary/transformation-builder-sdk/actions/extract";

describe('Tests for Transformation Action -- Extract', () => {
  it('Creates a cloudinaryURL with extract', () => {
    const url = createNewImage('sample')
      .extract(Extract.getFrame().byNumber(4))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/pg_4/sample');
  });
});
