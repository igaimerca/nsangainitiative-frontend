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
const Content = tw.div`mx-auto py-2`;
const TestimonialsContainer = tw.div`lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`w-full lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full flex-shrink-0 `;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`relative bg-center bg-no-repeat bg-cover h-[86vh]`,
]);

const ImageOverlay = styled.div`
  ${tw`absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-[60%]`}
`;

const ControlContainer = tw.div`z-50 absolute bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`p-2 mx-3 text-gray-100 rounded-full`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const TextContainer = styled.div((props) => [
  tw`absolute z-50 flex flex-col items-center justify-center w-full left-[10%] top-1/2 lg:w-7/12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`,
]);
export const PrimaryLink = styled.button`
  ${tw`px-8 py-3 font-bold text-gray-100 border-b-0 rounded-md lg:mx-0 bg-primary-500 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline`}
`;

const Subheading = tw(SubheadingBase)`mb-4 text-red-500`;
const HeadingTitle = tw(SectionHeading)`text-white lg:text-left leading-tight`;
const Description = tw.p`text-white mb-4 max-w-md text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4`;

const HighlightedText = tw.span`bg-nsanga-blue text-gray-100 px-4 transform -skew-x-12 inline-block`;
const RedText = tw.span`text-red-500`;

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
      <RedText>OUR</RedText> <HighlightedText>MISSION</HighlightedText>
    </>
  ),
  description = "To support, protect and advocate for children, youth, adolescent girls and young women’s rights and works to improve their lives through education, counseling, capacity building, socio-economic empowerment and advocacy to ensure a healthy and purposeful life.",
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
        <TestimonialsContainer>
          <Testimonials>
            <Testimonial>
              <TestimonialImageSlider
                infinite={true}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                // autoplaySpeed={0}
                speed={3000}
                arrows={false}
                ref={setImageSliderRef}
                asNavFor={textSliderRef}
                fade={true}
              >
                {testimonials.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image imageSrc={testimonial.imageSrc}>
                      <ImageOverlay />
                    </Image>
                    <TextContainer textOnLeft={textOnLeft}>
                      <HeadingInfo
                        tw="hidden lg:block"
                        subheading={testimonial?.subTitle}
                        heading={testimonial.title}
                        description={testimonial.description}
                      />
                    </TextContainer>
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
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>
      {/* <DecoratorBlob1 />
      <DecoratorBlob2 /> */}
    </Container>
  );
};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description}</Description>
    <PrimaryLink>DONATE NOW</PrimaryLink>
  </div>
);
