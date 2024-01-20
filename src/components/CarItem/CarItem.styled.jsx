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
   
  & > img  {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
// ImgWrapper > Img  `
// display: block;
//   height: 100%;
//   width: 100%;
//   `

export const Img = styled.img`
  display: block;
 
  /* object-fit: cover; */
`;
export const Btn = styled.button`
  padding: 12px 99px;
  border-radius: 12px;
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
  fill: ${props => props.theme.colors.lightBlue};

  cursor: pointer;
`;
