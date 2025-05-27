import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Title,
  Time,
  Icon,
} from "@/styles/components/SimpleAppointmentCard.styles";

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <Card>
    <div
      style={{
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <Title>{title}</Title>
      <Icon>{icon}</Icon>
    </div>
    <Time>{time}</Time>
  </Card>
);

SimpleAppointmentCard.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SimpleAppointmentCard;
