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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flex: 1,
        }}
      >
        <SearchWrapper>
          <SearchInput placeholder="Search" />
          <SearchIcon>
            <Search size={20} />
          </SearchIcon>
        </SearchWrapper>
        <BellWrapper>
          <Bell color={colors.violetDark} fill={colors.violetDark} size={20} />
        </BellWrapper>
      </div>
    </LeftSection>
    <RightSection>
      <Avatar>
        <span aria-label="avatar">🧑‍⚕️</span>
      </Avatar>
      <AddButton>
        <Plus size={20} />
      </AddButton>
    </RightSection>
  </HeaderContainer>
);

export default Header;
