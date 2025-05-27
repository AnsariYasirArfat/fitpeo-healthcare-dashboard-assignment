export const calendarData = [
  {
    day: "Mon",
    date: 25,
    times: [{ time: "10:00" }, { time: "11:00" }, { time: "12:00" }],
  },
  {
    day: "Tue",
    date: 26,
    times: [
      { time: "08:00" },
      { time: "09:00", active: "primary" },
      { time: "10:00" },
    ],
  },
  {
    day: "Wed",
    date: 27,
    times: [{ time: "12:00" }, { time: "----" }, { time: "13:00" }],
  },
  {
    day: "Thurs",
    date: 28,
    times: [
      { time: "10:00" },
      { time: "11:00", active: "secondary", },
      { time: "----" },
    ],
  },
  {
    day: "Fri",
    date: 29,
    times: [{ time: "----" }, { time: "14:00" }, { time: "16:00" }],
  },
  {
    day: "Sat",
    date: 30,
    times: [
      { time: "12:00", active: "secondary", join: true, isFirst:true },{ time: "14:00" }, 
      { time: "15:00" },
    ],
  },
  {
    day: "Sun",
    date: 31,
    times: [
      { time: "09:00", active: "secondary", join: true , isLast: true},
      { time: "10:00" },
      { time: "11:00" },
    ],
  },
];

export const appointmentCards = [
  {
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "🦷",
    primary: true,
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    icon: "💪",
    primary: false,
  },
];

export const upcomingAppointments = [
  {
    day: "On Thursday",
    items: [
      { title: "Health checkup complete", time: "11:00 AM", icon: "🩺" },
      { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
    ],
  },
  {
    day: "On Saturday",
    items: [
      { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
      { title: "Neurologist", time: "16:00 PM", icon: "🧑‍⚕️" },
    ],
  },
];
