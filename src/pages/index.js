import React from 'react'
import styled from 'styled-components';

import { Title } from "../components/Title";
import { ButtonLink } from "../components/Button";
import SEO from '../components/SEO';
import { Footer } from '../components/Footer';
import Cursor from '../components/Cursor';

import '../components/Layout/layout.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  height: 100vh;
  width: 100%;
  text-align: center;
  overflow:hidden;
`
const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.25;
  font-weight: 300;
  margin-bottom: ${p => (p.spacingBottom) && p.spacingBottom}rem;
  color: #0F0F16;
`

export default class Index extends React.Component {

  render() {
    return (
      <Container>
        <SEO title="design & development"/>
        <Cursor />
        <Title level={1} spacingBottom={0.25} >Lennart Hammer</Title>
        <SubTitle spacingBottom={1}>design & code of digital products </SubTitle>

        <ButtonLink href="mailto:hello@lenni.io">hello@lenni.io</ButtonLink>
        <Footer />
      </Container>
    )
  }
}
