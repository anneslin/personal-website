import React, { useState } from 'react';
import styled from 'styled-components';
import { sections, subSections, sectionText, sectionUrl, subSectionText, subSectionUrl } from '../constants';
import { theme } from '../../../themeStyleConstants';
import { Link } from "react-router-dom";
import { getSubSections } from '../utils';

const { primary, secondary, background } = theme;
const sideBarSections = [sections.creative, sections.softwareEngineer, sections.learner];

const SideBar = ({ underlay }: { underlay: boolean }) => {
  const [selectedSection, setSelectedSection] = useState(null as sections | null);

  const getSubSectionItems = () => {
    const subSects = getSubSections(selectedSection);
    return selectedSection && subSects.map((x: subSections) =>
      x === subSections.words ? (
        <SubSectionItem href='https://medium.com/@annelin' target="_blank">words</SubSectionItem>
      ) : (
          <SubSectionItemLink
            to={`/${sectionUrl[selectedSection]}/${subSectionUrl[x]}`}>
            {subSectionText[x]}
          </SubSectionItemLink>
        ));
  };

  return (
    <SideBarContainer>
      <Underlay style={{ opacity: underlay ? 0.75 : 0 }} />
      <Content>
        <Name href="/">
          anne lin
        </Name>
        <SectionItemsContainer>
          {sideBarSections.map(x =>
            <SectionItem key={sections[x]} onClick={() => setSelectedSection(x)}>
              {sectionText[x]}
            </SectionItem>)}
        </SectionItemsContainer>
        <SubSectionItemsContainer>
          {getSubSectionItems()}
        </SubSectionItemsContainer>
      </Content>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  color: ${primary};
  position: absolute;
  margin-top: calc(45vh - 50px);
  height: 250px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 8vw;
  z-index: 2;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Underlay = styled.div`
  background: ${background};
  height: 100%;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 100px;
  position: absolute;
`;
const Name = styled.a`
  color: ${primary};
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px;
  font-size: 15px;
  transition: 0.25s;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    color: #b3a296;
  }
`;
const SectionItemsContainer = styled.div`
  display: flex;
`;
const SectionItem = styled.div`
  flex: 1;
  text-align: center;
  font-size: .8rem;
  margin: 0 .5rem;
  letter-spacing: 1.5px;
  transition: 0.25s;
  &:hover {
    cursor: pointer;
    color: ${secondary};
  }
`;
const SubSectionItemsContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const linkStyles = `
color: ${primary};
font-size: .8rem;
letter-spacing: 1.5px;
transition: 0.25s;
text-decoration: none;
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
export default SideBar;