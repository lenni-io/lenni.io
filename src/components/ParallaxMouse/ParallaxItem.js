import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'


const Item = styled(animated.div)`
  position: absolute;
  display: flex;
  flex-direction: column; 
  align-items: center;
  ${p => (p.bottom || p.bottom === 0) && `bottom: ${p.bottom}px`}
  ${p => (p.top || p.top === 0) && `top: ${p.top}px`}
  ${p => (p.left || p.left === 0) && `left: ${p.left}px`}
  ${p => (p.right || p.right === 0) && `right: ${p.right}px`}
`;

export class ParallaxItem extends React.Component{

  constructor(props) {
    super(props);
    this.itemRef = React.createRef();
  }

  trans = (x, y) => `perspective(600px) rotateX(${-( y/this.props.speed )/(this.props.speed/100)}deg) rotateY(${( x/this.props.speed )/(this.props.speed/40)}deg) translate3d(${-( x/this.props.speed )}px,${-(y/this.props.speed)}px, 0)`;

  render() {
    const { props } = this;
    return (

      <Item {...props} style={{
          transform:  props.mouse.xy.interpolate(this.trans),
        }}
      >

        {props.children}

      </Item>

    )
  }
}
