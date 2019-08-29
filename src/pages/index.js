import React from 'react'

import { 
  Title, 
  SubTitle,
  ButtonLink, 
  Layout 
} from "../utils/components";

import { ParallaxScene, ParallaxItem } from '../components/ParallaxMouse';
import { Footer } from '../components/Footer'
import SEO from "../utils/components/SEO";
import Portfolio from '../images/image_main.png';


export default class Index extends React.Component {
  
  render() {
    return (
      
      <Layout>
        <SEO title="design & development"/>
        <ParallaxScene>
          <ParallaxItem speed={220} bottom={-100} ><img src={Portfolio} alt="ImageMe" /></ParallaxItem>
          <ParallaxItem speed={80}>
            <Title level={1} spacingBottom={1}  spacingTop={0} >Lennart Hammer</Title>
            <SubTitle spacingTop={0} spacingBottom={1}>Design & Code of Digital Products</SubTitle>
            <ButtonLink href="mailto:hello@lenni.io">hello@lenni.io</ButtonLink>
          </ParallaxItem>
        </ParallaxScene>
        <Footer />
      </Layout>
    )
  }
}


