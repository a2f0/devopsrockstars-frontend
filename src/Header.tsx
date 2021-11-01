import React from 'react';
import FlexContainerRow from './shared/FlexContainerRow';
import MenuItemLeft from './styled-components/MenuItemLeft';
import MenuItemRight from './styled-components/MenuItemRight';
import styled from 'styled-components';

export const MenuLink = styled.a`
  font-size: 24px;
`;

const Header = React.memo(() => {
  return (
    <header className="flex-header">
      <FlexContainerRow>
        <div className="flex-container-left">
          <MenuItemLeft></MenuItemLeft>
        </div>
        <div className="flex-container-right">
          <MenuItemRight>
            <MenuLink href="/company">company</MenuLink>
          </MenuItemRight>
          <MenuItemRight>
            <MenuLink href="/contact">contact</MenuLink>
          </MenuItemRight>
        </div>
      </FlexContainerRow>
    </header>
  );
});

export default Header;
