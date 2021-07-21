import styled from 'styled-components'

export const Title = styled.h1`
  color: skyblue;
  font-size: ${props => props.primary ? "2em" : "1em"};
  font-family: ${({theme}) => theme.fonts.titleFont.family};
  text-align: center;
  @media only screen and (max-width: 800px) {
    text-align: left;
    font-style: italic;
  }
`

export const Subtitle = styled(Title)`
  font-size: "1em";
  color: peru
`

export const Centered = styled.h3`
  text-align: center; 
`

export const SButton = styled.button`
    width: 125px;
    height: 30px;
    text-align: center;
    background: transparent;
    background-color: peru;
    border-radius: 100px;
    margin: 5px;
    transition: 0.3s;

    &:hover {
        color:#FFFFFF;
        background-color: skyblue;

    }
`

export const a = styled.h6`
  color: hotpink;
`

export const DDescription = styled.h4`
 font-size: 1em; 
 color: lightblue;
`

export const Lline = styled.h5`
 color: blanchedalmond;
`

