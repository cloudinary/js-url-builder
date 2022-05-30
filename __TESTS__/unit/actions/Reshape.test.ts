import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { image } from "@cloudinary/transformation-builder-sdk/qualifiers/source";
import { Reshape } from "@cloudinary/transformation-builder-sdk/actions/reshape";
import { scale } from "@cloudinary/transformation-builder-sdk/actions/resize";
import { Transformation } from "@cloudinary/transformation-builder-sdk/transformation/Transformation.js";

describe('Tests for Transformation Action -- Cutter', () => {
  it('Creates a cloudinaryURL with reshape', () => {
    const url = createNewImage('main')
      .reshape(Reshape.cutByImage(image('sourceImage').transformation(
        new Transformation().resize(scale().width(100))
      )))
      .toURL();

    expect(url).toContain('l_sourceImage/c_scale,w_100/fl_cutter,fl_layer_apply/main');
  });
});
