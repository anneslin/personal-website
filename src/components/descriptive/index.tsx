import React from 'react'
import styled from 'styled-components';

const Descriptive = ({ children }: { children: JSX.Element }) => (
  <Container>
    <Content>
      { children }
    </Content>
  </Container>
);

const Container = styled.div`
  text-align: right;
  font-family: 'News Cycle', sans-serif;
  height:100vh;
  margin-left: calc(13vw + 300px);
`;
const Content = styled.div`
	text-align: right;
	position: absolute;
	margin-top: 45vh;
	width: 300px; 
	height: 100px;
	font-size: .8em;
`;

export default Descriptive;