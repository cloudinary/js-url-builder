import {
  FontHinting,
  FontStyle,
  FontWeight,
  TextAlignment,
  TextDecoration
} from "@cloudinary/transformation-builder-sdk/qualifiers";
import { TextStyle } from "@cloudinary/transformation-builder-sdk/qualifiers/textStyle";
import { FontAntialias } from "@cloudinary/transformation-builder-sdk/qualifiers/FontAntialias";

/**
  * Creates a TextStyle instance used for testing
  */
function sampleTextStyle(): TextStyle {
  return new TextStyle('arial', 50)
    .letterSpacing(10)
    .lineSpacing(20)
    .fontAntialias(FontAntialias.good())
    .fontWeight(FontWeight.bold())
    .fontHinting(FontHinting.full())
    .textDecoration(TextDecoration.strikethrough())
    .textAlignment(TextAlignment.justify())
    .stroke()
    .fontStyle(FontStyle.italic()
    );
}


export {sampleTextStyle};
