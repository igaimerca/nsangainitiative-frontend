import tw from "twin.macro";
import Image0 from "./b.jpeg";
import Image1 from "./a.jpeg";
import Image2 from "./c.jpeg";
import Image3 from "./d.jpeg";
import Image4 from "./j.jpeg";
import Image5 from "./f.jpeg";
import Image6 from "./g.jpeg";
import Image7 from "./h.jpeg";
import Image8 from "./k.jpeg";

const HighlightedText = tw.span`bg-nsanga-blue text-gray-100 px-4 transform -skew-x-12 inline-block`;
const RedText = tw.span`text-red-500`;

const gallery = [
  {
    imageSrc: Image0,
    subTitle: "Who we are",
    title: "NSANGA Initiative",
    description:
      "A Rwandan non-governmental organization. It has been established in 2022 and is registered at Rwanda Governance Board (RGB) with Operational Certificate number 1200/ RGB /NGO/OC/03/2023.",
    button: "READ MORE",
    link: "#who_we_are",
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
    button: "READ MORE",
    link: "#mission",
  },
  {
    imageSrc: Image2,
    title: (
      <>
        <RedText>OUR</RedText> <HighlightedText>VISION</HighlightedText>
      </>
    ),
    description:
      "A society where children, youth, adolescent and young women have a health, purposeful and dignified lives, actively engaged in communities and economically empowered.",
    button: "READ MORE",
    link: "#vision",
  },
  {
    imageSrc: Image3,
    subTitle: "What we do",
    title: "Educational Program",
    description: "",
    button: "READ MORE",
    link: "#what_we_do",
  },
  {
    imageSrc: Image4,
    subTitle: "What we do",
    title: "Child protection and well being",
    description: "",
    button: "READ MORE",
    link: "#what_we_do",
  },
  {
    imageSrc: Image5,
    subTitle: "What we do",
    title: "Adolescents and young women Sexual Reproductive Health & Rights",
    description: "",
    button: "READ MORE",
    link: "#what_we_do",
  },
  {
    imageSrc: Image6,
    subTitle: "What we do",
    title: "Psycho-Social Support",
    description: "",
    button: "READ MORE",
    link: "#what_we_do",
  },
  {
    imageSrc: Image7,
    subTitle: "What we do",
    title: "Adolescent girls and young women's empowerment program",
    description: "",
    button: "READ MORE",
    link: "#what_we_do",
  },
  {
    imageSrc: Image8,
    subTitle: "What we do",
    title: "Fighting malnutrition",
    description: "",
    button: "READ MORE",
    link: "#what_we_do",
  },
];

export default gallery;
