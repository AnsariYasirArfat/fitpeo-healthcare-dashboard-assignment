import React from "react";
import {
  HeaderContainer,
  Logo,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  RightSection,
  BellWrapper,
  Avatar,
  AddButton,
  LeftSection,
} from "@/styles/components/Header.styles";
import { Bell, Plus, Search } from "lucide-react";
import colors from "@/styles/colors";

const Header = () => (
  <HeaderContainer>
    <LeftSection>
      <Logo>
        <span>Health</span>care.
      </Logo>
      <SearchWrapper>
        <SearchInput placeholder="Search" />
        <SearchIcon>
          <Search />
        </SearchIcon>
      </SearchWrapper>
      <BellWrapper>
        <Bell color={colors.violetDark} fill={colors.violetDark} size={20} />
      </BellWrapper>
    </LeftSection>
    <RightSection>
      <Avatar>
        <span aria-label="avatar">🧑‍⚕️</span>
      </Avatar>
      <AddButton>
        <Plus  size={20}/>
      </AddButton>
    </RightSection>
  </HeaderContainer>
);

export default Header;
