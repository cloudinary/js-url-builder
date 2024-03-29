// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Cloudinary } = require('@cloudinary/url-builder/index');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Resize } = require('@cloudinary/url-builder/actions/resize');

const cld = new Cloudinary({
  cloud: {
    cloudName: 'test',
  }
});

const myImage = cld.image('sample');
myImage.resize(Resize.scale().width(100).height(100));

const myURL = myImage.toURL();
