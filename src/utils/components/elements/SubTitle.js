import styled from 'styled-components';


export const SubTitle = styled('span')`
  font-size: 1.25rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.25;
  font-weight: 300;
  margin-top: ${p => (p.spacingTop || p.spacingTop === 0  ) ? p.spacingTop : 1}rem;
  margin-bottom: ${p => (p.spacingBottom || p.spacingBottom === 0) ? p.spacingBottom : 2}rem;
`
