import {CloudinaryMedia} from "../../../src/assets/CloudinaryMedia";
import { Transcode, Underlay, VideoEdit } from "@cloudinary/transformation-builder-sdk/actions";
import { Source } from "@cloudinary/transformation-builder-sdk/qualifiers";

describe('Tests for CloudinaryMedia', () => {
  let cloudinaryMedia: CloudinaryMedia = null;
  beforeEach(() => {
    cloudinaryMedia = new CloudinaryMedia('sample', {cloudName: 'demo'});
  });

  it('Contains videoEdit', () => {
    const url = cloudinaryMedia.videoEdit(VideoEdit.trim().duration(10)).toURL();
    expect(url).toContain('du_10');
  });

  it('Contains transcode', () => {
    const url = cloudinaryMedia.transcode(Transcode.fps(15)).toURL();
    expect(url).toContain('fps_15');
  });

  it('Contains Underlay', () => {
    const url = cloudinaryMedia.underlay(Underlay.source(Source.image('woman'))).toURL();
    expect(url).toContain('u_woman');
  });
});

