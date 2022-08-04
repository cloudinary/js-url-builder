import { Cloudinary } from '@cloudinary/url-builder';
import { Resize } from '@cloudinary/url-builder/actions/resize';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'test',
  }
});

const myImage = cld.image('sample');
myImage.resize(Resize.scale().width(100).height(100));

const myURL = myImage.toURL();
console.log(myURL);
