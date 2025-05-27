import React from "react";
import {
  SidebarContainer,
  Icon,
  Spacer,
  Setting,
  SectionTitle,
  Nav,
  NavLink,
} from "@/styles/components/Sidebar.styles";
import {
  CalendarDays,
  ChartColumnStacked,
  FilePlus2,
  History,
  LayoutDashboard,
  MessageCircle,
  Phone,
} from "lucide-react";
import colors from "@/styles/colors";

const Sidebar = () => {
  const navigationData = {
    general: [
      { label: "Dashboard", icon: <LayoutDashboard color={colors.textPrimary} fill={colors.textPrimary}/> },
      { label: "History", icon: <History /> },
      { label: "Calendar", icon: <CalendarDays /> },
      { label: "Appointments", icon: <FilePlus2 /> },
      { label: "Statistics", icon: <ChartColumnStacked /> },
    ],
    tools: [
      { label: "Chat", icon: <MessageCircle /> },
      { label: "Support", icon: <Phone /> },
    ],
  };
  return (
    <SidebarContainer>
      <SectionTitle>General</SectionTitle>
      <Nav>
        {navigationData.general.map((link) => (
          <NavLink
            key={link.label}
            href="#"
            active={link.label === "Dashboard"}
          >
            <Icon>{link.icon} </Icon> {link.label}
          </NavLink>
        ))}
      </Nav>

      <SectionTitle>Tools</SectionTitle>
      <Nav>
        {navigationData.tools.map((link) => (
          <NavLink key={link.label} href="#" active={link.active}>
            <Icon>{link.icon}</Icon> {link.label}
          </NavLink>
        ))}
      </Nav>

      <Spacer />

      <Setting>
        <Icon>⚙️</Icon> Setting
      </Setting>
    </SidebarContainer>
  );
};

export default Sidebar;
