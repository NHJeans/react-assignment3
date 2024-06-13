import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const ProfileWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
`;

export const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  color: white;
  font-size: 14px;
`;