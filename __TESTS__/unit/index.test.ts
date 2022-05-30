import {
  CloudConfig,
  CloudinaryImage,
  CloudinaryVideo,
  Cloudinary,
  CloudinaryConfig,
  URLConfig
} from '../../src/index';

describe('Ensures index exports correctly', () => {
  it('Exports correctly', () => {
    expect(CloudinaryImage).toBeDefined();
    expect(CloudinaryVideo).toBeDefined();
    expect(Cloudinary).toBeDefined();
    expect(CloudConfig).toBeDefined();
    expect(URLConfig).toBeDefined();
    expect(CloudinaryConfig).toBeDefined();
  });
});
