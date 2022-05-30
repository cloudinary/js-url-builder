import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { PSDTools } from "@cloudinary/transformation-builder-sdk/actions";

describe('Tests for Transformation Action -- PSDTools', () => {
  it('Creates a cloudinaryURL with clip number', () => {
    const url = createNewImage()
      .psdTools(PSDTools.clip().byIndex(9))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/fl_clip,pg_9/sample');
  });
});
