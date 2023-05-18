import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { Container, ContentWithPaddingXl } from "../misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-8.svg";

const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`absolute top-0 right-0 w-56 h-56 text-teal-400 transform -translate-y-12 pointer-events-none -z-20 opacity-15 translate-x-2/3`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`absolute bottom-0 left-0 w-64 h-64 transform pointer-events-none -z-20 opacity-15 -translate-x-2/3 text-primary-500`}
`;

const HighlightedText = tw.span`bg-nsanga-blue text-gray-100 px-4 transform -skew-x-12 inline-block`;
const RedText = tw.span`text-nsanga-red`;

export default ({
  id,
  heading = (
    <>
      <RedText>WHAT</RedText> <HighlightedText>WE DO?</HighlightedText>
    </>
  ),
  description = "What we do shapes our future and defines who we are.",
  faqs = [
    {
      question: "Educational Program",
      answer:
        "Our educational program offers a comprehensive learning experience for students. It encompasses various subjects, encourages critical thinking, fosters creativity, and prepares individuals for future challenges. The curriculum is designed to empower students with knowledge, skills, and a thirst for lifelong learning.",
    },
    {
      question: "Child protection and well being",
      answer:
        "At NSANGA Initiative, child protection and well-being are paramount. We dedicate ourselves to ensuring the safety, security, and happiness of every child we serve. Our main activities revolve around creating a nurturing environment, advocating for their rights, and providing comprehensive support for their physical and emotional well-being.",
    },
    {
      question:
        "Adolescents and young women Sexual Reproductive Health & Rights",
      answer:
        "One of our main activities involves promoting the Sexual Reproductive Health & Rights of adolescents and young women. We prioritize empowering them with comprehensive education, access to healthcare services, and advocating for their rights to ensure a healthier future for all.",
    },
    {
      question: "Psycho-Social Support",
      answer:
        "Providing essential guidance, empathy, and assistance to individuals facing emotional challenges. Our dedicated team offers comprehensive services, including counseling, therapy, and community resources, ensuring holistic support for those in need.",
    },
    {
      question: "Adolescent girls and young women's empowerment program",
      answer:
        "Through this initiative, we aim to uplift and support the younger generation, providing them with resources, mentorship, and opportunities for growth. Together, we strive to create a brighter future for all.",
    },
    {
      question: "Fighting malnutrition",
      answer:
        "Fighting malnutrition stands as a cornerstone in our endeavors, aiming to nourish communities, empower individuals, and eradicate hunger's grip. Through innovative programs, partnerships, and sustainable practices, we strive to ensure healthy, balanced diets for all, leaving no one behind in the battle against malnutrition.",
    },
  ],
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container id={id}>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial="collapsed"
                    animate={
                      activeQuestionIndex === index ? "open" : "collapsed"
                    }
                    transition={{
                      duration: 0.02,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
