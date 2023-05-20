import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/logo-white.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw.div`relative bg-nsanga-blue text-gray-100 -mx-8 -mb-8 px-16 pb-8 md:pb-0`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`;
const ThreeColumns = tw.div`flex flex-wrap justify-center`;

const Column = tw.div`flex items-center justify-start flex-col w-full md:w-1/3 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`flex items-center justify-start flex-col text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/3`;

const ColumnHeading = tw.h3`w-full text-center font-bold uppercase`;

const LinkList = tw.ul`w-full text-center mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`h-16`;

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLinksContainer = tw.div`mt-4 text-center lg:text-left`;
const SocialLink = styled.a`
  ${tw`inline-block p-2 mr-4 text-gray-900 transition duration-300 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-500 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`;
const CopyrightNotice = tw.div``;
const CompanyInfo = tw.div``;

const Divider = tw.div`my-8 border-b-2 border-blue-700`;
export default () => {
  return (
    <Container id="footer">
      <Content>
        <ThreeColumns>
          <CompanyColumn>
            <LogoContainer>
              <LogoImg src={LogoImage} />
            </LogoContainer>
            <SocialLinksContainer>
              <SocialLink href="https://facebook.com">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://twitter.com">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://youtube.com">
                <YoutubeIcon />
              </SocialLink>
            </SocialLinksContainer>
          </CompanyColumn>
          <Column>
            <ColumnHeading>Quick Links</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#who_we_are">WHO WE ARE</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#what_we_do">WHAT WE DO</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#our_impact">OUR IMPACT</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#media">MEDIA</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Contact</ColumnHeading>
            <LinkList>
              <LinkListItem>(+250) 788-302-801</LinkListItem>
              <LinkListItem>
                <Link href="mailto:nsanga@nsangainitiative.org">
                  nsanga@nsangainitiative.org
                </Link>
              </LinkListItem>
            </LinkList>
          </Column>
        </ThreeColumns>
        <Divider />
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>
            &copy; Copyright 2022, Nsanga Initiative. All Rights Reserved.
          </CopyrightNotice>
          <CompanyInfo>Non Governmental organization.</CompanyInfo>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};
