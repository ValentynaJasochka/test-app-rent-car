import styled from 'styled-components';



export const Button = styled.button`
  display: block;
  margin: 100px auto ;
  padding: 20px 70px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.lightBlue}; 
  cursor: pointer;
  &hover{
    color: ${({ theme }) => theme.colors.darkBlue};
    

  }
`;

