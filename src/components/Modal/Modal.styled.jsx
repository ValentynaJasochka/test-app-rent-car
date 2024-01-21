import styled from 'styled-components';
import { ReactComponent as CrossBtn} from '../../image/x.svg';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const CloseBtn= styled(CrossBtn)`
  position: absolute;
  top: 16px;
  right: 16px;
   cursor: pointer;
`;
export const ModalContainer = styled.div`
position: relative;
box-sizing: border-box;
 width: 541px;
 height: 752px;
 border-radius: 24px;
 padding: 40px;
 background-color:${props => props.theme.colors.white};
`;
export const ModalImg = styled.div`
    width: 461px;;
    height: 248px;
 border-radius: 14px;
 margin-bottom: 14px;
 overflow: hidden;
`;
export const Heder = styled.h1` 
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`;

export const AccentText = styled.span`
  color: ${props => props.theme.colors.lightBlue};
`;
export const TextBlock = styled.div`
 overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  &:last-child {
    margin-bottom: 14px;
  }
`;
export const Description = styled.p` 
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 24px;
`;
export const DescriptionHeder = styled.h2` 
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`;
export const Condition = styled.div`
  margin-bottom: 24px;  
`  
export const ConditionBox = styled.ul`
display: flex;
  flex-wrap: wrap;
  gap: 8px;
`  
export const ConditionItem = styled.li`  
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  padding: 7px 14px;
  border-radius: 35px;
  background: ${props => props.theme.colors.grey};
`;
export const ConditionValue= styled.span` 
  color: ${props => props.theme.colors.lightBlue};
`;
export const PhoneBtn = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: ${props => props.theme.colors.white};
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;  
  background-color: ${props => props.theme.colors.lightBlue};
   cursor: pointer;



  &:hover{
    background:${props => props.theme.colors.darkBlue};
  }
`;
