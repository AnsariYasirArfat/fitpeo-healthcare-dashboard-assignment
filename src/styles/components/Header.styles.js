import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

export const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
    height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0.5rem;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  letter-spacing: -1px;
  span {
    color: ${colors.accentCyan};
  }
  margin-right: 100px;
  margin-left: 36px
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 420px;
  height: 36px;
  padding: 0 1.2rem 0 4rem;
  border-radius: 12px;
  border: 1.5px solid #e0e7ff;
  font-size: 1rem;
  outline: none;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 336px;
    margin: 0 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 200px;
    margin: 0;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
`;

export const BellWrapper = styled.div`
  border: 2px solid ${colors.lightGrey};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  margin-right: 36px;

`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  background: ${colors.accentCyan};
  border-radius: 12px;
  border: 2.5px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #fff;
  box-shadow: 0 2px 8px rgba(79, 140, 255, 0.1);
`;

export const AddButton = styled.button`
  background: ${colors.violetDark};
  color: #fff;
  border: none;
  border-radius: 12px;
  width: 36px;
  height: 36px;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(79, 140, 255, 0.1);
  transition: background 0.2s;
  &:hover {
    background: #2563eb;
  }
`;
