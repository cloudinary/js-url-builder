import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { byRadius } from "@cloudinary/transformation-builder-sdk/actions/roundCorners";

describe('Tests for Transformation Action -- RoundCorners', () => {
  it('Creates a cloudinaryURL with roundCorners', () => {
    const url = createNewImage('sample')
      .roundCorners(byRadius(25))
      .toURL();
    expect(url).toContain('r_25');
  });
});
