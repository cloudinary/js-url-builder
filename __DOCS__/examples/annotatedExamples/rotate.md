```javascript
import {Cloudinary} from "@cloudinary/url-builder/instance/Cloudinary";

const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    }
});


// Import the RotationModeAction
import {mode} from '@cloudinary/url-builder/actions/rotate';

// Remember, mode is a function that returns an Action
// but we refer to both as a RotationMode action

// The RotationModeAction (mode) requires a Qualifier
// That qualifier will require a certain QualifierValue
// To make life easier, you can import all possible QualifierValue(s) of rotate
import {RotationMode} from '@cloudinary/url-builder/qualifiers/rotationMode';

// You can also import only the required QualifierValue you want
import {verticalFlip} from '@cloudinary/url-builder/qualifiers/rotationMode';
// RotationMode.verticalFlip === verticalFlip

const myImage = cld.image('sample');

// rotate() accepts a RotationModeAction (mode)
// mode() has a Qualifier, however because that Qualifier is mandatory, we pass it directly to the factory
// We pass it verticalFlip() as a QualifierValue to flip the image vertically
// As you can see, QualifierValues are also functions
myImage.rotate(mode(verticalFlip()));

const myURL = myImage.toURL();
```
