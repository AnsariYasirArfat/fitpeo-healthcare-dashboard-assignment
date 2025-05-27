import React from "react";
import { calendarData, appointmentCards } from "@/data/appointments";
import {
  CalendarBox,
  CalendarHeader,
  Month,
  NavArrows,
  CalendarGrid,
  DayCol,
  DayLabel,
  DateNum,
  TimeSlot,
  AppointmentCards,
  AppointmentCard,
} from "@/styles/components/CalendarView.styles";
import colors from "@/styles/colors";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const CalendarView = () => (
  <CalendarBox>
    <CalendarHeader>
      <Month>October 2021</Month>
      <NavArrows>
        <ArrowBigLeft color={colors.violetDark} fill={colors.violetDark} />
        <ArrowBigRight color={colors.violetDark} fill={colors.violetDark} />
      </NavArrows>
    </CalendarHeader>
    <CalendarGrid>
      {calendarData.map((col, idx) => (
        <DayCol key={col.day + idx} day={col.day}>
          <DayLabel>{col.day}</DayLabel>
          <DateNum>{col.date}</DateNum>
          {col.times.map((slot, idx) => (
            <TimeSlot
              key={slot.time + idx}
              active={slot.active}
              join={slot.join}
              isFirst={slot.isFirst}
              isLast={slot.isLast}
            >
              {slot.time}
            </TimeSlot>
          ))}
        </DayCol>
      ))}
    </CalendarGrid>
    <AppointmentCards>
      {appointmentCards.map((card) => (
        <AppointmentCard key={card.title} primary={card.primary}>
          <div
            style={{
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              gap: "0.2rem",
            }}
          >
            <h1>{card.title}</h1>
            <span aria-label="icon">{card.icon}</span>
          </div>
          <p>{card.time}</p>
          <p>{card.doctor} </p>
        </AppointmentCard>
      ))}
    </AppointmentCards>
  </CalendarBox>
);

export default CalendarView;
