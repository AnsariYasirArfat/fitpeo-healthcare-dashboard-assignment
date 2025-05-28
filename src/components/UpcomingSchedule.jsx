import React from "react";
import SimpleAppointmentCard from "@/components/SimpleAppointmentCard";
import {
  ScheduleBox,
  SectionTitle,
  DaySection,
  DayLabel,
} from "@/styles/components/UpcomingSchedule.styles";
import { upcomingAppointments } from "@/data/appointments";

const UpcomingSchedule = () => (
  <ScheduleBox>
    <SectionTitle>The Upcoming Schedule</SectionTitle>
    {upcomingAppointments.map((section, idx) => (
      <DaySection key={section.day + idx}>
        <DayLabel>{section.day}</DayLabel>
        <div
          style={{
            fontWeight: "bold",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {section.items.map((item, idx) => (
            <SimpleAppointmentCard
              key={item.title + idx}
              title={item.title}
              time={item.time}
              icon={item.icon}
            />
          ))}
        </div>
      </DaySection>
    ))}
  </ScheduleBox>
);

export default UpcomingSchedule;
