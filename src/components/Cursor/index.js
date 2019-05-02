import React, { Component } from 'react'
import styled from 'styled-components';


const Cursor = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  border-radius: 16px;
  position: absolute;
  opacity: 0.8;
  mix-blend-mode: screen;
  pointer-events: none;
  transition: transform .25s cubic-bezier(0.175, 0.885, 0.32, 1), background-color .25s, top .25s cubic-bezier(0.175, 0.885, 0.32, 1), left .25s cubic-bezier(0.175, 0.885, 0.32, 1.0);
` 

export default class CursorContainer extends Component {
    state ={
      top: 0,
      left: 0,  
      scale: 1,
      color: '#f33'
    }
    myRef = React.createRef();
    
  

  componentDidMount(){

    document.addEventListener('mousedown', (e) =>{
       this.setState({
          scale: 0.8,
          color: '#600'
        })
        setTimeout(() =>
        this.setState({
          scale: 1,
          color: '#f33  '
        }), 200)
    })

    document.addEventListener('mousemove', (e) =>{

       window.requestAnimationFrame(() => {
        if(e.target.localName === 'a'){
          this.setState({
            scale: 1.6
          })
        } else {
          this.setState({
            scale: 1
          })
        }
          this.setState({
            left: e.clientX,
            top: e.clientY,
            
          })
       });
        
    })
    
  }
  
  render() {
    let top = this.state.top - 16 ;
    let left = this.state.left - 16;
    let scale = this.state.scale;
    let color = this.state.color;
    return (
      <Cursor style={{top: top+'px', left: left+'px', transform: `scale(${scale})`, backgroundColor: `${color}` }}/>
    )
  }
}
