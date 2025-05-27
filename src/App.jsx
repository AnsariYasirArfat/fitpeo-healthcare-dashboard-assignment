import React from "react";
import styled from "styled-components";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DashboardMainContent from "@/components/DashboardMainContent";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

const AppBackground = styled.div`
  min-height: 100svh;
  background: ${colors.backgroundBase};
  overflow: auto;
  color: ${colors.textPrimary};
  padding: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 5px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0;
  }
`;

const MainLayout = styled.div`
  position: relative;
  background-color: white;
  border-radius: 46px;

  display: flex;
  flex-direction: row;
  margin: 2px;

  @media (max-width: ${breakpoints.tablet}) {
    border-radius: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 12px;
  }
`;

function App() {
  return (
    <AppBackground>
      <MainLayout>
        <Header />
        <Sidebar />
        <DashboardMainContent />
      </MainLayout>
    </AppBackground>
  );
}

export default App;
