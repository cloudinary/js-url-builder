import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { Variable } from "@cloudinary/transformation-builder-sdk/actions/variable";

const {set} = Variable;

describe('Tests for Transformation Action -- Variable', () => {
  it('Creates a cloudinaryURL with number variable', () => {
    const url = createNewImage('sample')
      .addVariable(set('a', 30))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/$a_30/sample');
  });
});
