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
    {upcomingAppointments.map((section) => (
      <DaySection key={section.day}>
        <DayLabel>{section.day}</DayLabel>
        <div
          style={{
            fontWeight: "bold",
            display: "flex",
            gap: "1.5rem",
          }}
        >
          {section.items.map((item) => (
            <SimpleAppointmentCard
              key={item.title}
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
