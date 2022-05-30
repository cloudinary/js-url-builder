import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { Border, RoundCorners } from "@cloudinary/transformation-builder-sdk/actions";


describe('Tests for Transformation Action -- Border', () => {
  it('Creates a cloudinaryURL with border and color', () => {
    const url = createNewImage('sample')
      .border(Border.solid( 7, 'red'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/bo_7px_solid_red/sample');
  });
});
