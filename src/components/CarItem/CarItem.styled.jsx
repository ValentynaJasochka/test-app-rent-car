import styled from 'styled-components';
import { ReactComponent as FavoriteMark } from '../../image/heart.svg';

export const Item = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
`;
export const ImgWrapper = styled.div`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 05),
    rgba(18, 20, 23, 0)
  );

  & > img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Img = styled.img`
  display: block;
`;
export const TextContainer = styled.div`
  margin-bottom: 28px;
`;
export const MainTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const TextBlock = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;
export const MainTextInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
export const TextInfo = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  white-space: nowrap;

  color: rgba(18, 20, 23, 0.5);
  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 16px;
    margin: 0 6px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;
export const Btn = styled.button`
  font-weight: 600;
  line-height: 1.43;
  padding: 12px 99px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  background-color: ${props => props.theme.colors.lightBlue};
  &:hover {
    background-color: ${props => props.theme.colors.darkBlue};
  }
`;
export const FavoriteBTN = styled(FavoriteMark)`
  position: absolute;
  top: 14px;
  right: 14px;
  fill: ${props => props.isFavorite?props.theme.colors.lightBlue:"none"};
  stroke: ${props => props.isFavorite?props.theme.colors.lightBlue:props.theme.colors.white};

  cursor: pointer;
`;
