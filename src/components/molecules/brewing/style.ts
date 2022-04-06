import styled from 'styled-components';
import IcoTrash from '../../../assets/icons/icon-trash.svg';
import IcoLocation from '../../../assets/icons/icon-location.svg';
import IcoBars from '../../../assets/icons/icon-bars.svg';
import IcoPhone from '../../../assets/icons/icon-phone.svg';
import IcoAdd from '../../../assets/icons/icon-add.svg';
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

export const ChipInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: auto;
  height: 32px;
  border-radius: 99px;
  cursor: pointer;
  background-color: ${background.login};
  input {
    border: 0;
    outline: 0;
  }
`;

export const ChipInput = styled.input`
  border: 1px solid ${background.login};
  background-color: ${background.login};
  width: 60%;
  cursor: pointer;
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s2}px;
  ::placeholder {
    color: ${color.black};
    opacity: 1;
  }
  :focus {
    background-color: ${color.white};
    border: 1px solid ${color.lightGray};
    border-radius: 4px;
  }
`;

export const IconTrashContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;

export const IconTrash = styled.i`
  mask: url(${IcoTrash});
  mask-size: cover;
  width: 14px;
  height: 16px;
  color: ${color.gray};
  cursor: pointer;
  display: inline-block;
  background-color: ${color.gray};
`;

export const IconBarChart = styled.i`
  mask: url(${IcoBars});
  mask-size: cover;
  width: 16px;
  height: 16px;
  margin: 8px;
  color: ${color.gray};
  display: inline-block;
  background-color: ${color.gray};
`;

export const IconPhone = styled.i`
  mask: url(${IcoPhone});
  mask-size: cover;
  width: 18px;
  height: 18px;
  margin: 8px;
  color: ${color.gray};
  display: inline-block;
  background-color: ${color.gray};
`;

export const IconLocation = styled.i`
  mask: url(${IcoLocation});
  mask-size: cover;
  width: 20px;
  height: 22px;
  margin: 6px;
  color: ${color.gray};
  display: inline-block;
  background-color: ${color.gray};
`;

export const IconMore = styled.i`
  mask: url(${IcoAdd});
  mask-size: cover;
  width: 18px;
  height: 18px;
  margin: 8px;
  display: inline-block;
  background-color: ${color.gray};
`;
