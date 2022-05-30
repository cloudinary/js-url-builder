import { TextStyle } from "@cloudinary/transformation-builder-sdk/qualifiers/textStyle";

/**
 * Creates an empty TextStyle instance used for testing
 */ function sampleEmptyTextStyle(fontFamily = 'arial', fontSize = 50): TextStyle {
  return new TextStyle(fontFamily, fontSize);
}


export {sampleEmptyTextStyle};
