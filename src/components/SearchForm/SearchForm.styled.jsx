import styled from 'styled-components';



export const Button = styled.button`
 
  padding: 14px 44px;
  border-radius: 12px;
  /* font-family: Manrope; */
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  &hover{
    background-color: ${({ theme }) => theme.colors.darkBlue};

  }
`
export const Label= styled.label`
display:flex;
flex-direction: column;
`
export const Form= styled.form`
margin-left: auto;
margin-right: auto;
display:flex;
gap: 18px;
`
