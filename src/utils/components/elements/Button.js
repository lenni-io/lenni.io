import styled, { css }from 'styled-components'
import { Link } from 'gatsby';

const background = (props) => {
  switch(props.ghost) {
    case true :
      return `background-color: transparent;`
      
    default :
      return `background-color:  ${props.theme.colors.primary};`
  }
}

const border = (props) => {
  switch(props.ghost) {
    case true :
      return `border: 2px solid ${props.theme.colors.primary};`
    default :
      return `border: 2px solid ${props.theme.colors.primary};`
  }
}

const typeColor = (props) => {
  switch(props.ghost) {
    case true :
      return `color: ${props.theme.colors.primary};`
    default :
      return `color: #fff;`
  }
}

const boxShadow = (props) => {
  switch(props.ghost) {
    case true :
      return ``
    default :
      return `box-shadow: 0px 28px 32px -22px ${props.theme.colors.primary};`
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
  margin-right: 1rem;
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