import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { background, color } from '../../assets/css/color';
import { sizes } from '../../assets/css/devices';
import { typography } from '../../assets/css/typography';

const customMedia = generateMedia({
  ...sizes,
});

export const MainContent = styled.main`
  height: 100vh;
  background-color: ${background.app};
`;

export const Header = styled.div`
  background-color: ${background.login};
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: right;
  justify-content: space-between;

  span:last-child {
    margin-right: 40px;
  }
  span {
    ${customMedia.lessThan('tablet')`
      font-size: ${typography.size.s2}px;
    `}
  }
  svg {
    ${customMedia.lessThan('tablet')`
      height: 28px;
      width: 28px;
    `}
  }
`;

export const ContainerGoBack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: right;
`;

export const IconBack = styled(IoArrowBackCircleSharp)`
  width: 38px;
  height: 38px;
  margin: 16px 20px;
  color: ${color.gray};
  cursor: pointer;
  position: relative;
`;

export const TextInfo = styled.span`
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.l1}px;
  color: ${color.black};
`;
