import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  gap: 18px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  align-items: end;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Headers = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.darkGrey};
`;

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  padding-left: 18px;
  width: 224px;
  height: 48px;
  border: none;
  border-radius: 14px;
  background: #f7f7fb;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const SelectPrise = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-left: 18px;
  width: 125px;
  height: 48px;
  border: none;
  border-radius: 14px;
  background: #f7f7fb;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;
export const Input= styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-left: 18px;
  width: 125px;
  height: 48px;
  border: none;
  border-radius: 14px;
  background: #f7f7fb;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;
export const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  height: 48px;
  color: ${props => props.theme.colors.white};
  padding: 14px 44px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.lightBlue};
  cursor: pointer;
  &hover {
    background-color: ${props => props.theme.colors.darkBlue};
  }
`;
