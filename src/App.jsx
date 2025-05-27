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
  overflow: hidden;
  color: ${colors.textPrimary};
  padding: 10px;
`;

const MainLayout = styled.div`
  position: relative;
  background-color: white;
  border-radius: 46px;

  display: flex;
  flex-direction: row;
  margin: 2px;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
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
