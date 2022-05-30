import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { Effect } from "@cloudinary/transformation-builder-sdk/actions/effect";

describe('Tests for Transformation Action -- Effect', () => {
  it('Creates a cloudinaryURL with effect', () => {
    const url = createNewImage('sample')
      .effect(Effect.blur())
      .toURL();

    expect(url).toBe(`https://demo.media.cloudinary.net/e_blur/sample`);
  });
});
