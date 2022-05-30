import {createNewVideo} from "../../TestUtils/createCloudinaryVideo";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { Flag } from "@cloudinary/transformation-builder-sdk/qualifiers/flag";


describe('Tests for Transformation Action -- Flag', () => {
  it('Creates a cloudinaryURL with image flags', () => {
    const url = createNewImage('sample')
      .addFlag(Flag.anyFormat())
      .setPublicID('sample')
      .toURL();
    expect(url).toBe(`https://demo.media.cloudinary.net/fl_any_format/sample`);
  });

  it('Creates a cloudinaryURL with video flags', () => {
    const url = createNewVideo('sample')
      .addFlag(Flag.hlsv3())
      .setPublicID('sample')
      .toURL();
    expect(url).toBe(`https://demo.media.cloudinary.net/fl_hlsv3/sample`);
  });
});
