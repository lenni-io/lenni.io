import React from 'react'
import styled from 'styled-components';

import { Title } from "../components/common/Title";
import { ButtonLink } from "../components/common/Button";
import SEO from '../components/common/SEO';
import {Layout} from '../components/common/Layout';

import { Footer } from '../components/common/Footer';
import ProtfolioImage from '../images/portfolio.png';

const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.25;
  font-weight: 300;
  margin-bottom: ${p => (p.spacingBottom) && p.spacingBottom}rem;
  
`

export default class Index extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="design & development"/>
        <Title level={1} spacingBottom={0.25} >Lennart Hammer</Title>
        <SubTitle spacingBottom={1}>design & code of digital products </SubTitle>
        <ButtonLink href="mailto:hello@lenni.io">hello@lenni.io</ButtonLink>
        <img src={ProtfolioImage} style={{position:'absolute', bottom: 0, zIndex: -1}}  alt="Lennart Hammer"/>
        <Footer />
      </Layout>
    )
  }
}
