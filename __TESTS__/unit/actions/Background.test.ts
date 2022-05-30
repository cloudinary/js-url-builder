import {Color} from "../../../src/qualifiers/color";
import * as Resize from "../../../src/actions/resize";
import {
  auto,
  border,
  color,
  borderGradient,
  predominant,
  predominantGradient,
  blurred
} from "../../../src/qualifiers/background";
import {GradientDirection} from "../../../src/qualifiers/gradientDirection";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";


describe('Tests for Transformation Action -- Background', () => {
  it('Creates a cloudinaryURL with Background.auto', () => {
    const url = createNewImage('sample')
      .backgroundColor(Color.RED)
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/b_red/sample');
  });


  it('Background.border().contrast()', () => {
    const url = createNewImage('sample')
      .resize(Resize.pad(250, 250)
        .background(border().contrast())
      )
      .resize(Resize.pad(250, 250)
        .background(border())
      )
      .toURL();

    expect(url).toContain('b_auto:border_contrast,c_pad,h_250,w_250/b_auto:border,c_pad,h_250,w_250/sample');
  });

  it('Background.border().contrast().palette()', () => {
    const url = createNewImage('sample')
      .resize(Resize.pad(250, 250)
        .background(border().contrast().palette('red', 'green', 'blue'))
      )
      .toURL();

    expect(url).toContain('b_auto:border_contrast:palette_red_green_blue,c_pad,h_250,w_250/sample');
  });


  it('Background.auto()', () => {
    const url = createNewImage('sample')
      .resize(Resize.pad(250, 250)
        .background(auto())
      )
      .toURL();

    expect(url).toContain('b_auto,c_pad,h_250,w_250/sample');
  });

  it('Background.borderGradient().gradientDirection().gradientColors()', () => {
    const url = createNewImage('sample')
      .resize(Resize.pad(250, 250)
        .background(borderGradient()
          .gradientDirection(GradientDirection.horizontal())
          .gradientColors(2)
          .contrast()
          .palette('red', 'green', 'blue')
        )
      )
      .resize(Resize.pad(250, 250)
        .background(borderGradient()
        )
      )
      .toURL();

    expect(url).toContain('b_auto:border_gradient_contrast:2:horizontal:palette_red_green_blue,c_pad,h_250,w_250/b_auto:border_gradient,c_pad,h_250,w_250/sample');
  });

  it('can use shortened GradientDirection notation', () => {
    const url = createNewImage('sample')
      .resize(Resize.pad(250, 250)
        .background(borderGradient()
          .gradientDirection("horizontal")
        )
      )
      .toURL();

    expect(url).toContain('b_auto:border_gradient:horizontal,c_pad,h_250,w_250/sample');
  });

  it('Background.predominantGradient().gradientDirection().gradientColors()', () => {
    const url = createNewImage('sample')
      .resize(Resize.pad(250, 250)
        .background(predominantGradient()
          .gradientDirection(GradientDirection.horizontal())
          .gradientColors(2)
          .contrast()
          .palette('red', 'green', 'blue')
        )
      )
      .resize(Resize.pad(250, 250)
        .background(predominantGradient())
      )
      .toURL();

    expect(url).toContain('b_auto:predominant_gradient_contrast:2:horizontal:palette_red_green_blue,c_pad,h_250,w_250/b_auto:predominant_gradient,c_pad,h_250,w_250/sample');
  });


  it('Background.Color()', () => {
    const url = createNewImage('sample')
      .resize(Resize.pad(250, 250)
        .background(color('red'))
      )
      .toURL();

    expect(url).toBe('https://demo.media.cloudinary.net/b_red,c_pad,h_250,w_250/sample');
  });

  it('Background.predominant().contrast().palette()', () => {
    const url = createNewImage('sample')
      .resize(Resize.pad(250, 250)
        .background(predominant().contrast().palette('red', 'green', 'blue'))
      )
      .resize(Resize.pad(250, 250)
        .background(predominant())
      )
      .toURL();

    expect(url).toContain('b_auto:predominant_contrast:palette_red_green_blue,c_pad,h_250,w_250/b_auto:predominant,c_pad,h_250,w_250/sample');
  });


  it('Test blurred background', () => {
    const url = createNewImage('sample')
      .resize(Resize.pad(250, 250)
        .background(blurred())
      )
      .toURL();

    expect(url).toContain('b_blurred');
  });

  it('Test blurred background with one qualifiers', () => {
    const url = createNewImage('sample')
      .resize(Resize.pad(250, 250)
        .background(blurred().intensity(100).brightness(100))
      )
      .toURL();

    expect(url).toContain('b_blurred:100:100');
  });
});
