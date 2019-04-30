import React from 'react';
import styled from 'styled-components';

const titleSizes = ['4rem', '2.5rem', '2rem', '1.5rem','1.25rem', '1rem']

const TitleContainer = (props) => {
  const type = `h${props.level}`;
  return ( React.createElement(
    type,
      {className: props.className},
      props.children
    )
  )
}

export const Title = styled(TitleContainer)`
  font-size: ${p => titleSizes[p.level-1]};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.25;
  font-weight: 700;
  margin-top: ${p =>  (p.spacingTop) ? p.spacingTop : '0'}rem;
  margin-bottom: ${p =>  (p.spacingBottom) ? p.spacingBottom : '0'}rem;
  color: #0F0F16;
`
