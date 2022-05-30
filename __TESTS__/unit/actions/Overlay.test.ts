import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { Format, Source } from "@cloudinary/transformation-builder-sdk/qualifiers";
import { Overlay } from "@cloudinary/transformation-builder-sdk/actions";

describe("Tests for overlay actions", () => {
  it("Creates a cloudinaryURL with overlay", () => {
    const asset = createNewImage();
    asset.overlay(
      Overlay.source(Source.image("sample")
        .format(Format.png())
      )
    ).setPublicID("sample");

    expect(asset.toURL()).toBe("https://demo.media.cloudinary.net/l_sample.png/fl_layer_apply/sample");
  });
});
