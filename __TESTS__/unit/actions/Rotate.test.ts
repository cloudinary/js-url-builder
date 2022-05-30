import * as Rotate from '../../../src/actions/rotate';
import * as RotationMode from "../../../src/qualifiers/rotationMode";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";



describe('Tests for Transformation Action -- Rotate', () => {
  it('Creates a cloudinaryURL with Rotate', () => {
    const url = createNewImage('sample')
      .rotate(Rotate.mode(RotationMode.verticalFlip()))
      .rotate(Rotate.mode(RotationMode.horizontalFlip()))
      .rotate(Rotate.mode(RotationMode.autoLeft()))
      .rotate(Rotate.mode(RotationMode.autoRight()))
      .rotate(Rotate.mode(RotationMode.ignore()))
      .rotate(Rotate.byAngle(40))
      .toURL();

    expect(url).toContain('/a_vflip/a_hflip/a_auto_left/a_auto_right/a_ignore/a_40/');
  });

  it('Can use shortened Rotate notation', () => {
    const url = createNewImage('sample')
      .rotate(Rotate.mode("hflip"))
      .rotate(Rotate.byAngle(40))
      .toURL();

    expect(url).toContain('a_hflip/a_40/');
  });
});
