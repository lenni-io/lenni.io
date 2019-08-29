import React from 'react'
import styled from 'styled-components';
import {useSpring} from 'react-spring';

const Container  = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
` 
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

export const ParallaxScene = ({children}) => {

  const [mouse, setMouse] = useSpring( () => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }) );

  return (
    <Container onMouseMove={(e)=>setMouse({xy: calc(e.clientX, e.clientY)})}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          mouse
        })
      })}
    </Container>
  )
}
