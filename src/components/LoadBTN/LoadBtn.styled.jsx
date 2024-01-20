import styled from 'styled-components';



export const Button = styled.button`
  display: block;
  margin: 100px auto;
  padding: 20px 70px;
  /* font-family: Manrope; */
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightBlue};
  &hover{
    color: ${({ theme }) => theme.colors.darkBlue};

  }
`;

