import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/light.js";
import Features from "../components/features/ThreeColSimple.js";
import FAQ from "../components/faqs/SingleCol.js";
import MainFeature from "../components/features/TwoColWithButton.js";
import Hero from "../components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import Footer from "../components/footers/FiveColumnDark.js";

import integrityIconImageSrc from "../images/integrity.png";
import humanityIconImageSrc from "../images/humanity.png";
import transparencyIconImageSrc from "../images/transparency.png";
import accountabilityIconImageSrc from "../images/accountability.png";
import passionIconImageSrc from "../images/passion.png";
import VisionImageSrc from "../images/gallery/e.jpeg";
import MissionImageSrc from "../images/gallery/b.jpeg";
import AboutImageSrc from "../images/gallery/a.jpeg";
import gallery from "../images/gallery/index.js";

const Home = () => {
  const HighlightedText = tw.span`bg-nsanga-blue text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const RedText = tw.span`text-nsanga-red`;
  return (
    <AnimationRevealPage>
      <Header />
      <Hero textOnLeft={true} testimonials={gallery} />
      <MainFeature
        showSideDecorator={true}
        id="who_we_are"
        subHeading="WHO WE ARE"
        heading={
          <>
            <RedText>WHO</RedText> <HighlightedText>WE ARE</HighlightedText>
          </>
        }
        description="A Rwandan non-governmental organization. It has been established in 2022 and is registered at Rwanda Governance Board (RGB) with Operational Certificate number 1200/ RGB /NGO/OC/03/2023."
        buttonRounded={false}
        imageSrc={AboutImageSrc}
        textOnLeft={true}
        imageDecoratorBlob={true}
      />
      <MainFeature
        showSideDecorator={true}
        id="mission"
        heading={
          <>
            <RedText>OUR</RedText> <HighlightedText>MISSION</HighlightedText>
          </>
        }
        description="To support, protect and advocate for children, youth, adolescent girls and young women’s rights and works to improve their lives through education, counseling, capacity building, socio-economic empowerment and advocacy to ensure a healthy and purposeful life."
        buttonRounded={false}
        imageSrc={MissionImageSrc}
        textOnLeft={false}
        imageDecoratorBlob={true}
      />
      <MainFeature
        id="vision"
        heading={
          <>
            <RedText>OUR</RedText> <HighlightedText>VISION</HighlightedText>
          </>
        }
        description="A society where children, youth, adolescent and young women have a health, purposeful and dignified lives, actively engaged in communities and economically empowered."
        buttonRounded={false}
        imageSrc={VisionImageSrc}
        imageDecoratorBlob={true}
        textOnLeft={true}
        grayBg={true}
      />
      <Features
        id="values"
        heading={
          <>
            <RedText>OUR</RedText> <HighlightedText>VALUES</HighlightedText>
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
