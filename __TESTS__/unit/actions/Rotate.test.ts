import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { Rotate } from "@cloudinary/transformation-builder-sdk/actions";
import { RotationMode } from "@cloudinary/transformation-builder-sdk/qualifiers";

describe('Tests for Transformation Action -- Rotate', () => {
  it('Creates a cloudinaryURL with Rotate', () => {
    const url = createNewImage('sample')
      .rotate(Rotate.mode(RotationMode.verticalFlip()))
      .toURL();

    expect(url).toContain( "https://demo.media.cloudinary.net/a_vflip/sample");
  });
});
