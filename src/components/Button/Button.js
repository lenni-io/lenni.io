import styled, { css }from 'styled-components'
import { Link } from 'gatsby';

const background = (props) => {
  switch(props.ghost) {
    case true :
      return `background-color: transparent;`
      
    default :
      return `background-color: #6EE8DC;`
  }
}

const border = (props) => {
  switch(props.ghost) {
    case true :
      return `border: 2px solid #6EE8DC;`
    default :
      return `border: 2px solid #6EE8DC;`
  }
}

const typeColor = (props) => {
  switch(props.ghost) {
    case true :
      return `color: #6EE8DC;`
    default :
      return `color: #fff;`
  }
}

const boxShadow = (props) => {
  switch(props.ghost) {
    case true :
      return ``
    default :
      return `box-shadow: 0 20px 40px -20px #6EE8DC;`
  }
}

const buttonStyle = ( props ) => css`
  display: inline-flex;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.25rem 2rem;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 0.875rem;
  margin-top: 1rem;
  ${typeColor(props)}
  ${border(props)}
  ${background(props)}
  ${boxShadow(props)}
`

const Button = styled(Link)`
  ${(props) => buttonStyle(props)}
`

const ButtonLink = styled.a`
  ${(props) => buttonStyle(props)}
`

const ButtonForm = styled.button`
  ${(props) => buttonStyle(props)}
`


export {Button, ButtonLink, ButtonForm};