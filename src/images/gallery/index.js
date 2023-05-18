import tw from "twin.macro";
import Image0 from "./a.jpeg";
import Image1 from "./b.jpeg";
import Image2 from "./c.jpeg";
import Image3 from "./d.jpeg";
import Image4 from "./e.jpeg";
import Image5 from "./f.jpeg";
import Image6 from "./g.jpeg";
import Image7 from "./h.jpeg";
import Image8 from "./i.jpeg";

const HighlightedText = tw.span`bg-nsanga-blue text-gray-100 px-4 transform -skew-x-12 inline-block`;
const RedText = tw.span`text-red-500`;

const gallery = [
  {
    imageSrc: Image0,
    subTitle: "Who we are",
    title: "NSANGA Initiative",
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
        <RedText>OUR</RedText> <HighlightedText>VISION</HighlightedText>
      </>
    ),
    description:
      "A society where children, youth, adolescent and young women have a health, purposeful and dignified lives, actively engaged in communities and economically empowered.",
  },
  {
    imageSrc: Image3,
    subTitle: "What we do",
    title: "Educational Program",
    description:
      "Our educational program offers a comprehensive learning experience for students. It encompasses various subjects, encourages critical thinking, fosters creativity, and prepares individuals for future challenges.",
  },
  {
    imageSrc: Image4,
    subTitle: "What we do",
    title: "Child protection and well being",
    description: "",
  },
  {
    imageSrc: Image5,
    subTitle: "What we do",
    title: "Adolescents and young women Sexual Reproductive Health & Rights",
    description: "",
  },
  {
    imageSrc: Image6,
    subTitle: "What we do",
    title: "Psycho-Social Support",
    description:
      "Providing essential guidance, empathy, and assistance to individuals facing emotional challenges. Our dedicated team offers comprehensive services, including counseling, therapy, and community resources, ensuring holistic support for those in need.",
  },
  {
    imageSrc: Image7,
    subTitle: "What we do",
    title: "Adolescent girls and young women's empowerment program",
    description: "",
  },
  {
    imageSrc: Image8,
    subTitle: "What we do",
    title: "Fighting malnutrition",
    description:
      "Fighting malnutrition stands as a cornerstone in our endeavors, aiming to nourish communities, empower individuals, and eradicate hunger's grip. Through innovative programs, partnerships, and sustainable practices, we strive to ensure healthy, balanced diets for all, leaving no one behind in the battle against malnutrition.",
  },
];

export default gallery;
