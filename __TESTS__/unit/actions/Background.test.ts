import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { Color } from "@cloudinary/transformation-builder-sdk/qualifiers";

describe('Tests for Transformation Action -- Background', () => {
  it('Creates a cloudinaryURL with Background.auto', () => {
    const url = createNewImage('sample')
      .backgroundColor(Color.RED)
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/b_red/sample');
  });
});
