import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/light.js";
import Features from "../components/features/ThreeColSimple.js";
import FAQ from "../components/faqs/SingleCol.js";
import MainFeature1 from "../components/features/TwoColWithButton.js";
import Hero from "../components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import Footer from "../components/footers/MiniCenteredFooter.js";

import integrityIconImageSrc from "../images/integrity.png";
import humanityIconImageSrc from "../images/humanity.png";
import transparencyIconImageSrc from "../images/transparency.png";
import accountabilityIconImageSrc from "../images/accountability.png";
import passionIconImageSrc from "../images/passion.png";
import VisionImageSrc from "../images/gallery/22.jpeg";
import MissionImageSrc from "../images/gallery/11.jpeg";
import gallery from "../images/gallery/index.js";

const Home = () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

  return (
    <AnimationRevealPage>
      <Header />
      <Hero textOnLeft={true} testimonials={gallery} />
      <MainFeature1
        showSideDecorator={true}
        id="mission"
        heading={
          <>
            OUR <HighlightedText>MISSION</HighlightedText>
          </>
        }
        description="To support, protect and advocate for children, youth, adolescent girls and young women’s rights and works to improve their lives through education, counseling, capacity building, socio-economic empowerment and advocacy to ensure a healthy and purposeful life."
        buttonRounded={false}
        imageSrc={MissionImageSrc}
        textOnLeft={true}
        imageDecoratorBlob={true}
      />
      <MainFeature1
        id="vision"
        heading={
          <>
            OUR <HighlightedText>VISION</HighlightedText>
          </>
        }
        description="A society where children, youth, adolescent and young women have a health, purposeful and dignified lives, actively engaged in communities and economically empowered."
        buttonRounded={false}
        imageSrc={VisionImageSrc}
        imageDecoratorBlob={true}
        textOnLeft={false}
      />
      <Features
        id="values"
        heading={
          <>
            OUR <HighlightedText>VALUES</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: passionIconImageSrc,
            title: "Passion",
            description:
              "Passion drives us to excel, innovate, and make a difference.",
          },
          {
            imageSrc: transparencyIconImageSrc,
            title: "Transparency",
            description:
              "Transparency is the cornerstone of our initiative, fostering trust and integrity.",
          },
          {
            imageSrc: accountabilityIconImageSrc,
            title: "Accountability",
            description:
              "Accountability fuels our initiative, driving us towards success and excellence.",
          },
          {
            imageSrc: integrityIconImageSrc,
            title: "Integrity",
            description:
              "Integrity is our compass, guiding us towards ethical decisions and actions.",
          },
          {
            imageSrc: humanityIconImageSrc,
            title: "Humanity",
            description:
              "Humanity, the beacon of compassion and unity, binds us all.",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <FAQ id="what_we_do" />
      <Footer />
    </AnimationRevealPage>
  );
};

export default Home;
