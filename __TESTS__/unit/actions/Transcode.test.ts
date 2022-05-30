import {createNewVideo} from "../../TestUtils/createCloudinaryVideo";
import { Transcode } from "@cloudinary/transformation-builder-sdk/actions";
import { AudioCodec } from "@cloudinary/transformation-builder-sdk/qualifiers";

describe('Tests for Transformation Action -- Transcode', () => {
  it('Creates a cloudinaryURL with transcode', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode.audioCodec(AudioCodec.aac()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/ac_aac/sample');
  });
});
