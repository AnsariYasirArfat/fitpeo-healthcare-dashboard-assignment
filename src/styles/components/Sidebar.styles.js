import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "../colors";

export const SidebarContainer = styled.aside`
  background: ${colors.backgroundLight};
  margin: 8px;
  border-top-left-radius: 36px;
  border-bottom-left-radius: 36px;
  min-height: 100vh;
  padding: 8rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 24px rgba(79, 140, 255, 0.04);

  @media (max-width: ${breakpoints.tablet}) {
    position: fixed;
    left: -240px;
    top: 0;
    z-index: 100;
    transition: left 0.3s ease;

    &.open {
      left: 0;
    }
  }
`;

export const SectionTitle = styled.div`
  color: #b0b7c3;
  font-size: 0.95rem;
  font-weight: 600;
  margin: 2.2rem 0 1rem 0;
  letter-spacing: 0.5px;
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
`;
