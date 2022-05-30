import {Format} from "../../../src/qualifiers/format";
import {Quality} from "../../../src/qualifiers/quality";
import {ColorSpace} from "../../../src/qualifiers/colorSpace";
import {Dpr} from "../../../src/qualifiers/dpr";
import {Delivery} from "../../../src/actions/delivery";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {Progressive} from "../../../src/qualifiers/progressive";


const {format} = Delivery;

describe('Tests for Transformation Action -- Delivery', () => {
  it('Ensure namespace is correctly populated', () => {
    expect(Delivery.format).toEqual(format);
  });

  it('Creates a cloudinaryURL with format using string', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.format(Format.auto()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_auto/sample');
  });

  it('Creates a cloudinaryURL with quality alias', () => {
    const url = createNewImage('sample')
      .quality('auto')
      .toURL();
    expect(url).toBe('https://demo.media.cloudinary.net/q_auto/sample');
  });

  it('Creates a cloudinaryURL with format alias', () => {
    const url = createNewImage('sample')
      .format('gif')
      .toURL();
    expect(url).toBe('https://demo.media.cloudinary.net/f_gif/sample');
  });

  it('Creates a cloudinaryURL with Format', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.gif()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_gif/sample');
  });

  it('Creates a cloudinaryURL with gif.lossy()', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.gif()).lossy())
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_gif,fl_lossy/sample');
  });

  it('Creates a cloudinaryURL with auto.lossy()', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.auto()).lossy())
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_auto,fl_lossy/sample');
  });

  it('Creates a cloudinaryURL with jpg.progressive()', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.jpg()).progressive())
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_jpg,fl_progressive/sample');
  });

  it('Creates a cloudinaryURL with png', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.png()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_png/sample');
  });

  it('Creates a cloudinaryURL with bmp', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.bmp()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_bmp/sample');
  });

  it('Creates a cloudinaryURL with ico', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.ico()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_ico/sample');
  });

  it('Creates a cloudinaryURL with pdf', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.pdf()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_pdf/sample');
  });

  it('Creates a cloudinaryURL with eps', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.eps()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_eps/sample');
  });

  it('Creates a cloudinaryURL with tiff', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.tiff()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_tiff/sample');
  });

  it('Creates a cloudinaryURL with webp', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.webp()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_webp/sample');
  });

  it('Creates a cloudinaryURL with psd', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.psd()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_psd/sample');
  });

  it('Creates a cloudinaryURL with jpc', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.jpc()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_jpc/sample');
  });

  it('Creates a cloudinaryURL with wdp', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.wdp()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_wdp/sample');
  });

  it('Creates a cloudinaryURL with webp', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.webp()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_webp/sample');
  });


  it('Creates a cloudinaryURL with svg', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.svg()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_svg/sample');
  });

  it('Creates a cloudinaryURL with heic', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.heic()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_heic/sample');
  });

  it('Creates a cloudinaryURL with flif', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.flif()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_flif/sample');
  });

  it('Creates a cloudinaryURL with ai', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.ai()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_ai/sample');
  });

  it('Creates a cloudinaryURL with jp2', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.jp2()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/f_jp2/sample');
  });

  it('Creates a cloudinaryURL with Delivery.dpr', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.dpr('2.0'))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/dpr_2.0/sample');
  });

  it('Creates a cloudinaryURL with Delivery.dpr', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.dpr(Dpr.auto()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/dpr_auto/sample');
  });

  it('Creates a cloudinaryURL with Delivery.quality', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality('80'))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/q_80/sample');
  });

  it('Creates a cloudinaryURL with Delivery.quality.auto()', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality(Quality.auto()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/q_auto/sample');
  });

  it('Can use shortened quality notation', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality('auto:best'))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/q_auto:best/sample');
  });

  it('Creates a cloudinaryURL with Delivery.density', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.density(150))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/dn_150/sample');
  });

  it('Creates a cloudinaryURL with Delivery.defaultImage', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.defaultImage('default'))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/d_default/sample');
  });

  it('Creates a cloudinaryURL with Delivery.colorspace', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.colorSpace(ColorSpace.noCmyk()))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/cs_no_cmyk/sample');
  });

  it('Creates a cloudinaryURL with shortened ColorSpaceType', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.colorSpace("no_cmyk"))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/cs_no_cmyk/sample');
  });

  it('Creates a cloudinaryURL with Delivery.ColorSpaceFromICC', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.colorSpaceFromICC('sample'))
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/cs_icc:sample/sample');
  });

  it('Created delivery formats with progressive', () => {
    // f_jpg,fl_progressive
    const url = createNewImage('sample').delivery(
      Delivery.format(Format.jpg()).progressive(Progressive.progressive())
    ).toString();

    expect(url).toContain('f_jpg,fl_progressive');
  });



  it('Created delivery formats with progressive', () => {
    // f_jpg,fl_progressive
    const url = createNewImage('sample').delivery(
      Delivery.format(Format.jpg()).progressive()
    ).toString();

    expect(url).toContain('f_jpg,fl_progressive');
  });

  it('Created delivery formats with progressive:semi', () => {
    // f_jpg,fl_progressive
    const url = createNewImage('sample').delivery(
      Delivery.format(Format.jpg()).progressive(Progressive.semi())
    ).toString();

    expect(url).toContain('f_jpg,fl_progressive:semi');
  });

  it('Can use shortened progressive:semi notation', () => {
    // f_jpg,fl_progressive
    const url = createNewImage('sample').delivery(
      Delivery.format(Format.jpg()).progressive("semi")
    ).toString();

    expect(url).toContain('f_jpg,fl_progressive:semi');
  });

  it('Created delivery formats with progressive:steep', () => {
    // f_jpg,fl_progressive
    const url = createNewImage('sample').delivery(
      Delivery.format(Format.jpg()).progressive(Progressive.steep())
    ).toString();

    expect(url).toContain('f_jpg,fl_progressive:steep');
  });

  it('Created delivery formats with progressive:none', () => {
    // f_jpg,fl_progressive
    const url = createNewImage('sample').delivery(
      Delivery.format(Format.jpg()).progressive(Progressive.none())
    ).toString();

    expect(url).toContain('f_jpg,fl_progressive:none');
  });

  it('Created delivery formats with progressive:none as a string', () => {
    // f_jpg,fl_progressive
    const url = createNewImage('sample').delivery(
      Delivery.format(Format.jpg()).progressive('none')
    ).toString();

    expect(url).toContain('f_jpg,fl_progressive:none');
  });

  it('Can use shortened format notation', () => {
    // f_jpg,fl_progressive
    const url = createNewImage('sample').delivery(format('jpg')).toString();

    expect(url).toContain('f_jpg');
  });
});
