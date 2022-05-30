import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import { CustomFunction } from "@cloudinary/transformation-builder-sdk/actions";


describe('Tests for Transformation Action -- NamedTransformation', () => {
  it ('Creates a cloudinaryURL with wasm', () => {
    const url = createNewImage('sample')
      .customFunction(CustomFunction.wasm('my/example.wasm')).toURL();

    expect(url).toContain('fn_wasm:my:example.wasm');
  });
});
