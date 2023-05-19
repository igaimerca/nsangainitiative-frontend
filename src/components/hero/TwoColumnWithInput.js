import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md mx-auto text-center lg:mx-0`}
  input {
    ${tw`w-full py-4 pl-8 font-medium transition duration-300 border-2 rounded-full sm:pr-48 sm:py-5 focus:outline-none focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`top-0 bottom-0 right-0 flex items-center justify-center w-full py-4 my-4 mr-2 font-bold text-gray-100 transition duration-300 rounded-full sm:absolute bg-primary-500 sm:my-2 sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`absolute bottom-0 left-0 w-64 h-64 transform pointer-events-none opacity-5 -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`text-sm font-bold tracking-wider text-gray-500 uppercase lg:text-xs`}
  }
  img {
    ${tw`w-full mt-4 opacity-50 lg:pr-16 xl:pr-32`}
  }
`;

export default ({ roundedHeaderButton }) => {
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Beautiful React Templates{" "}
              <span tw="text-primary-500">for you.</span>
            </Heading>
            <Paragraph>
              Our templates are easy to setup, understand and customize. Fully
              modular components with a variety of pages and components.
            </Paragraph>
            <Actions>
              <input type="text" placeholder="Your E-mail Address" />
              <button>Get Started</button>
            </Actions>
            <CustomersLogoStrip>
              <p>Our TRUSTED Customers</p>
              {/* <img src={CustomersLogoStripImage} alt="Our Customers" /> */}
            </CustomersLogoStrip>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                src={DesignIllustration}
                alt="Design Illustration"
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
