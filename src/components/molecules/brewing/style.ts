import styled from 'styled-components';
import {
  IoBarChart,
  IoCallOutline,
  IoLocationOutline,
  IoTrash,
} from 'react-icons/io5';
import { background, color } from '../../../assets/css/color';
import { typography } from '../../../assets/css/typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 382px;
  height: 282px;
  border-radius: 4px;
  background-color: ${color.white};
  border: 1px solid ${color.black};
  padding: 10px 10px 10px 23px;
`;

export const TextTitle = styled.span`
  text-align: left;
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m1}px;
  color: ${color.mediumBlack};
  margin-bottom: 22px;
`;

export const TextAddressInfo = styled.span`
  text-align: left;
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s3}px;
  color: ${color.gray};
`;

export const TextLocationtInfo = styled.span`
  text-align: left;
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s3}px;
  color: ${color.gray};
  margin-bottom: 26px;
`;

export const ChipContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px) 35%;
  grid-gap: 16px;
  align-items: center;
  text-align: center;
`;

export const Chip = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: auto;
  height: 32px;
  border-radius: 99px;
  background-color: ${background.login};
  border: 1px solid ${background.login};
  color: ${color.black};
  cursor: pointer;
  text-transform: capitalize;
`;

export const IconTrashContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;

export const IconTrash = styled(IoTrash)`
  width: 18px;
  height: 20px;
  color: ${color.gray};
  cursor: pointer;
`;

export const IconBarChart = styled(IoBarChart)`
  width: 16px;
  height: 16px;
  margin: 8px;
  color: ${color.gray};
`;

export const IconPhone = styled(IoCallOutline)`
  width: 16px;
  height: 16px;
  margin: 8px;
  color: ${color.gray};
`;

export const IconLocation = styled(IoLocationOutline)`
  width: 16px;
  height: 16px;
  margin: 8px;
  color: ${color.gray};
`;
