import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import TrackRecord from "../components/features/TwoColSingleFeatureWithStats2.js";
import Hero from "../components/hero/BackgroundAsImage.js";
import Features from "../components/features/ThreeColSimple.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import FAQ from "../components/faqs/SingleCol.js";
import Testimonial from "../components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "../components/footers/MiniCenteredFooter.js";

import chefIconImageSrc from "../images/chef-icon.svg";
import celebrationIconImageSrc from "../images/celebration-icon.svg";
import shopIconImageSrc from "../images/shop-icon.svg";

const Home = () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  return (
    <AnimationRevealPage>
      <Hero />
      <TrackRecord />
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>works.</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Lorem ipsum ",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Lorem ipsum",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Lorem ipsum",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
};

export default Home;
