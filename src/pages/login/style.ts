import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

import { background, color } from '../../assets/css/color';
import { sizes } from '../../assets/css/devices';
import { typography } from '../../assets/css/typography';
import { InputProps } from './types';

const customMedia = generateMedia({
  ...sizes,
});

export const LoginWrapper = styled.div`
  background-color: ${background.login};
  height: 100vh;
`;

export const TextInfo = styled.span`
  color: ${color.black};
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s2}px;
  line-height: 21px;
  margin: 0px 0px 16px 0px;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 20%;
`;

export const ContainerInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 16px 0px;
  input {
    width: 300px;
    margin-right: 10px;
    cursor: pointer;
    display: inline-block;
    height: 43px;
    border: ${({ hasError }) =>
      hasError ? `1px solid ${color.red}` : `1px solid ${color.lightGray}`};
    background: ${color.white};
    appearance: none;
    outline: none;
    border-radius: 4px;
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.s3}px;
    padding: 10px 12px;
    line-height: 21px;
    &:focus {
      border: 1px solid ${color.mediumGray};
    }
  }
`;

export const ContainerCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  input {
    margin: 0px 8px 0px 0px;
    :hover {
      cursor: pointer;
    }
  }
  span {
    margin: 0px;
  }
`;

export const ButtonSubmitContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  button {
    width: 75px;
    height: 40px;
    color: ${color.white};
    background-color: ${color.blue};
    border: 1px solid ${color.blue};
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.s3}px;
    border-radius: 4px;
    line-height: 24px;
    cursor: pointer;
    :hover {
      opacity: 0.9;
    }
    :disabled {
      background-color: ${color.strongGray};
      border: 1px solid ${color.strongGray};
      :hover {
        opacity: 1;
      }
      cursor: default;
    }
  }
`;

export const ContainerError = styled.div`
  margin-top: 5px;
  color: ${color.red};
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s1}px;
`;

export const BeeContainer = styled.div`
  position: absolute;
  bottom: 0px;
  img {
    ${customMedia.lessThan('laptop')`
      height: 180px;
      width: 160px;
    `}
  }
`;
