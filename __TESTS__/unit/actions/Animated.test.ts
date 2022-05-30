import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { Animated } from "@cloudinary/transformation-builder-sdk/actions";

describe('Tests for Transformation Action -- Animated', () => {
  it('Creates a cloudinaryURL with animated', () => {
    const url = createNewImage('sample')
      .animated(Animated.edit().delay(200).loop(3))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/dl_200,e_loop:3/sample');
  });
});
