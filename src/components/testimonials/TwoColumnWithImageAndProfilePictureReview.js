import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { PrimaryButton } from "../misc/Buttons.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-12`;
const TestimonialsContainer = tw.div`lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-6/12 flex-shrink-0 `;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-no-repeat bg-center h-80 sm:h-96 lg:h-144`,
]);

const ControlContainer = tw.div`absolute bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-3 rounded-full text-gray-100 p-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const TextContainer = styled.div((props) => [
  tw`flex flex-col items-center justify-center w-full lg:w-7/12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`,
]);

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left leading-tight`;
const Description = tw.p`mb-4 max-w-md text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default ({
  subheading = "",
  heading = (
    <>
      WE ARE <br /> <HighlightedText>NSANGA</HighlightedText> Initiative
    </>
  ),
  description = "A Rwandan non-governmental organization. It has been established in 2022 and is registered at Rwanda Governance Board (RGB) with Operational Certificate number 1200/ RGB /NGO/OC/03/2023.",
  testimonials = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1523952578875-e6bb18b26645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
    },
  ],
  textOnLeft = false,
}) => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  return (
    <Container>
      <Content>
        <HeadingInfo
          tw="text-center lg:hidden"
          subheading={subheading}
          heading={heading}
          description={description}
        />
        <TestimonialsContainer>
          <Testimonials>
            <Testimonial>
              <TestimonialImageSlider
                autoplay={true}
                arrows={false}
                ref={setImageSliderRef}
                asNavFor={textSliderRef}
                fade={true}
              >
                {testimonials.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image imageSrc={testimonial.imageSrc} />
                    <ControlContainer>
                      <ControlButton onClick={imageSliderRef?.slickPrev}>
                        <ChevronLeftIcon />
                      </ControlButton>
                      <ControlButton onClick={imageSliderRef?.slickNext}>
                        <ChevronRightIcon />
                      </ControlButton>
                    </ControlContainer>
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>
              <TextContainer textOnLeft={textOnLeft}>
                <HeadingInfo
                  tw="hidden lg:block"
                  subheading={subheading}
                  heading={heading}
                  description={description}
                />
              </TextContainer>
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description}</Description>
  </div>
);
