import React, { useState } from 'react';
import styled from 'styled-components';
import { sections, subSections, sectionText, sectionUrl, subSectionText, subSectionUrl } from '../constants';
import { theme } from '../../../themeStyleConstants';
import { Link } from "react-router-dom";
import { getSubSections } from '../utils';

const { primary, secondary, background } = theme;
const sideBarSections = [sections.creative, sections.softwareEngineer, sections.learner];

const TopBar = ({ underlay }: { underlay: boolean }) => {
  const [selectedSection, setSelectedSection] = useState(null as sections | null);

  const getSubSectionItems = () => {
    const subSects = getSubSections(selectedSection);
    return selectedSection && subSects.map((x: subSections) =>
      x === subSections.visual ? (
        <SubSectionItem href='https://www.instagram.com/a.fartist/' target="_blank">visual</SubSectionItem>
      ) : x === subSections.words ? (
        <SubSectionItem href='https://medium.com/@annelin' target="_blank">words</SubSectionItem>
      ) : (
            <SubSectionItemLink
              to={`/${sectionUrl[selectedSection]}/${subSectionUrl[x]}`} onClick={() => setSelectedSection(null)}>
              {subSectionText[x]}
            </SubSectionItemLink>
          ));
  };

  return (
    <TopBarContainer underlay={underlay}>

      <SectionItemsContainer>
        <Logo
          to="/" onClick={() => setSelectedSection(null)}>
          <img src='http://anneslin.com/assets/imgs/logos/icon-a.png' role="presentation" title='Home' />
        </Logo>
        {sideBarSections.map(x =>
          <SectionItem
            key={sections[x]} onClick={() => setSelectedSection(x)} isSelected={x === selectedSection}>
            {sectionText[x]}
          </SectionItem>)}
      </SectionItemsContainer>
      <SubSectionItemsContainer isSelected={selectedSection != null}>
        {getSubSectionItems()}
      </SubSectionItemsContainer>
    </TopBarContainer>
  );
};

const TopBarContainer = styled.div<{ underlay: boolean }>`
  color: ${primary};
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  display: none;
  @media (max-width: 768px) {
    display: block;
    ${props => props.underlay && `
    background-color: ${background};
    opacity: 1;
    box-shadow: 0px 11px 20px -15px #b3ae9a;`
  }
`;

const SectionItemsContainer = styled.div`
  display: flex;
  width: 100%;
`;
const SectionItem = styled.div<{ isSelected: boolean }>`
  padding: 10px 0 
  flex: 1;
  text-align: center;
  font-size: .8rem;
  margin: 0 .5rem;
  letter-spacing: 1.5px;
  transition: 0.25s;
  ${props => props.isSelected && `font-size: 1rem; color: ${secondary};`}
  &:hover {
    cursor: pointer;
    color: ${secondary};
  }
`;
const SubSectionItemsContainer = styled.div<{ isSelected: boolean }>`
  text-align: center;
  flex: 1;
  ${props => props.isSelected ? 'margin-bottom: 1rem;' : ''
  }
`;

const linkStyles = `
color: ${primary};
font-size: .8rem;
letter-spacing: 1.5px;
transition: 0.25s;
text-decoration: none;
padding: 1rem;
&:hover {
  cursor: pointer;
  color: ${secondary};
}
`;
const SubSectionItemLink = styled(Link)`
  ${linkStyles}
`;
const SubSectionItem = styled.a`
  ${linkStyles}
`;
const Logo = styled(Link)`
  padding-left: 1rem;
  margin: auto;
  img {
    height: 15px;
  }
}`
export default TopBar;