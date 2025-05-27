import React from "react";
import activityData from "@/data/activityData";
import {
  ActivityBox,
  TitleRow,
  Title,
  SubText,
  ChartWrapper,
  BarGroup,
  Bar,
  DayLabel,
} from "@/styles/components/ActivityFeed.styles";

const ActivityFeed = () => (
  <ActivityBox>
    <TitleRow>
      <Title>Activity</Title>
      <SubText>3 appointment on this week</SubText>
    </TitleRow>
    <ChartWrapper>
      {activityData.map((item) => (
        <div key={item.day}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "14px",
            }}
          >
            {item.barGroups.map((group, i) => (
              <BarGroup key={i} style={group.style}>
                {group.bars.map((bar, j) => (
                  <Bar key={j} color={bar.color} height={bar.height} />
                ))}
              </BarGroup>
            ))}
          </div>
          <DayLabel>{item.day}</DayLabel>
        </div>
      ))}
    </ChartWrapper>
  </ActivityBox>
);

export default ActivityFeed;
