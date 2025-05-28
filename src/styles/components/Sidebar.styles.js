import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "../colors";

export const SidebarContainer = styled.aside`
  background: ${colors.backgroundLight};
  margin: 10px;
  border-top-left-radius: 36px;
  border-bottom-left-radius: 36px;
  min-height: 100vh;
  padding: 8rem 1rem 2rem;
  display: flex;
  flex-direction: column;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.06);

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
  @media (max-width: ${breakpoints.mobile}) {
  }
`;

export const SectionTitle = styled.div`
  color: #b0b7c3;
  font-size: 0.95rem;
  font-weight: 600;
  margin: 2.2rem 0 1rem 0;
  letter-spacing: 0.5px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
    margin: 1.8rem 0 0.8rem 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1.2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? 700 : 500)};
  color: ${({ active }) => (active ? "#22223b" : "#8e9aac")};
  text-decoration: none;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
    gap: 0.8rem;
  }
`;

export const Icon = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Setting = styled.div`
  margin-top: auto;
  color: #b0b7c3;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #e0e7ff;
    color: #22223b;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
    padding: 0.6rem 1rem;
    gap: 0.8rem;
  }
`;
