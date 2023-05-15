import HeroSlider, { Slide, Overlay, MenuNav } from 'hero-slider';
import kyoto from '../../images/gallery/1 (13).jpeg';
import tenryuJiTemple from '../../images/gallery/1 (8).jpeg';
import hakone from '../../images/gallery/1 (9).jpeg';
import byodoInTemple from '../../images/gallery/1 (10).jpeg';

export default function NavbarSlider() {
  return (
    <HeroSlider
      height="100vh"
      accessability={{
        shouldDisplayButtons: false,
        orientation: 'vertical'
      }}
      autoplay
      controller={{
        slidingDuration: 400,
        slidingDelay: 100
      }}
    >
      <Overlay>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Kyoto - Japan"
        background={{
          backgroundImageSrc: kyoto
        }}
      />

      <Slide
        shouldRenderMask
        label="Tenryu-ji Temple - KyÅto-shi - Japan"
        background={{
          backgroundImageSrc: tenryuJiTemple
        }}
      />

      <Slide
        shouldRenderMask
        label="Hakone - Japan"
        background={{
          backgroundImageSrc: hakone
        }}
      />

      <Slide
        shouldRenderMask
        label="Byodo-In Temple - Kaneohe - United States"
        background={{
          backgroundImageSrc: byodoInTemple
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}