```javascript
// Import the cloudinary class
import {Cloudinary} from "@cloudinary/url-builder/instance/Cloudinary";

// Create your instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo'
  }
});

// Lets create a new image
const myImage = cld.image('sample');

// An overlay is built from several parts
// Import video or image overlay, based on your asset
import {Overlay} from "@cloudinary/url-builder/actions/overlay";
// Import the source of the layer, this determines if the layer is an image, text or video
import {image} from "@cloudinary/url-builder/qualifiers/source";

// Import how to position your layer
import {Position} from "@cloudinary/url-builder/qualifiers/position";
import {southEast} from "@cloudinary/url-builder/qualifiers/compass";
import {compass} from "@cloudinary/url-builder/qualifiers/gravity";

// We'll also scale our overlay, we'll need this for later.
import {scale} from "@cloudinary/url-builder/actions/resize";
import {Transformation} from "@cloudinary/url-builder/transformation/Transformation";


myImage.overlay(
  Overlay.source( // An overlay has a Source and a Position Qualifiers
    image('cloudinary_icon') // Mandatory - Source
      .transformation(new Transformation()
        .resize(scale().width(300).height(300)) // A source can be transformed like an image
      ))
    .position(new Position().gravity(compass(southEast()))
    ),
)
myImage.toURL();
// http://res.cloudinary.com/demo/image/upload/l_cloudinary_icon/c_scale,h_300,w_300/fl_layer_apply,g_south_east/sample
```
