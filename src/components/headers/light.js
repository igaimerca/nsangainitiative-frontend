import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/logo.jpg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl max-h-[13vh] pt-0 p-4 mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  py-0 md:py-[3rem] px-2 relative text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300 hocus:text-primary-500
`;

export const List = tw.ul`flex flex-col gap-2 justify-start items-center`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded-full bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`h-16 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const MegaMenu = tw.div`bg-white shadow-lg rounded-sm absolute top-[87%] md:top-[60%] -left-[2rem] w-[160px] z-50 px-2 py-3`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`fixed inset-x-0 top-0 z-10 p-8 mx-4 my-6 text-center text-gray-900 bg-white border rounded-lg lg:hidden`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({
  roundedHeaderButton = false,
  logoLink,
  links,
  className,
  collapseBreakpointClass = "lg",
}) => {
  const [activeMenu, setActiveMenu] = useState("");

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink
        onMouseOver={() => setActiveMenu("who_we_are")}
        onMouseLeave={() =>
          setTimeout(() => {
            setActiveMenu("");
          }, 500)
        }
        href="#who_we_are"
      >
        WHO WE ARE
        {activeMenu === "who_we_are" && (
          <MegaMenu>
            <List>
              <a href="#mission">Mission</a>
              <a href="#mission">Vision</a>
            </List>
          </MegaMenu>
        )}
      </NavLink>
      <NavLink href="#what_we_do">WHAT WE DO</NavLink>
      <NavLink href="#our_impact">OUR IMPACT</NavLink>
      <NavLink
        onMouseOver={() => setActiveMenu("media")}
        onMouseLeave={() =>
          setTimeout(() => {
            setActiveMenu("");
          }, 500)
        }
        href="#media"
      >
        MEDIA
        {activeMenu === "media" && (
          <MegaMenu>
            <List>
              <a href="#announcementsS">Announcements</a>
              <a href="#reports">Reports</a>
              <a href="#events">Events</a>
            </List>
          </MegaMenu>
        )}
      </NavLink>
      <NavLink href="#footer">CONTACT US</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">DONATE NOW</PrimaryLink>
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
      >
        {logoLink}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
