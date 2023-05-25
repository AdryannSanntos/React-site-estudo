import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import InterRegularTtf from '../assets/fonts/Inter-Regular.ttf';
import InterMediumTtf from '../assets/fonts/Inter-Medium.ttf';
import InterSemiboldWoTtf from '../assets/fonts/Inter-SemiBold.ttf';

interface ITextProps {
  fontSize?: string;
  color?: string;
  align?: string;
  weight?: string;
}


export const GlobalStyles = createGlobalStyle`
:root {
  --bg-color: #191919;
  --bg-red: #F52D21;
  --bg-login-form: #F8F9FA;
  --font-primary-color: #FFFFFF;
}
@font-face {
    font-family: 'Inter';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${InterRegularTtf}') format('truetype');
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${InterMediumTtf}') format('truetype');
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${InterSemiboldWoTtf}') format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter';
    outline: none;
  }
  body {
    background-color: rgba(255, 255, 255, 1);
    color: var(--font-primary-color);
  }
  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }
`;

export const Header = styled.div`
  padding: 30px 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Blur = styled.div`
  &.blur01{
    position: absolute;
    width: 560px;
    height: 48px;
    left: 644.51px;
    top: 182.99px;
    background: linear-gradient(90deg, #FD6542 8.19%, #E80370 49.3%, #5D0D56 94.64%);
    filter: blur(50px);
    border-radius: 138px;
    transform: rotate(-0.17deg);
  }
`;

export const Button = styled.button`
  padding: 0 21px;
  background-color: transparent;
  border: none;

  &.mark{
    background-color: #fff;
    color: #191919;
    padding: 8px 40px;
    border-radius: 10px;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.span<ITextProps>`
  z-index: 1;
  font-size: ${props => props.fontSize || '14px'};
  text-align: ${props => props.align || 'center'};
  color: ${props => props.color || '#fff'};
  font-weight: ${props => props.weight || '600'};

  &.mark{
    color: #191919;
  }
`;

