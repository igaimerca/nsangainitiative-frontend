import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import NavbarSlider from "../carousel/NavBarSlider.jsx";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative min-h-screen -mx-8 -mt-8 bg-right bg-no-repeat bg-cover`}
  background-image: url('https://images.unsplash.com/photo-1576014131795-d440191a8e8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80');
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl font-black leading-none text-center text-gray-100 lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative px-4 py-2 -mx-4 text-primary-500`}
  &::before {
    content: "";
    ${tw`absolute inset-0 transform -skew-x-12 bg-gray-100 -z-10`}
  }
`;

const PrimaryAction = tw.button`px-8 py-3 text-sm sm:text-base sm:mt-5 sm:px-8 sm:py-4 hocus:text-primary-500 font-bold rounded shadow transition duration-300 bg-primary-500 hocus:bg-gray-100 text-gray-100 focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#about">About us</NavLink>
      <NavLink href="#mission">Mission</NavLink>
      <NavLink href="#vision">Vision</NavLink>
      <NavLink href="#values">Values</NavLink>
      <NavLink href="#what_we_do">What we do</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">DONATE NOW</PrimaryLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        {/* <NavbarSlider /> */}

        {/* <Heading>
          <SlantedBackground>NSANGA Initiative</SlantedBackground>
        </Heading>
        <PrimaryAction>DONATE NOW</PrimaryAction> */}
      </HeroContainer>
    </Container>
  );
};
