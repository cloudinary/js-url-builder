import {sampleTextStyle} from "../../TestUtils/transformations/sampleTextStyle";
import {sampleEmptyTextStyle} from "../../TestUtils/transformations/sampleEmptyTextStyle";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { image, subtitles, text, video } from "@cloudinary/transformation-builder-sdk/qualifiers/source";
import { Variable } from "@cloudinary/transformation-builder-sdk/actions/variable";
import { Overlay } from "@cloudinary/transformation-builder-sdk/actions";
import { Flag } from "@cloudinary/transformation-builder-sdk/qualifiers/flag";
import { Transformation } from "@cloudinary/transformation-builder-sdk/transformation/Transformation.js";



describe('Tests for Encoding the URL', () => {
  it('Should serialize, but not encode, when calling toString', () => {
    const str = createNewImage()
      .overlay(Overlay.source(text('he llo', sampleTextStyle())))
      .toString();
    expect(str).toBe(`l_text:${sampleTextStyle()}:he llo/fl_layer_apply`);
  });

  it('Should encode cloudinary characters (",") in a publicID', () => {
    const url = createNewImage('sam,ple')
      .toURL();
    expect(url).toBe('https://demo.media.cloudinary.net/sam%252Cple');
  });

  it('Does not mutate valid / in publicID', () => {
    const url = createNewImage('folder/name')
      .toURL();
    expect(url).toBe('https://demo.media.cloudinary.net/v1/folder/name');
  });

  it('Should encode regular text in a textLayer', () => {
    const url = createNewImage('sample')
      .overlay(Overlay.source(text('he llo', sampleEmptyTextStyle())))
      .toURL();

    expect(url)
      // Space encoded correctly to %20
      .toBe('https://demo.media.cloudinary.net/l_text:arial_50:he%20llo/fl_layer_apply/sample');
  });

  it('Should encode font name in textOverlay', () => {
    const cldImage = createNewImage('sample')
      .overlay(Overlay.source(text('he llo', sampleEmptyTextStyle('roboto condensed'))));

    expect(cldImage.toString())
      // Correctly serialize the cloudinary control characters
      .toBe('l_text:roboto condensed_50:he llo/fl_layer_apply');

    expect(cldImage.toURL())
      // Space encoded correctly to %20
      .toBe('https://demo.media.cloudinary.net/l_text:roboto%20condensed_50:he%20llo/fl_layer_apply/sample');
  });

  it('Should encode cloudinary characters ("/,") in the text of a textLayer', () => {
    const cldImage = createNewImage('sample')
      .overlay(Overlay.source(text('he,/ llo', sampleEmptyTextStyle())));

    // Correctly serialize the cloudinary control characters
    expect(cldImage.toString()).toBe('l_text:arial_50:he%2C%2F llo/fl_layer_apply');

    // Add URL encoding on top of serialization
    expect(cldImage.toURL()).toBe('https://demo.media.cloudinary.net/l_text:arial_50:he%252C%252F%20llo/fl_layer_apply/sample');
  });

  it('Should encode a space in publicID', () => {
    const url = createNewImage('sa mple')
      .toURL();

    expect(url)
      .toBe('https://demo.media.cloudinary.net/sa%20mple');
  });

  it('should serialize nested texts correctly (text inside an image inside an image)', () => {
    const cldImage = createNewImage('woman')
      .overlay(Overlay.source(
        image('sample')
          .transformation(
            new Transformation().overlay(
              Overlay.source(text('he,/llo', sampleEmptyTextStyle()))
            )
          )
      ));

    expect(cldImage.toString())
      .toBe(`l_sample/l_text:arial_50:he%2C%2Fllo/fl_layer_apply/fl_layer_apply`);

    expect(cldImage.toURL())
      .toBe(`https://demo.media.cloudinary.net/l_sample/l_text:arial_50:he%252C%252Fllo/fl_layer_apply/fl_layer_apply/woman`);
  });

  it('Should correctly encode a path of a subtitle with /', () => {
    const cldImage = createNewImage('woman')
      .overlay(Overlay.source(
        subtitles('my/path')
      ));

    expect(cldImage.toString())
      .toBe(`l_subtitles:my:path/fl_layer_apply`);
  });

  it('Should correctly encode a path of an image with /', () => {
    const cldImage = createNewImage('woman')
      .overlay(Overlay.source(
        image('my/path')
      ));

    expect(cldImage.toString())
      .toBe(`l_my:path/fl_layer_apply`);
  });

  it('Should correctly encode a path of an video with /', () => {
    const cldImage = createNewImage('woman')
      .overlay(Overlay.source(
        video('my/path')
      ));

    expect(cldImage.toString())
      .toBe(`l_video:my:path/fl_layer_apply`);
  });

  it('Correctly encode variables', () => {
    const cldImage = createNewImage('woman')
      .addVariable(Variable.set('foo', 'some,,, amazing/text!!'));

    expect(cldImage.toString()).toBe('$foo_!some%2C%2C%2C amazing%2Ftext%21%21!');
  });

  it('Correctly encode variable references', () => {
    const cldImage = createNewImage('woman')
      .addVariable(Variable.setAssetReference('foo', 'path/to/image'));

    expect(cldImage.toString()).toBe('$foo_ref:!path:to:image!');
  });

  it('Encode flags with dots', () => {
    // fl_streaming_attachment:my_streaming_video.mp4
    const cldImage = createNewImage('woman')
      .addFlag(Flag.streamingAttachment('my_streaming_video.mp4'));

    expect(cldImage.toString()).toBe('fl_streaming_attachment:my_streaming_video%2Emp4');
  });
});
