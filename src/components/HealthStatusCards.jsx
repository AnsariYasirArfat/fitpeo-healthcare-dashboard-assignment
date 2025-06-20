import React from "react";
import healthData from "@/data/healthData";
import {
  CardsWrapper,
  Card,
  Info,
  Icon,
  Label,
  Date,
  StatusBar,
  StatusFill,
} from "@/styles/components/HealthStatusCards.styles";
import { ArrowRight } from "lucide-react";

const HealthStatusCards = () => (
  <CardsWrapper>
    {healthData.map((item, idx) => (
      <Card key={(item.label+ idx)}>
        <Info>
          <Icon>{item.icon}</Icon>
          <Label>{item.label}</Label>
        </Info>
        <Date>Date: {item.date}</Date>
        <StatusBar>
          <StatusFill status={item.status} color={item.color} />
        </StatusBar>
      </Card>
    ))}
    <div
      style={{
        alignSelf: "end",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        flex: 1,
        gap: "0.2rem",
        fontWeight: 600,
      }}
    >
      Details
      <ArrowRight style={{ width: "1rem" }} />
    </div>
  </CardsWrapper>
);

export default HealthStatusCards;
