import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import IcoArrowBack from '../../assets/icons/icon-arrowBack.svg';
import { background, color } from '../../assets/css/color';
import { sizes } from '../../assets/css/devices';
import { typography } from '../../assets/css/typography';

const customMedia = generateMedia({
  ...sizes,
});

export const MainContent = styled.main`
  height: 100vh;
  background-color: ${background.app};
  overflow-y: scroll;
`;

export const BrewingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 38px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 100px;
  ${customMedia.lessThan('desktop')`
      grid-template-columns: repeat(2, auto);
  `}
  ${customMedia.lessThan('laptop')`
      grid-template-columns: repeat(1, auto);
  `}
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

export const IconBack = styled.i`
  mask: url(${IcoArrowBack});
  mask-size: cover;
  width: 38px;
  height: 38px;
  margin: 16px 20px;
  color: ${color.gray};
  cursor: pointer;
  position: relative;
  display: inline-block;
  background-color: ${color.gray};
`;

export const TextInfo = styled.span`
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.l1}px;
  color: ${color.black};
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  .MuiPaginationItem-page {
    color: ${color.gray};
  }
  .MuiPaginationItem-page.Mui-selected {
    background-color: ${background.login};
    color: ${color.gray};
    :hover {
      background-color: ${background.login};
    }
  }
  .MuiPaginationItem-page:hover {
    background-color: ${background.login};
    opacity: 1;
    color: ${color.gray};
  }
`;
