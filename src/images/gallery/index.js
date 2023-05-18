import tw from "twin.macro";
import Image0 from "./22.jpeg";
import Image1 from "./1 (10).jpeg";
import Image2 from "./1 (15).jpeg";
import Image3 from "./1 (13).jpeg";
import Image4 from "./1 (17).jpeg";
import Image5 from "./1 (18).jpeg";
import Image6 from "./1 (19).jpeg";

const HighlightedText = tw.span`bg-nsanga-blue text-gray-100 px-4 transform -skew-x-12 inline-block`;
const RedText = tw.span`text-red-500`;

const gallery = [
  {
    imageSrc: Image0,
    title: (
      <>
        <RedText>WHO</RedText> <HighlightedText>WE ARE</HighlightedText>
      </>
    ),
    description:
      "A Rwandan non-governmental organization. It has been established in 2022 and is registered at Rwanda Governance Board (RGB) with Operational Certificate number 1200/ RGB /NGO/OC/03/2023.",
  },
  {
    imageSrc: Image1,
    title: (
      <>
        <RedText>OUR</RedText> <HighlightedText>MISSION</HighlightedText>
      </>
    ),
    description:
      "To support, protect and advocate for children, youth, adolescent girls and young women’s rights and works to improve their lives through education, counseling, capacity building, socio-economic empowerment and advocacy to ensure a healthy and purposeful life.",
  },
  {
    imageSrc: Image2,
    title: (
      <>
        <RedText>WHO</RedText> <HighlightedText>WE ARE</HighlightedText>
      </>
    ),
    description:
      "A Rwandan non-governmental organization. It has been established in 2022 and is registered at Rwanda Governance Board (RGB) with Operational Certificate number 1200/ RGB /NGO/OC/03/2023.",
  },
  {
    imageSrc: Image3,
    title: (
      <>
        <RedText>OUR</RedText> <HighlightedText>MISSION</HighlightedText>
      </>
    ),
    description:
      "To support, protect and advocate for children, youth, adolescent girls and young women’s rights and works to improve their lives through education, counseling, capacity building, socio-economic empowerment and advocacy to ensure a healthy and purposeful life.",
  },
  {
    imageSrc: Image4,
    title: (
      <>
        <RedText>OUR</RedText> <HighlightedText>MISSION</HighlightedText>
      </>
    ),
    description:
      "To support, protect and advocate for children, youth, adolescent girls and young women’s rights and works to improve their lives through education, counseling, capacity building, socio-economic empowerment and advocacy to ensure a healthy and purposeful life.",
  },
  {
    imageSrc: Image5,
    title: (
      <>
        <RedText>OUR</RedText> <HighlightedText>VISION</HighlightedText>
      </>
    ),
    description:
      "A society where children, youth, adolescent and young women have a health, purposeful and dignified lives, actively engaged in communities and economically empowered.",
  },
  {
    imageSrc: Image6,
    title: (
      <>
        <RedText>OUR</RedText> <HighlightedText>MISSION</HighlightedText>
      </>
    ),
    description:
      "To support, protect and advocate for children, youth, adolescent girls and young women’s rights and works to improve their lives through education, counseling, capacity building, socio-economic empowerment and advocacy to ensure a healthy and purposeful life.",
  },
];

export default gallery;
