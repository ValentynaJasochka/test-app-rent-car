import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';


export const BackLink = styled(Link)`
  display: inline-block;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: lightgrey;
  margin-bottom: 20px;
  &:hover,
  :focus {
    background-color: navy;
    color: white;
  }
`;


export const InformationLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.hover {
    color: white;
    background-color: navy;
  }
`;
