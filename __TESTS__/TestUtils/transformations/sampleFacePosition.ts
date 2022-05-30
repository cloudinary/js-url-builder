import { Gravity, Position } from "@cloudinary/transformation-builder-sdk/qualifiers";
import { FocusOn } from "@cloudinary/transformation-builder-sdk/qualifiers/focusOn";

/**
 * sample action used for testing
 */
function sampleFacePosition(): Position {
  return new Position().gravity(Gravity.focusOn(FocusOn.face()));
}

export {sampleFacePosition};
