import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { Conditional } from "@cloudinary/transformation-builder-sdk/actions/conditional";
import { Transformation } from "@cloudinary/transformation-builder-sdk/transformation/Transformation.js";

describe('Tests for Transformation Action -- Conditional', () => {
  it('Creates a conditional transformation', () => {
    const tx = createNewImage().conditional(
      Conditional.ifCondition('ar >= 1.0', new Transformation().addAction('w_100'))
    ).setPublicID('sample')
      .toURL();
    // Ensures it compiles and doesn't throw
    expect(tx).toEqual("https://demo.media.cloudinary.net/if_ar_gte_1.0/w_100/if_end/sample");
  });

});
