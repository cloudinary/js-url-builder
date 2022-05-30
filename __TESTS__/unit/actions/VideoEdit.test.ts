import {createNewVideo} from "../../TestUtils/createCloudinaryVideo";
import { Concatenate } from "@cloudinary/transformation-builder-sdk/qualifiers/concatenate";
import { VideoEdit } from "@cloudinary/transformation-builder-sdk/actions";

describe('Tests for Transformation Action -- VideoEdit', () => {
  it('Creates a cloudinaryURL with videoEdit', () => {
    const url = createNewVideo('sample')
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog")
        )
      )
      .toString();

    expect(url).toContain('fl_splice,l_video:dog/fl_layer_apply');
  });
});
