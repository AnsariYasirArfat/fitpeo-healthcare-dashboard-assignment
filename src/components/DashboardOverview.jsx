import React from "react";
import AnatomySection from "@/components/AnatomySection";
import HealthStatusCards from "@/components/HealthStatusCards";
import ActivityFeed from "@/components/ActivityFeed";
import {
  OverviewWrapper,
  Top,
  Right,
} from "@/styles/components/DashboardOverview.styles";
import { ChevronDown } from "lucide-react";

const DashboardOverview = () => (
  <OverviewWrapper>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1 style={{ margin: 0 }}>Dashboard</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span>This Week </span>
        <ChevronDown size={15}/>
      </div>
    </div>
    <Top>
      <AnatomySection />
      <HealthStatusCards />
    </Top>
    <Right>
      <ActivityFeed />
    </Right>
  </OverviewWrapper>
);

export default DashboardOverview;
