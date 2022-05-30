import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { Adjust } from "@cloudinary/transformation-builder-sdk/actions";

describe('Tests for Transformation Action -- Adjust', () => {
  it('Creates a cloudinaryURL with adjust', () => {
    const url = createNewImage('sample')
      .adjust(Adjust.autoBrightness()).toURL();
    expect(url).toBe(`https://demo.media.cloudinary.net/e_auto_brightness/sample`);
  });
});
